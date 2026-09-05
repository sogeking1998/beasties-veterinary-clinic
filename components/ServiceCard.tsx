import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service, category }: { service: Service; category: string }) {
  const Icon = service.icon;
  const featured = service.id === "consultation";
  return <a href="#contact" className={`service-card service-card-enhanced ${featured ? "service-featured" : ""}`} aria-label={`Request an appointment for ${service.title.toLowerCase()}`}>
    <div className="service-card-top"><span className="service-icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span><span className="service-category">{featured ? "START HERE" : category}</span></div>
    <h3>{service.title}</h3><p>{service.description}</p>
    <div className="service-card-bottom"><span>{featured ? "Let’s meet your beastie" : "Request a visit"}</span><span className="service-link-arrow"><ArrowUpRight size={19} aria-hidden="true" /></span></div>
  </a>;
}

