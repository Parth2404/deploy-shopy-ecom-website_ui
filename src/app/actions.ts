"use server";

import { trackViaFbPixel } from "@/lib/utils";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

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

  trackViaFbPixel("lead_contact", `lead_contact_${Date.now()}`, {
    name,
    email,
    store,
  });

  const { API_URL } = process.env;

  if (!API_URL) {
    console.error("Contact form: API_URL not configured; request not sent.", {
      name,
      email,
      store,
      message,
    });
    return {
      status: "error",
      message:
        "We couldn't send your message right now. Please try again shortly.",
    };
  }

  try {
    const res = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, store: store || undefined, message }),
    });
    if (!res.ok) {
      throw new Error(`Contact API responded with ${res.status}`);
    }
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
