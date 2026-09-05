"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Pause, Play, PawPrint } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Curated animal and veterinary stock images; replace with clinic photos as available.
const photos = [
  { src: "/images/golden-retriever.jpg", alt: "Golden retriever holding a flower outdoors", title: "A little sunshine. A lot of personality.", category: "HAPPY LITTLE BEASTIES" },
  { src: "/images/gallery-clinic.jpg", alt: "Veterinarian examining a German shepherd in a clinic", title: "Good health starts with gentle care.", category: "MOMENTS OF CARE" },
  { src: "/images/gallery-kitten.jpg", alt: "A fluffy ginger cat looking up from a wooden table", title: "Curiosity looks good on you.", category: "CURIOUS COMPANIONS" },
  { src: "/images/gallery-dog.jpg", alt: "French bulldog wearing a yellow sweater", title: "Small paws. Big personality.", category: "ONE OF A KIND" },
  { src: "/images/gallery-care.jpg", alt: "Veterinarian gently holding a Pomeranian", title: "A helping hand. A softer landing.", category: "A LITTLE EXTRA COMFORT" },
  { src: "/images/gallery-rabbit.jpg", alt: "A white rabbit sitting among green plants", title: "Love comes in every little size.", category: "LITTLE WONDERS" },
  { src: "/images/gallery-puppy.jpg", alt: "A happy beagle outdoors", title: "The happiest hello of your day.", category: "TAIL-WAGGING JOY" },
  { src: "/images/gallery-exam.jpg", alt: "Veterinarian and dog beside equipment in an examination room", title: "A little reassurance goes a long way.", category: "GENTLE CHECKUPS" },
  { src: "/images/cat.jpg", alt: "Black-and-white cat resting its paws on a wooden ledge", title: "For every purr. And every personality.", category: "PURRFECT COMPANY" },
];

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const section = useRef<HTMLElement>(null);
  const thumbnails = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const rotating = playing && inView && pageVisible;

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => { if (motion.matches) setPlaying(false); };
    const syncVisibility = () => setPageVisible(!document.hidden);
    syncMotion();
    syncVisibility();
    motion.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncVisibility);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    if (section.current) observer.observe(section.current);
    return () => { observer.disconnect(); motion.removeEventListener("change", syncMotion); document.removeEventListener("visibilitychange", syncVisibility); };
  }, []);

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setTimeout(() => setActive(index => (index + 1) % photos.length), 2000);
    return () => window.clearTimeout(timer);
  }, [active, rotating]);

  useEffect(() => {
    const rail = thumbnails.current;
    const thumb = rail?.children[active] as HTMLElement | undefined;
    if (rail && thumb) rail.scrollTo({ left: thumb.offsetLeft - rail.offsetLeft - (rail.clientWidth - thumb.clientWidth) / 2, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }, [active]);

  function goTo(index: number) { setActive((index + photos.length) % photos.length); }

  return (
    <section id="gallery" ref={section} className="gallery-section" aria-labelledby="gallery-heading" aria-roledescription="carousel">
      <div className="site-container">
        <div className="section-heading gallery-heading"><div><span className="eyebrow"><PawPrint size={14} aria-hidden="true" /> THE GALLERY</span><h2 id="gallery-heading">Little moments.<br /><span>So much to love.</span></h2></div><p>Furry faces, gentle care, and all the little things that make life with pets so special.</p></div>
        <div className="gallery-shell" onFocusCapture={event => { if (!(event.target as HTMLElement).closest('[data-playback]')) setPlaying(false); }}>
          <div id="gallery-stage" className="gallery-stage" tabIndex={0} aria-label="Gallery photos. Use arrow keys to navigate." onKeyDown={event => { if (event.target !== event.currentTarget) return; if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); goTo(active + (event.key === "ArrowRight" ? 1 : -1)); } }} onTouchStart={event => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }} onTouchEnd={event => { const start = touchStart.current; touchStart.current = null; if (!start) return; const dx = event.changedTouches[0].clientX - start.x; const dy = event.changedTouches[0].clientY - start.y; if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) { setPlaying(false); goTo(active + (dx < 0 ? 1 : -1)); } }}>
            {photos.map((photo, index) => <figure key={photo.src} className={`gallery-frame ${index === active ? "is-active" : ""}`} aria-hidden={index !== active} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${photos.length}`}>
              <Image src={photo.src} alt="" fill sizes="100px" className="gallery-backdrop" aria-hidden="true" />
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 767px) 90vw, 1000px" className="gallery-main-photo" />
              <div className="gallery-scrim" />
              <figcaption><span>{photo.category}</span><h3>{photo.title}</h3></figcaption>
            </figure>)}
            <div className="gallery-photo-count" aria-live={rotating ? "off" : "polite"}>{String(active + 1).padStart(2, "0")} <span>/ {String(photos.length).padStart(2, "0")}</span></div>
            <button type="button" className="gallery-nav gallery-prev" aria-label="Previous gallery image" aria-controls="gallery-stage" onClick={() => goTo(active - 1)}><ArrowLeft size={22} aria-hidden="true" /></button>
            <button type="button" className="gallery-nav gallery-next" aria-label="Next gallery image" aria-controls="gallery-stage" onClick={() => goTo(active + 1)}><ArrowRight size={22} aria-hidden="true" /></button>
            <button type="button" data-playback className="gallery-playback" aria-label={playing ? "Pause slideshow" : "Play slideshow"} onClick={() => setPlaying(value => !value)}>{playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}<span>{playing ? "Pause" : "Play"}</span></button>
            <div className="gallery-timer" aria-hidden="true"><span key={`${active}-${rotating}`} className={rotating ? "is-running" : ""} /></div>
          </div>
          <div className="gallery-filmstrip" ref={thumbnails} aria-label="Choose a photo">{photos.map((photo, index) => <button key={photo.src} className="gallery-thumbnail" type="button" aria-label={`Show gallery image ${index + 1}: ${photo.alt}`} aria-current={active === index ? "true" : undefined} onClick={() => goTo(index)}><Image src={photo.src} alt="" fill sizes="110px" /><span>{String(index + 1).padStart(2, "0")}</span></button>)}</div>
        </div>
      </div>
    </section>
  );
}
