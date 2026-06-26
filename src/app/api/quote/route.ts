import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const {
    factory, currentBoiler, capacity, application,
    name, phone, email, message,
  } = data;

  const subject = `Quote Request: ${factory} — ${capacity}`;
  const body = [
    `Factory Name:    ${factory}`,
    `Current Boiler:  ${currentBoiler || "Not specified"}`,
    `Capacity Needed: ${capacity}`,
    `Application:     ${application}`,
    `Contact Name:    ${name}`,
    `Phone/WhatsApp:  ${phone}`,
    `Email:           ${email || "Not provided"}`,
    ``,
    `Message:`,
    message || "None",
    ``,
    `---`,
    `Sent from yongxing-boiler-bangladesh.vercel.app`,
  ].join("\n");

  // Primary: env-configured endpoint (Web3Forms / Formspree / any POST-to-email service)
  const endpointUrl = process.env.FORM_ENDPOINT_URL;
  const web3FormsKey = process.env.WEB3FORMS_KEY;

  if (web3FormsKey) {
    // Web3Forms — https://web3forms.com (free, no server needed)
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: web3FormsKey,
        subject,
        from_name: name,
        email: email || "noreply@yongxing-bd.com",
        message: body,
        factory, capacity, application, phone,
      }),
    });
    if (!res.ok) return NextResponse.json({ error: "Submission failed" }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  if (endpointUrl) {
    // Generic POST-to-email (Formspree, etc.)
    const res = await fetch(endpointUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ subject, message: body, email, name, phone, factory, capacity, application }),
    });
    if (!res.ok) return NextResponse.json({ error: "Submission failed" }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  // Fallback: Formsubmit.co (no signup, just works — first submission triggers email verification)
  const res = await fetch("https://formsubmit.co/ajax/hasibulmunim@gmail.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: subject,
      _template: "table",
      _captcha: "false",
      factory, currentBoiler: currentBoiler || "—", capacity, application,
      name, phone, email: email || "—", message: message || "—",
    }),
  });

  if (!res.ok) return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  return NextResponse.json({ ok: true });
}
