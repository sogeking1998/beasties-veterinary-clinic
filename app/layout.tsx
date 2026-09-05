import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

// Manrope headings and DM Sans body text keep the warm design crisp and readable.
const displayFont = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const description =
  "Beasties Veterinary Clinic is a neighborhood vet clinic in Poblacion 4, Lactason St. (across Silogan), caring for pets since 2023. Vaccination, consultation, surgery, laboratory, pet boarding, and home service for dogs and cats.";

export const metadata: Metadata = {
  // Placeholder domain â€” swap in the clinic's real domain once it has one.
  metadataBase: new URL("https://beasties-veterinary-clinic.example.com"),
  title: "Beasties Veterinary Clinic",
  description,
  openGraph: {
    title: "Beasties Veterinary Clinic",
    description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#a93670",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}


