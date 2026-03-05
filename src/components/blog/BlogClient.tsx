"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

export default function BlogClient({ posts }: { posts: Omit<BlogPost, "content">[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category || "Uncategorized")))];

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory || (!post.category && selectedCategory === "Uncategorized");
    
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Header and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="w-full md:w-auto">
          <div className="relative group max-w-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted group-focus-within:text-foreground transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-transparent border-b border-foreground/20 py-2 pl-10 pr-4 text-foreground/80 focus:border-foreground focus:outline-none transition-colors placeholder:text-muted"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-colors ${
                selectedCategory === category
                  ? "bg-foreground text-background"
                  : "bg-surface hover:bg-foreground/10 text-foreground/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        <AnimatePresence mode="popLayout">
          {currentPosts.map((post, index) => (
            <motion.article
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={post.slug}
              className="group flex flex-col h-full cursor-pointer"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full flex-grow">
                {/* Cover Image Container */}
                <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-surface rounded-sm">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted font-mono text-sm uppercase tracking-widest">
                      AdeV Studio
                    </div>
                  )}
                  {post.category && (
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-foreground">
                      {post.category}
                    </div>
                  )}
                </div>

                {/* Content */}
                <time className="text-xs font-mono text-muted uppercase tracking-widest mb-3 block">
                  {post.date}
                </time>
                <h2 className="text-2xl font-display font-semibold transition-colors mb-4 group-hover:opacity-70 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-foreground/70 font-sans font-light leading-relaxed flex-grow line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
                <span className="inline-block text-sm font-medium border-b border-foreground/20 group-hover:border-foreground transition-all w-max pb-0.5 mt-auto">
                  Read article &rarr;
                </span>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-xl font-display text-muted">No articles found matching your criteria.</p>
          <button 
            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
            className="mt-6 px-6 py-2 border border-foreground/20 hover:border-foreground transition-colors font-mono text-xs uppercase tracking-widest"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-20 flex justify-center items-center gap-4 border-t border-foreground/10 pt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 disabled:opacity-30 hover:bg-surface rounded-full transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-8 h-8 rounded-full text-sm flex items-center justify-center transition-colors ${
                  currentPage === i + 1 ? "bg-foreground text-background" : "hover:bg-surface"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 disabled:opacity-30 hover:bg-surface rounded-full transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </>
  );
}
