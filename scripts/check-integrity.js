const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = process.cwd();
const SKIP_DIRS = new Set([
  "node_modules",
  ".git",
  ".next",
  "out",
  "dist",
  "coverage",
  ".agents",
  ".claude",
]);

// Files that Node tooling executes automatically at dev/build time.
const EXECUTED_AT_BUILD = [
  /\.config\.(c|m)?[jt]s$/, // next.config.ts, next.config.js, postcss.config.mjs, tailwind.config.js, ...
  /^\.babelrc(\.js)?$/,
  /^babel\.config\.(c|m)?[jt]s$/,
];
const ALSO_SCAN_DIRS = [".husky", "scripts"];

// Signatures seen in this family (plus general obfuscation markers).
const SIGNATURES = [
  { name: "String.fromCharCode(127) decoder", re: /fromCharCode\(\s*127\s*\)/ },
  { name: "global[...] assignment", re: /global\s*\[[^\]]+\]\s*=/ },
  { name: "dynamic Function construction", re: /\bnew\s+Function\s*\(|\bFunction\s*\(/ },
  { name: "eval call", re: /\beval\s*\(/ },
  { name: "obfuscated _$_ identifier", re: /\b_\$_[A-Za-z0-9]+/ },
  { name: "shell / process execution", re: /child_process|execSync|spawnSync|execFileSync/ },
  { name: "base64 / atob decoding", re: /\batob\s*\(|Buffer\.from\([^)]*['"]base64['"]\)/ },
  { name: "hex-escape run", re: /(\\x[0-9a-fA-F]{2}){8,}/ },
];
const MAX_LINE_LENGTH = 400;

// SHA-256 of files you have reviewed and trust. Fill in after verifying.
const KNOWN_GOOD = {
  // 'postcss.config.js': '<sha256 hex>',
};

const findings = [];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walk(path.join(dir, entry.name), out);
    } else if (entry.isFile()) {
      out.push(path.join(dir, entry.name));
    }
  }
  return out;
}

function isTarget(rel) {
  // Do not scan the integrity script itself
  if (
    rel === path.join("scripts", "check-integrity.js") ||
    rel === path.join("scripts", "check-integrity.js.js")
  ) {
    return false;
  }
  const base = path.basename(rel);
  if (EXECUTED_AT_BUILD.some((re) => re.test(base))) return true;
  return ALSO_SCAN_DIRS.some((d) => rel.startsWith(d + path.sep) || rel.startsWith(d + "/"));
}

function check(rel, abs) {
  const content = fs.readFileSync(abs, "utf8");
  const hash = crypto.createHash("sha256").update(content).digest("hex");

  if (KNOWN_GOOD[rel]) {
    if (KNOWN_GOOD[rel] !== hash) {
      findings.push(`${rel}: hash does not match the reviewed version`);
    }
    return;
  }

  for (const sig of SIGNATURES) {
    if (sig.re.test(content)) findings.push(`${rel}: ${sig.name}`);
  }

  const longest = Math.max(...content.split("\n").map((l) => l.length));
  if (longest > MAX_LINE_LENGTH) {
    findings.push(`${rel}: line of ${longest} chars (possible packed payload)`);
  }
}

const files = walk(ROOT).map((abs) => ({ abs, rel: path.relative(ROOT, abs) }));

for (const { abs, rel } of files) {
  if (isTarget(rel)) check(rel, abs);
}

// Lifecycle scripts in package.json can run code on install and on every npm run.
const ALLOWED_LIFECYCLE_SCRIPTS = {
  prepare: "husky",
};

const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));
for (const key of ["preinstall", "postinstall", "prepare", "predev", "prestart", "prebuild"]) {
  if (
    pkg.scripts &&
    pkg.scripts[key] &&
    key !== "predev" &&
    key !== "prestart" &&
    key !== "prebuild"
  ) {
    if (ALLOWED_LIFECYCLE_SCRIPTS[key] === pkg.scripts[key]) {
      continue;
    }
    findings.push(`package.json: lifecycle script "${key}" is defined (review it)`);
  }
}

if (findings.length) {
  console.error("\n[integrity] BLOCKED: suspicious content found\n");
  for (const f of findings) console.error("  - " + f);
  console.error("\nDo not run dev/build/start until these are reviewed. See the incident notes.\n");
  process.exit(1);
}

console.log(`[integrity] OK: ${files.length} files scanned, no findings.`);
