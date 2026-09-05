import Image from "next/image";
import type { ComponentProps } from "react";
export default function Logo({ className, ...props }: Omit<ComponentProps<typeof Image>, "src" | "alt" | "width" | "height">) {
  const decorative = props["aria-hidden"] === true || props["aria-hidden"] === "true";
  return <Image src="/images/beasties-logo.jpg" alt={decorative ? "" : "Beasties Veterinary Clinic logo"} width={96} height={96} className={`rounded-full object-contain ${className ?? ""}`} {...props} />;
}
