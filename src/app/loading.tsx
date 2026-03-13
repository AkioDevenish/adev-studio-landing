export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-foreground/10" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-foreground/60 animate-spin" />
        </div>
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/30">
          Loading
        </p>
      </div>
    </div>
  );
}
