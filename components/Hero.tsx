import Image from "next/image";
import { ArrowDown, ArrowUpRight, Heart, HeartHandshake, Home, Stethoscope } from "lucide-react";
export default function Hero() {
  return <section id="home" className="hero-section">
    <div className="site-container hero-grid">
      <div className="hero-copy animate-fade-up">
        <span className="eyebrow"><span className="status-dot" /> YOUR NEIGHBORHOOD VET, SINCE 2023</span>
        <h1>Little paws.<br />Big personalities.<br /><span>Extraordinary care.</span></h1>
        <p>For the tail-waggers, the nap-takers, and the ones who make your house a home. A little more love in every vet visit.</p>
        <div className="hero-actions"><a href="#contact" className="button-primary">Book an appointment <ArrowUpRight size={18} aria-hidden="true" /></a><a href="#services" className="button-text">Explore our services <ArrowDown size={16} aria-hidden="true" /></a></div>
        <div className="hero-note"><span className="little-heart"><Heart size={18} aria-hidden="true" /></span><span>Good care. Kind people.<br /><strong>A happier, healthier beastie.</strong></span></div>
      </div>
      <div className="hero-visual animate-fade-in">
        <div className="hero-photo brand-photo"><Image src="/images/beasties-logo.jpg" alt="Beasties Veterinary Clinic official cat and dog logo" fill priority sizes="(max-width: 767px) 90vw, 48vw" className="object-cover" /></div>
        <div className="pet-note"><span className="pet-note-icon"><Stethoscope size={23} aria-hidden="true" /></span><div><strong>Healthy pets. Happy hearts.</strong><span>Gentle care for every chapter.</span></div></div>
      </div>
    </div>
    <div className="site-container"><div className="trust-strip">{[{icon: HeartHandshake, title: "Gentle, compassionate care", detail: "Comfort comes first. Always."}, {icon: Stethoscope, title: "An experienced, caring team", detail: "Here for the little things. And the big ones."}, {icon: Home, title: "Care that comes to you", detail: "Home service visits available."}].map(({icon: Icon, title, detail}) => <div className="trust-item" key={title}><Icon size={25} strokeWidth={1.5} aria-hidden="true" /><div><strong>{title}</strong><span>{detail}</span></div></div>)}</div></div>
  </section>;
}

