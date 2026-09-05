import type { LucideIcon } from "lucide-react";
import {
  Syringe,
  Bug,
  Stethoscope,
  BedDouble,
  Microscope,
  ClipboardPlus,
  Scissors,
  Home,
  Pill,
  ShoppingBag,
} from "lucide-react";

/**
 * All editable site content lives in this file so it can be updated
 * without touching component code.
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "vaccination",
    title: "Vaccination",
    description:
      "Core and lifestyle vaccines to protect your dog or cat at every life stage, on a schedule we'll walk you through together.",
    icon: Syringe,
  },
  {
    id: "deworming",
    title: "Deworming",
    description:
      "Routine parasite control to keep tummies happy, safe for puppies, kittens, and adult pets alike.",
    icon: Bug,
  },
  {
    id: "consultation",
    title: "Consultation",
    description:
      "A thorough nose-to-tail check-up with a vet who listens and takes time to answer every question you bring.",
    icon: Stethoscope,
  },
  {
    id: "pet-boarding",
    title: "Pet boarding",
    description:
      "A safe, supervised place to stay when you're away, with clean kennels, regular feeding, and lots of gentle attention.",
    icon: BedDouble,
  },
  {
    id: "laboratory",
    title: "Laboratory",
    description:
      "On-site blood work, fecal exams, and other diagnostics so we can catch issues early and treat with confidence.",
    icon: Microscope,
  },
  {
    id: "confinement",
    title: "Confinement",
    description:
      "Closer monitoring and supportive in-clinic care for pets who need to stay a little longer to recover safely.",
    icon: ClipboardPlus,
  },
  {
    id: "surgery",
    title: "Surgery",
    description:
      "Spay/neuter and other common procedures performed with careful anesthesia protocols and attentive recovery care.",
    icon: Scissors,
  },
  {
    id: "home-service",
    title: "Home service",
    description:
      "Can't make it in? Select vaccinations, check-ups, and treatments can come to your doorstep.",
    icon: Home,
  },
  {
    id: "pet-pharmacy",
    title: "Pet pharmacy",
    description:
      "Prescription medications and vet-recommended treatments, dispensed with clear instructions for home care.",
    icon: Pill,
  },
  {
    id: "pet-essentials",
    title: "Pet essentials",
    description:
      "Food, grooming supplies, and everyday must-haves for your beastie, all in one visit.",
    icon: ShoppingBag,
  },
];

export const petTypes = ["Dog", "Cat", "Other"] as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const clinicInfo = {
  name: "Beasties Veterinary Clinic",
  establishedYear: 2023,
  address: "Poblacion 4, Lactason St. (across Silogan)",
  phone: "0916 280 6928",
  phoneHref: "tel:+639162806928",
  facebookName: "beasties veterinary clinic",
  facebookUrl: "https://www.facebook.com/beastiesvetclinic/",
  // EDITABLE PLACEHOLDER — update with the clinic's real hours.
  hours: "Mon–Sat, 9:00 AM – 6:00 PM",
};


