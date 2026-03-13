import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted mb-8">
        404 — Page Not Found
      </p>
      <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-foreground mb-6">
        Lost in
        <br />
        <span className="italic text-foreground/40">space</span>.
      </h1>
      <p className="text-lg text-foreground/60 font-light max-w-md mb-12 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-all duration-300"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to Home
      </Link>
    </div>
  );
}
