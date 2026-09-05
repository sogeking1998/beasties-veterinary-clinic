import { NextResponse } from "next/server";

interface ContactPayload {
  ownerName: string;
  phone: string;
  petName: string;
  petType: string;
  service: string;
  preferredDate: string;
  message?: string;
}

type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

function validate(payload: Partial<ContactPayload>): FieldErrors {
  const errors: FieldErrors = {};

  if (!payload.ownerName?.trim()) {
    errors.ownerName = "Please tell us your name.";
  }

  if (!payload.phone?.trim()) {
    errors.phone = "Please add a phone number so we can reach you.";
  } else if (!/^[0-9+()\-.\s]{7,20}$/.test(payload.phone.trim())) {
    errors.phone = "That phone number doesn't look right.";
  }

  if (!payload.petName?.trim()) {
    errors.petName = "What's your beastie's name?";
  }

  if (!payload.petType?.trim()) {
    errors.petType = "Let us know what kind of pet this is.";
  }

  if (!payload.service?.trim()) {
    errors.service = "Please choose a service.";
  }

  if (!payload.preferredDate?.trim()) {
    errors.preferredDate = "Please choose a preferred date.";
  } else if (Number.isNaN(Date.parse(payload.preferredDate))) {
    errors.preferredDate = "That date doesn't look right.";
  }

  return errors;
}

export async function POST(request: Request) {
  let payload: Partial<ContactPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: "We couldn't read that submission. Please try again." } },
      { status: 400 }
    );
  }

  const errors = validate(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // TODO: wire up email/notification here (e.g. Resend, Nodemailer, or a
  // form backend) to actually deliver this request to the clinic's staff.
  // No database is used — this route only validates and acknowledges.
  console.log("New appointment request:", payload);

  return NextResponse.json({
    ok: true,
    message: "Thanks! We've received your request and will call you shortly to confirm.",
  });
}
