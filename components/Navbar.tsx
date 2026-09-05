"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  // Highlight the nav link for whichever section is currently in the
  // "reading band" of the viewport as the visitor scrolls.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-[#fffafb]/95 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <Logo aria-hidden className="h-14 w-14 shrink-0" />
          <span className="font-display text-2xl font-extrabold leading-tight tracking-tight text-ink">
            Beasties<span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-slate">Veterinary Clinic</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-pink ${
                activeHref === link.href ? "text-pink" : "text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="button-primary"
          >
            Book a visit
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-lg p-2 text-ink md:hidden"
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="animate-fade-in border-t border-ink/5 bg-white px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base font-semibold ${
                    activeHref === link.href ? "bg-pink-soft/60 text-pink" : "text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-pink px-5 py-3 text-center text-base font-bold text-white"
              >
                Book a visit
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}


