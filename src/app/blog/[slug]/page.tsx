import { getPostData, getSortedPostsData } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// Generate static params for all known blog posts
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamically generate metadata based on the post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const postData = getPostData(slug);
    return {
      title: postData.title,
      description: postData.excerpt,
    };
  } catch (e) {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let postData;
  try {
    postData = getPostData(slug);
  } catch (e) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-muted hover:text-foreground transition-colors w-max"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Directory
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <time className="text-sm font-mono text-muted uppercase tracking-widest block">
              {postData.date}
            </time>
            {postData.category && (
              <>
                <span className="text-muted/30">•</span>
                <span className="bg-surface px-3 py-1 text-xs font-mono uppercase tracking-widest text-foreground">
                  {postData.category}
                </span>
              </>
            )}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-8 tracking-tight">
            {postData.title}
          </h1>
          <p className="text-xl md:text-2xl font-light text-foreground/70 leading-relaxed max-w-3xl">
            {postData.excerpt}
          </p>
        </header>
      </div>

      {/* Cover Image container - Full width bleed */}
      {postData.coverImage && (
        <div className="relative w-full max-w-[1400px] mx-auto h-[40vh] md:h-[60vh] mb-16 md:mb-24 px-6 md:px-12">
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <Image 
              src={postData.coverImage}
              alt={postData.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 md:px-12">
        {/* Tags */}
        {postData.tags && postData.tags.length > 0 && (
           <div className="flex flex-wrap gap-2 mb-12 py-6 border-y border-foreground/10">
              <span className="text-sm font-mono text-muted uppercase tracking-widest mr-4 self-center">Tags:</span>
              {postData.tags.map(tag => (
                <span key={tag} className="text-xs font-mono px-3 py-1 border border-foreground/20 text-foreground/80 rounded-full">
                  {tag}
                </span>
              ))}
           </div>
        )}

        {/* Post Content rendered as Prose */}
        <div className="prose prose-lg md:prose-xl prose-stone max-w-none text-foreground/90
          prose-headings:font-display prose-headings:font-semibold prose-headings:text-foreground prose-headings:tracking-tight
          prose-a:text-foreground prose-a:underline-offset-4 hover:prose-a:text-foreground/70
          prose-code:text-foreground prose-code:bg-surface prose-code:px-1 prose-code:rounded
          prose-pre:bg-[#1a1a1a] prose-pre:text-[#e5e5e5]
          prose-strong:text-foreground
          prose-blockquote:text-muted prose-blockquote:border-l-foreground/30 prose-blockquote:font-light
        ">
          <MDXRemote source={postData.content} />
        </div>
      </div>
    </article>
  );
}
