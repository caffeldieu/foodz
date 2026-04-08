import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchemaWithDate } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const parsed = contactFormSchemaWithDate.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const msg =
      Object.values(first).flat()[0] ?? "Validierung fehlgeschlagen.";
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  const data = parsed.data;
  const text = [
    `Name: ${data.name}`,
    `E-Mail: ${data.email}`,
    data.phone ? `Telefon: ${data.phone}` : null,
    `Datum: ${data.date}`,
    `Gäste: ${data.guests}`,
    `Event: ${data.eventType}`,
    data.message ? `Nachricht:\n${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM ?? "FoodZ <onboarding@resend.dev>";
  const to = process.env.CONTACT_EMAIL ?? "info@foodz.de";

  if (apiKey) {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject: `Neue Catering-Anfrage — ${data.name}`,
      text,
      replyTo: data.email,
    });
    if (error) {
      console.error("[contact]", error);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 502 }
      );
    }
  } else {
    console.info("[contact] RESEND_API_KEY missing — logging submission:\n", text);
  }

  return NextResponse.json({ ok: true });
}
