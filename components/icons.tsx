/**
 * lucide-react dropped brand/logo glyphs, so the Facebook mark used in
 * the contact card and footer is a small local icon instead — sized and
 * used the same way as any lucide icon (className, aria-hidden, etc.).
 */
export function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33v7.03C18.34 21.21 22 17.06 22 12.06Z" />
    </svg>
  );
}
