import { Clock, MapPin, Phone } from "lucide-react";
import { FacebookIcon } from "./icons";
import { clinicInfo } from "@/lib/data";

const items = [
  { icon: MapPin, content: <span>{clinicInfo.address}</span> },
  {
    icon: Phone,
    content: (
      <a href={clinicInfo.phoneHref} className="font-semibold hover:text-pink">
        {clinicInfo.phone}
      </a>
    ),
  },
  {
    icon: FacebookIcon,
    content: (
      <a
        href={clinicInfo.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:text-pink"
      >
        {clinicInfo.facebookName}
      </a>
    ),
  },
  {
    icon: Clock,
    content: (
      <span>
        {clinicInfo.hours}
        <span className="mt-1 block text-xs text-slate/80">Hours may vary on holidays.</span>
      </span>
    ),
  },
];

export default function ContactInfo() {
  return (
    <div className="reveal flex h-full flex-col gap-6 rounded-2xl border border-ink/5 bg-white p-6 shadow-card sm:p-8">
      <div>
        <h3 className="font-display text-xl font-bold text-ink">Visit or call us</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate">
          {"We're happy to answer questions before you book, too."}
        </p>
      </div>

      <ul className="flex flex-col gap-5">
        {items.map(({ icon: Icon, content }, i) => (
          <li key={i} className="flex gap-3.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-soft/60 text-pink">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="pt-1.5 text-sm leading-relaxed text-ink">{content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
