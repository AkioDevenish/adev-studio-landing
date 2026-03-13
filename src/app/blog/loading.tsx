export default function BlogLoading() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Header skeleton */}
      <div className="mb-16">
        <div className="h-12 w-48 bg-foreground/5 rounded-lg mb-6 animate-pulse" />
        <div className="h-6 w-96 max-w-full bg-foreground/5 rounded-lg animate-pulse" />
      </div>

      <div className="border-t border-foreground/10 pt-12" />

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-[3/2] bg-foreground/[0.04] rounded-xl animate-pulse" />
            <div className="h-3 w-24 bg-foreground/5 rounded animate-pulse" />
            <div className="h-5 w-3/4 bg-foreground/5 rounded animate-pulse" />
            <div className="h-4 w-full bg-foreground/[0.03] rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
