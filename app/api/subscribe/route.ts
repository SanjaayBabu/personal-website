import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let email: string;
  try {
    const body = await req.json();
    email = (body.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 422 });
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  try {
    await resend.contacts.create({
      audienceId,
      email,
      unsubscribed: false,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
