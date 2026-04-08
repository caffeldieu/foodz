"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input, inputClass } from "@/components/ui/Input";
import { easeEditorial } from "@/lib/motion";
import {
  contactFormSchemaWithDate,
  type ContactFormValues,
  eventTypes,
  guestOptions,
} from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  date: "",
  guests: "10-25",
  eventType: "Firmenfeier",
  message: "",
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchemaWithDate),
    defaultValues,
  });

  async function onSubmit(data: ContactFormValues) {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setServerError(
          typeof json?.error === "string" ? json.error : "Senden fehlgeschlagen."
        );
        return;
      }
      setSubmitted(true);
      reset(defaultValues);
    } catch {
      setServerError("Netzwerkfehler. Bitte später erneut versuchen.");
    }
  }

  return (
    <section
      id="anfrage"
      className="scroll-mt-28 bg-gradient-to-b from-sage-mist/70 to-blush/30 py-section-sm md:py-section"
    >
      <div className="mx-auto max-w-container px-6 md:px-10">
        <motion.div
          className="mx-auto max-w-2xl rounded-4xl bg-warm-white p-8 shadow-lift ring-1 ring-stone/25 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: easeEditorial }}
        >
          <h2 className="font-display text-section-title font-medium tracking-tight text-espresso">
            Anfrage
          </h2>
          <p className="mt-4 font-sans text-[15px] leading-relaxed text-coffee">
            Erzählen Sie uns von Ihrem Anlass — wir melden uns zeitnah.
          </p>

          {submitted ? (
            <div
              className="mt-10 rounded-2xl border border-sage/40 bg-sage-mist/30 p-8 text-coffee"
              role="status"
            >
              <p className="font-display text-xl text-espresso">Gesendet.</p>
              <Button
                type="button"
                variant="secondary"
                className="mt-8"
                onClick={() => setSubmitted(false)}
              >
                OK
              </Button>
            </div>
          ) : (
            <form
              className="mt-10 space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div>
                <label htmlFor="name" className="label-caps">
                  Name
                </label>
                <Input
                  id="name"
                  className="mt-2"
                  autoComplete="name"
                  error={errors.name?.message}
                  {...register("name")}
                />
              </div>

              <div>
                <label htmlFor="email" className="label-caps">
                  E-Mail
                </label>
                <Input
                  id="email"
                  type="email"
                  className="mt-2"
                  autoComplete="email"
                  error={errors.email?.message}
                  {...register("email")}
                />
              </div>

              <div>
                <label htmlFor="phone" className="label-caps">
                  Telefon (optional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  className="mt-2"
                  autoComplete="tel"
                  error={errors.phone?.message}
                  {...register("phone")}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="date" className="label-caps">
                    Datum
                  </label>
                  <input
                    id="date"
                    type="date"
                    className={cn(inputClass, "mt-2", errors.date && "border-error")}
                    {...register("date")}
                  />
                  {errors.date ? (
                    <p className="mt-1 font-sans text-[13px] text-error" role="alert">
                      {errors.date.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="guests" className="label-caps">
                    Gästeanzahl
                  </label>
                  <select
                    id="guests"
                    className={cn(inputClass, "mt-2", errors.guests && "border-error")}
                    {...register("guests")}
                  >
                    {guestOptions.map((g) => (
                      <option key={g} value={g}>
                        {g} Gäste
                      </option>
                    ))}
                  </select>
                  {errors.guests ? (
                    <p className="mt-1 font-sans text-[13px] text-error" role="alert">
                      {errors.guests.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="eventType" className="label-caps">
                  Art des Events
                </label>
                <select
                  id="eventType"
                  className={cn(
                    inputClass,
                    "mt-2",
                    errors.eventType && "border-error"
                  )}
                  {...register("eventType")}
                >
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.eventType ? (
                  <p className="mt-1 font-sans text-[13px] text-error" role="alert">
                    {errors.eventType.message}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="message" className="label-caps">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  maxLength={500}
                  className={cn(
                    inputClass,
                    "mt-2 resize-y min-h-[120px]",
                    errors.message && "border-error"
                  )}
                  {...register("message")}
                />
                {errors.message ? (
                  <p className="mt-1 font-sans text-[13px] text-error" role="alert">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>

              {serverError ? (
                <p className="font-sans text-sm text-error" role="alert">
                  {serverError}
                </p>
              ) : null}

              <Button
                type="submit"
                variant="primary"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "…" : "Anfrage senden"}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
