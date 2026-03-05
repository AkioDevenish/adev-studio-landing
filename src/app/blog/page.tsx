import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blog & Insights",
  description: "Read the latest thoughts on Data Science, Neural Interfaces, and Modern Web Development from ADEV Studio.",
};

export default function BlogListing() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
          Insights
        </h1>
        <p className="text-muted text-lg md:text-xl mb-12">
          Thoughts on Data Science, Neural Interfaces, and the future of the Web.
        </p>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <time className="text-sm font-mono text-muted uppercase tracking-widest mb-2 block">
                  {post.date}
                </time>
                <h2 className="text-2xl md:text-3xl font-display font-semibold group-hover:text-foreground/70 transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-foreground/80 font-sans font-light leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-sm font-medium border-b border-foreground/20 group-hover:border-foreground transition-colors pb-0.5">
                  Read article &rarr;
                </span>
              </Link>
            </article>
          ))}
          {posts.length === 0 && (
            <p className="text-muted italic">Check back soon for new posts.</p>
          )}
        </div>
      </div>
    </div>
  );
}
