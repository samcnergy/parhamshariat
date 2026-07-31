"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <form action={formAction} className="mt-8 max-w-xl space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1.5 w-full border border-border bg-background px-3 py-2.5 text-base focus:border-foreground"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full border border-border bg-background px-3 py-2.5 text-base focus:border-foreground"
        />
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium">
          Reason for contact
        </label>
        <select
          id="reason"
          name="reason"
          defaultValue="general"
          className="mt-1.5 w-full border border-border bg-background px-3 py-2.5 text-base focus:border-foreground"
        >
          <option value="general">General</option>
          <option value="media">Media</option>
          <option value="speaking">Speaking</option>
          <option value="consulting">Consulting</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full border border-border bg-background px-3 py-2.5 text-base focus:border-foreground"
        />
      </div>

      <div aria-live="polite">
        {state.status !== "idle" && (
          <p
            className={
              state.status === "success"
                ? "text-sm font-medium text-green-700 dark:text-green-400"
                : "text-sm font-medium text-red-700 dark:text-red-400"
            }
          >
            {state.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="bg-foreground px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-background transition-opacity hover:opacity-85 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
