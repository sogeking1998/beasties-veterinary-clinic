import { ArrowUpRight, HeartHandshake, Home, PawPrint, Phone } from "lucide-react";
import { services } from "@/lib/data";
import ServiceCard from "./ServiceCard";

const groups = [
  { label: "Wellness & prevention", ids: ["consultation", "vaccination", "deworming"] },
  { label: "Treatment & recovery", ids: ["laboratory", "surgery", "confinement", "pet-pharmacy"] },
  { label: "Everyday support", ids: ["pet-boarding", "home-service", "pet-essentials"] },
];
const orderedServices = [...services].sort((a, b) => Number(b.id === "consultation") - Number(a.id === "consultation"));

export default function Services() {
  return <section id="services" className="services-section"><div className="site-container">
    <div className="section-heading"><div><span className="eyebrow"><PawPrint size={14} aria-hidden="true" /> CARE FOR EVERY CHAPTER</span><h2>Big love.<br /><span>Thoughtful care.</span></h2></div><p>From their very first checkup to a little extra support. Find the right care for the one who means the world to you.</p></div>
    <div id="service-results" className="services-grid services-grid-enhanced">
      {orderedServices.map(service => <ServiceCard key={service.id} service={service} category={groups.find(item => item.ids.includes(service.id))!.label} />)}
      <a href="#contact" className="service-guide"><div className="service-guide-copy"><span className="service-guide-icon"><HeartHandshake size={29} strokeWidth={1.5} aria-hidden="true" /></span><h3>A little unsure?<br />We’re here to help.</h3><p>Tell us what’s going on with your beastie. We’ll help you find the right next step.</p><span className="button-text"><Phone size={16} aria-hidden="true" /> Let’s talk <ArrowUpRight size={18} aria-hidden="true" /></span></div><PawPrint className="service-guide-paw" strokeWidth={1} aria-hidden="true" /></a>
    </div>
    <div className="home-service-banner service-home-callout"><span className="banner-icon"><Home size={25} aria-hidden="true" /></span><div><span className="eyebrow">SAME CARE. FAMILIAR SURROUNDINGS.</span><h3>Some visits feel better at home.</h3><p>Ask about home visits for select checkups, vaccinations, and treatments.</p></div><a href="#contact" className="button-primary">Ask about home care <ArrowUpRight size={18} aria-hidden="true" /></a></div>
  </div></section>;
}


