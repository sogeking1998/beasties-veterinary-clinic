import Image from "next/image";
import { ArrowUpRight, Check, PawPrint } from "lucide-react";
export default function About() {
  return <section id="about" className="about-section"><div className="site-container about-grid">
    <div className="about-photo"><Image src="/images/cat.jpg" alt="A relaxed black-and-white cat resting its paws on a wooden ledge" fill sizes="(max-width: 767px) 90vw, 42vw" className="object-cover" /><div className="about-photo-caption"><PawPrint size={22} aria-hidden="true" /><span>For every purr.<br /><strong>And every personality.</strong></span></div></div>
    <div className="about-copy"><span className="eyebrow">A LITTLE ABOUT BEASTIES</span><h2>Your pet is family.<br /><span>We see them that way, too.</span></h2><p>Since opening our doors in 2023, we have had one simple goal: give every beastie the kind of care we would want for our own pets.</p><p>Here in Poblacion 4, we take time to get to know you, listen to your worries, and make every visit feel a little easier. From the first puppy checkup to the golden years, we are right here with you.</p><ul className="about-checks">{["Gentle visits, with time for your questions", "A clear care plan you can feel good about", "Everyday wellness and more, under one roof"].map(item => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul><a href="#contact" className="button-text">Come say hello <ArrowUpRight size={18} aria-hidden="true" /></a></div>
  </div></section>;
}

