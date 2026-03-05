import { getSortedPostsData } from "@/lib/blog";
import React from "react";
import BlogClient from "@/components/blog/BlogClient";

export const metadata = {
  title: "Blog & Insights",
  description: "Read the latest thoughts on Data Science, Neural Interfaces, and Modern Web Development from ADEV Studio.",
};

export default function BlogListing() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-foreground/10 pb-12 mb-12">
        <div className="max-w-2xl">
          <p className="text-sm font-mono uppercase tracking-widest text-muted mb-6">Directory</p>
          <h1 className="text-5xl md:text-7xl font-display font-semibold mb-6 tracking-tight">
            Insights
          </h1>
          <p className="text-foreground/70 text-lg md:text-xl font-light">
            Thoughts, case studies, and engineering deep-dives from a modern data science and web design studio.
          </p>
        </div>
      </div>

      <BlogClient posts={posts} />
    </div>
  );
}
