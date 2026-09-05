# Beasties Veterinary Clinic — Website

A marketing site for Beasties Veterinary Clinic (Poblacion 4, Lactason St., est. 2023), built with Next.js App Router, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # lint the project
```

## Editing content

Everything a non-developer would want to change lives in one file:

- **[lib/data.ts](lib/data.ts)** — services (title, description, icon), nav links, and clinic info (address, phone, Facebook, hours).

Three things in there are marked as placeholders to revisit:

1. **Facebook link** — `clinicInfo.facebookUrl` points to the official page: https://www.facebook.com/beastiesvetclinic/.
2. **Hours** — `clinicInfo.hours` is a placeholder (`Mon–Sat, 9:00 AM – 6:00 PM`). Update with the clinic's real hours.
3. **Logo** — see below.

## About the logo

The brief describes a hand-drawn cat + dog illustration with a pink heart, framed in a circle with gray stripes, and expected a raster file at `/public/logo.png`. That image was shared as a picture in chat rather than a file on disk, so its exact pixels weren't available to place in the project.

Instead, **[components/Logo.tsx](components/Logo.tsx)** is an original SVG built to the same description — circular badge, gray stripe bands, a simplified line-art cat and dog, pink heart accent — used across the navbar, hero, and footer. It's a reasonable stand-in and scales perfectly at any size, but it is not a pixel copy of the real artwork.

To swap in the real logo once you have the file:

1. Drop the real file at `public/logo.png` (or `.svg`).
2. In `components/Logo.tsx`, replace the returned `<svg>` with an `<img src="/logo.png" alt="Beasties Veterinary Clinic logo" className={className} />` (or use `next/image`), keeping the same `Logo` export so every usage site keeps working unchanged.

## Contact form

The appointment form on the page posts to **[app/api/contact/route.ts](app/api/contact/route.ts)**, a Next.js Route Handler that validates the submission and returns a success/error response. No database or email is wired up — look for the `// TODO` comment in that file for where to add a real integration (e.g. [Resend](https://resend.com), Nodemailer, or a form backend like Formspree).

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS (brand tokens — `ink`, `slate`, `mist`, `pink`, `pink-soft` — defined in [tailwind.config.ts](tailwind.config.ts))
- [lucide-react](https://lucide.dev) for icons
- `next/font` (Baloo 2 for headings, Nunito for body)

No database, auth, CMS, or payments — content is all local to the repo.

