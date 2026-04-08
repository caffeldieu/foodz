import { z } from "zod";

export const guestOptions = [
  "10-25",
  "25-50",
  "50-100",
  "100-200",
  "200+",
] as const;

export const eventTypes = [
  "Firmenfeier",
  "Private Feier",
  "Hochzeit",
  "Sonstiges",
] as const;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Mindestens 2 Zeichen."),
  email: z.string().email("Bitte gültige E-Mail angeben."),
  phone: z.string().optional(),
  date: z.string().min(1, "Bitte Datum wählen."),
  guests: z.enum(guestOptions),
  eventType: z.enum(eventTypes),
  message: z.string().max(500, "Maximal 500 Zeichen."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function refineFutureDate(data: ContactFormValues, ctx: z.RefinementCtx) {
  const d = new Date(data.date);
  if (Number.isNaN(d.getTime())) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Ungültiges Datum.",
      path: ["date"],
    });
    return;
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (d < today) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Bitte ein zukünftiges Datum wählen.",
      path: ["date"],
    });
  }
}

export const contactFormSchemaWithDate = contactFormSchema.superRefine(
  refineFutureDate
);
