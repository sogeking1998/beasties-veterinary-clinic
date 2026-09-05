import { MapPin, Phone } from "lucide-react";
import { FacebookIcon } from "./icons";
import Logo from "./Logo";
import { clinicInfo, navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Logo aria-hidden className="h-12 w-12 shrink-0" />
              <div>
                <p className="font-display text-lg font-bold text-white">Beasties Veterinary Clinic</p>
                <p className="text-xs uppercase tracking-widest text-white/50">Est. 2023</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Gentle, thorough care for every beastie in Poblacion 4 and beyond.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">Menu</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-pink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">Find us</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex gap-2.5 text-sm text-white/70">
                <MapPin className="h-4 w-4 shrink-0 text-pink" aria-hidden="true" />
                {clinicInfo.address}
              </li>
              <li className="flex gap-2.5 text-sm text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-pink" aria-hidden="true" />
                <a href={clinicInfo.phoneHref} className="hover:text-pink">
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex gap-2.5 text-sm text-white/70">
                <FacebookIcon className="h-4 w-4 shrink-0 text-pink" aria-hidden="true" />
                <a
                  href={clinicInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink"
                >
                  {clinicInfo.facebookName}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-xs text-white/50 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {year} Beasties Veterinary Clinic. All rights reserved.
          </p>
          <p>Made with care for every beastie.</p>
        </div>
      </div>
    </footer>
  );
}
