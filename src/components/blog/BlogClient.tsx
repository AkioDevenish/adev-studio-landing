"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

export default function BlogClient({ posts }: { posts: Omit<BlogPost, "content">[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category || "Uncategorized")))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory || (!post.category && selectedCategory === "Uncategorized");
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Featured post is the first post
  const featuredPost = currentPage === 1 && selectedCategory === "All" && !searchQuery ? currentPosts[0] : null;
  const gridPosts = featuredPost ? currentPosts.slice(1) : currentPosts;

  return (
    <>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div className="relative group w-full sm:w-72">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-foreground/30 group-focus-within:text-foreground transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-full py-2.5 pl-11 pr-4 text-sm text-foreground focus:border-foreground/30 focus:bg-foreground/[0.05] focus:outline-none transition-all placeholder:text-foreground/30"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.15em] transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-foreground text-background shadow-lg shadow-foreground/10"
                  : "text-foreground/50 hover:text-foreground hover:bg-foreground/[0.05]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post (Hero Card) */}
      {featuredPost && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl bg-[#1a1a1a]">
              {featuredPost.coverImage ? (
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03] opacity-70 group-hover:opacity-50"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-foreground/5" />
              )}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content on top of the image */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  {featuredPost.category && (
                    <span className="bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-white/80 rounded-full">
                      {featuredPost.category}
                    </span>
                  )}
                  <span className="text-white/40 text-xs font-mono">
                    {featuredPost.date}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-4 max-w-3xl tracking-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-white/60 text-base md:text-lg font-light max-w-2xl leading-relaxed mb-6 hidden sm:block">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors text-sm font-medium">
                  Read Article
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        <AnimatePresence mode="popLayout">
          {gridPosts.map((post, index) => (
            <motion.article
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              key={post.slug}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                {/* Image */}
                <div className="relative w-full aspect-[3/2] mb-5 overflow-hidden rounded-xl bg-foreground/[0.03]">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-foreground/20 font-display text-2xl tracking-widest">
                      A
                    </div>
                  )}
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  {post.category && (
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/40">
                      {post.category}
                    </span>
                  )}
                  {post.category && <span className="w-px h-3 bg-foreground/15" />}
                  <time className="text-[10px] font-mono text-foreground/40 uppercase tracking-[0.15em]">
                    {post.date}
                  </time>
                </div>

                {/* Title */}
                <h2 className="text-xl font-display font-semibold leading-snug mb-3 group-hover:text-foreground/70 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-foreground/50 text-sm font-light leading-relaxed flex-grow line-clamp-2 mb-5">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center gap-1.5 text-xs font-medium text-foreground/40 group-hover:text-foreground transition-colors">
                  Read
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="py-32 text-center">
          <p className="text-2xl font-display text-foreground/30 mb-2">No results</p>
          <p className="text-foreground/40 text-sm mb-8">Try adjusting your search or filters.</p>
          <button 
            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
            className="px-6 py-2.5 rounded-full border border-foreground/15 hover:border-foreground/40 transition-colors text-xs font-mono uppercase tracking-[0.15em] text-foreground/60 hover:text-foreground"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-20 flex justify-center items-center gap-2 pt-10 border-t border-foreground/10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2.5 rounded-full disabled:opacity-20 hover:bg-foreground/5 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          
          <div className="flex gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-9 h-9 rounded-full text-xs font-mono flex items-center justify-center transition-all duration-300 ${
                  currentPage === i + 1
                    ? "bg-foreground text-background shadow-lg shadow-foreground/10"
                    : "text-foreground/40 hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-full disabled:opacity-20 hover:bg-foreground/5 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </>
  );
}
