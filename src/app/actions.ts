"use server";

import { SendMailClient } from "zeptomail";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const store = String(formData.get("store") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email, and message.",
    };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "That email address doesn't look right. Try name@store.com.",
    };
  }

  const { ZEPTO_URL, ZEPTO_TOKEN, APP_EMAIL, APP_EMAIL_NAME, CONTACT_TO_EMAIL } =
    process.env;

  if (!ZEPTO_URL || !ZEPTO_TOKEN || !APP_EMAIL || !CONTACT_TO_EMAIL) {
    console.error(
      "Contact form: ZEPTO_URL/ZEPTO_TOKEN/APP_EMAIL/CONTACT_TO_EMAIL not configured; message not sent.",
      { name, email, store, message },
    );
    return {
      status: "error",
      message:
        "We couldn't send your message right now. Please try again shortly.",
    };
  }

  try {
    const client = new SendMailClient({ url: ZEPTO_URL, token: ZEPTO_TOKEN });
    await client.sendMail({
      from: { address: APP_EMAIL, name: APP_EMAIL_NAME ?? "Mobile Connect" },
      to: [{ email_address: { address: CONTACT_TO_EMAIL, name: "Mobile Connect team" } }],
      reply_to: [{ address: email, name }],
      subject: `New contact form message from ${name}`,
      htmlbody: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Store:</strong> ${escapeHtml(store || "—")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });
    return {
      status: "success",
      message: "Thanks — we've got your message and will reply by email soon.",
    };
  } catch (error) {
    console.error("Contact form send failed:", error);
    return {
      status: "error",
      message:
        "We couldn't send your message right now. Please try again shortly.",
    };
  }
}
