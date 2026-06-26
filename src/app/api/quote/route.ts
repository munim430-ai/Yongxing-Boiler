import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const {
    factory, currentBoiler, capacity, application,
    name, phone, email, message,
  } = data;

  // Build email body
  const body = `
New Quote Request — Yongxing Boiler Bangladesh

Factory Name:     ${factory}
Current Boiler:   ${currentBoiler || "Not specified"}
Capacity Needed:  ${capacity}
Application:      ${application}
Contact Name:     ${name}
Phone/WhatsApp:   ${phone}
Email:            ${email || "Not provided"}

Message:
${message || "None"}

---
Sent from yongxing-boiler-bangladesh.vercel.app
  `.trim();

  // Send via Formspree (no backend needed, free tier)
  const FORMSPREE_ENDPOINT = process.env.FORMSPREE_URL || "https://formspree.io/f/xpwlkagl";

  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      email: email || "hasibulmunim@gmail.com",
      _replyto: email || phone,
      subject: `Quote Request: ${factory} — ${capacity}`,
      message: body,
      factory,
      currentBoiler,
      capacity,
      application,
      name,
      phone,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
