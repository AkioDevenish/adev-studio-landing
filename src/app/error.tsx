"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted mb-8">
        Something went wrong
      </p>
      <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-foreground mb-6">
        Unexpected
        <br />
        <span className="italic text-foreground/40">error</span>.
      </h1>
      <p className="text-lg text-foreground/60 font-light max-w-md mb-12 leading-relaxed">
        We hit a snag. Please try again or head back to the homepage.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-8 py-4 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-all duration-300"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-8 py-4 border border-foreground/20 text-foreground text-sm font-medium rounded-full hover:border-foreground/60 transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
