"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { services, petTypes } from "@/lib/data";

type FormValues = {
  ownerName: string;
  phone: string;
  petName: string;
  petType: string;
  service: string;
  preferredDate: string;
  message: string;
};

const initialValues: FormValues = {
  ownerName: "",
  phone: "",
  petName: "",
  petType: "",
  service: "",
  preferredDate: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";
type FormErrors = Partial<Record<keyof FormValues, string>>;

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/30 ${
    hasError ? "border-pink" : "border-ink/15"
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-bold text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-xs font-semibold text-pink">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const today = new Date().toISOString().split("T")[0];

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): boolean {
    const nextErrors: FormErrors = {};
    if (!values.ownerName.trim()) nextErrors.ownerName = "Please tell us your name.";
    if (!values.phone.trim()) nextErrors.phone = "Please add a phone number.";
    if (!values.petName.trim()) nextErrors.petName = "What's your beastie's name?";
    if (!values.petType.trim()) nextErrors.petType = "Please choose a pet type.";
    if (!values.service.trim()) nextErrors.service = "Please choose a service.";
    if (!values.preferredDate.trim()) nextErrors.preferredDate = "Please choose a date.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        setStatusMessage(data.errors?.form ?? "Something didn't go through. Please try again or call us.");
        return;
      }

      setStatus("success");
      setStatusMessage(data.message);
      setValues(initialValues);
    } catch {
      setStatus("error");
      setStatusMessage("We couldn't reach the server. Please try again or call us.");
    }
  }

  if (status === "success") {
    return (
      <div className="reveal flex flex-col items-center rounded-2xl border border-pink-soft bg-pink-soft/30 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-pink" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-bold text-ink">Request sent!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate">{statusMessage}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-bold text-pink underline-offset-4 hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="reveal rounded-2xl border border-ink/5 bg-white p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="ownerName" error={errors.ownerName}>
          <input
            id="ownerName"
            name="ownerName"
            type="text"
            required
            autoComplete="name"
            value={values.ownerName}
            onChange={(e) => updateField("ownerName", e.target.value)}
            aria-invalid={Boolean(errors.ownerName)}
            aria-describedby={errors.ownerName ? "ownerName-error" : undefined}
            className={inputClass(Boolean(errors.ownerName))}
          />
        </Field>

        <Field label="Phone number" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass(Boolean(errors.phone))}
          />
        </Field>

        <Field label="Pet's name" htmlFor="petName" error={errors.petName}>
          <input
            id="petName"
            name="petName"
            type="text"
            required
            value={values.petName}
            onChange={(e) => updateField("petName", e.target.value)}
            aria-invalid={Boolean(errors.petName)}
            aria-describedby={errors.petName ? "petName-error" : undefined}
            className={inputClass(Boolean(errors.petName))}
          />
        </Field>

        <Field label="Pet type" htmlFor="petType" error={errors.petType}>
          <select
            id="petType"
            name="petType"
            required
            value={values.petType}
            onChange={(e) => updateField("petType", e.target.value)}
            aria-invalid={Boolean(errors.petType)}
            aria-describedby={errors.petType ? "petType-error" : undefined}
            className={inputClass(Boolean(errors.petType))}
          >
            <option value="">Select one</option>
            {petTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Service needed" htmlFor="service" error={errors.service}>
          <select
            id="service"
            name="service"
            required
            value={values.service}
            onChange={(e) => updateField("service", e.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={inputClass(Boolean(errors.service))}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other / not sure</option>
          </select>
        </Field>

        <Field label="Preferred date" htmlFor="preferredDate" error={errors.preferredDate}>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            required
            min={today}
            value={values.preferredDate}
            onChange={(e) => updateField("preferredDate", e.target.value)}
            aria-invalid={Boolean(errors.preferredDate)}
            aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
            className={inputClass(Boolean(errors.preferredDate))}
          />
        </Field>
      </div>

      <Field label="Anything else we should know? (optional)" htmlFor="message" className="mt-5">
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={inputClass(false)}
        />
      </Field>

      <div aria-live="polite" className="mt-2">
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm font-semibold text-pink">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            {statusMessage}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-pink px-6 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === "submitting" ? "Sending..." : "Request Appointment"}
      </button>
    </form>
  );
}
