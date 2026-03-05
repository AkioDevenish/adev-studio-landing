import { getPostData, getSortedPostsData } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    <article className="min-h-screen pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="text-muted hover:text-foreground transition-colors inline-block"
          >
            &larr; Back to all posts
          </Link>
        </div>

        {/* Post Header */}
        <header className="mb-16">
          <time className="text-sm font-mono text-muted uppercase tracking-widest block mb-4">
            {postData.date}
          </time>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            {postData.title}
          </h1>
          <p className="text-xl md:text-2xl font-light text-foreground/80 leading-relaxed max-w-2xl">
            {postData.excerpt}
          </p>
        </header>

        {/* Post Content rendered as Prose (Tailwind Typography) */}
        <div className="prose prose-lg md:prose-xl prose-stone max-w-none text-foreground/90
          prose-headings:font-display prose-headings:font-semibold prose-headings:text-foreground
          prose-a:text-foreground prose-a:underline-offset-4 hover:prose-a:text-foreground/70
          prose-code:text-foreground prose-code:bg-surface prose-code:px-1 prose-code:rounded
          prose-pre:bg-[#1a1a1a] prose-pre:text-[#e5e5e5]
          prose-strong:text-foreground
        ">
          <MDXRemote source={postData.content} />
        </div>
      </div>
    </article>
  );
}
