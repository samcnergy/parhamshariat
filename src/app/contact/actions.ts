"use server";

import { getSupabaseClient } from "@/lib/supabase/client";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const validReasons = new Set(["media", "speaking", "consulting", "general"]);

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const reason = String(formData.get("reason") ?? "general").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email, and message.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const safeReason = validReasons.has(reason) ? reason : "general";

  try {
    const supabase = getSupabaseClient();
    const { error } = await supabase
      .from("contact_submissions")
      .insert({ name, email, reason: safeReason, message });

    if (error) {
      console.error("Supabase contact insert failed:", error.message);
      return {
        status: "error",
        message:
          "Something went wrong submitting your message. Please email parhamshariat@gmail.com directly.",
      };
    }

    return {
      status: "success",
      message: "Thanks — your message has been sent. Parham will be in touch soon.",
    };
  } catch (err) {
    console.error("Contact form submission error:", err);
    return {
      status: "error",
      message:
        "Something went wrong submitting your message. Please email parhamshariat@gmail.com directly.",
    };
  }
}
