import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return <><Navbar /><main><Hero /><About /><Gallery /><Services />
    <section id="contact" className="contact-section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-pink">A HEALTHIER, HAPPIER BEASTIE</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">Their next healthy chapter.</h2>
          <p className="mt-3 text-base leading-relaxed text-slate">{"Tell us about your beastie and we'll call to confirm a time that works."}</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-5"><div className="lg:col-span-3"><ContactForm /></div><div className="lg:col-span-2"><ContactInfo /></div></div>
      </div>
    </section>
  </main><Footer /></>;
}
