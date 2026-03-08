import { getSortedPostsData } from "@/lib/blog";
import React from "react";
import BlogClient from "@/components/blog/BlogClient";

export const metadata = {
  title: "Blog",
  description: "Read the latest thoughts on Data Science, Neural Interfaces, and Modern Web Development from ADEV Studio.",
};

export default function BlogListing() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-display font-semibold mb-6 tracking-tight text-foreground">
            Blog
          </h1>
          <p className="text-foreground/60 text-lg md:text-xl font-light leading-relaxed">
            Exploring the intersection of data science, neural interfaces, and the future of web design. 
            Articles, thoughts, and technical case studies from the team at ADEV Studio.
          </p>
        </div>
      </div>

      <div className="border-t border-foreground/10 pt-12">
        <BlogClient posts={posts} />
      </div>
    </div>
  );
}
