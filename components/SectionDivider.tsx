function PawPrint({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <ellipse cx="12" cy="16" rx="5" ry="4.2" />
      <ellipse cx="5.5" cy="9" rx="2.1" ry="2.6" />
      <ellipse cx="10.5" cy="6" rx="2.1" ry="2.6" />
      <ellipse cx="15.5" cy="6.3" rx="2.1" ry="2.6" />
      <ellipse cx="19" cy="9.5" rx="2" ry="2.5" />
    </svg>
  );
}

/**
 * A hand-drawn "paw trail" seam between sections — the site's one
 * recurring signature motif, echoing the logo's line-art quality and
 * the pets it belongs to. Purely decorative.
 */
export default function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-12 w-full overflow-hidden sm:h-14 ${flip ? "scale-x-[-1]" : ""}`}
    >
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="h-full w-full text-ink/10">
        <path
          d="M0,35 C150,10 300,55 450,32 C600,10 750,55 900,32 C1000,15 1100,45 1200,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="1 10"
          strokeLinecap="round"
        />
      </svg>
      <PawPrint className="absolute left-[18%] top-3 h-4 w-4 -rotate-12 text-ink/15" />
      <PawPrint className="absolute left-[49%] top-6 h-4 w-4 rotate-6 text-ink/15" />
      <PawPrint className="absolute left-[79%] top-2 h-4 w-4 -rotate-6 text-ink/15" />
    </div>
  );
}
