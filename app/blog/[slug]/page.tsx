import { blogs } from "@/data/blogs";
import { generateSEO } from "@/config/seo";
import { notFound } from "next/navigation";
import BlogDetailClient from "./PageClient";
import type { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Aniva Group",
    };
  }

  return {
    ...generateSEO({
      title: blog.title,
      description: blog.description,
      path: `/blog/${blog.slug}`,
    }),

    keywords: [
      blog.title,
      "real estate blog Hyderabad",
      "property investment tips",
      "real estate insights",
      "Aniva Group blog",
    ],

    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `/blog/${blog.slug}`,
      siteName: "Aniva Group",
      type: "article",
    },

    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
  };
}

export default async function BlogPage({ params }: any) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return <BlogDetailClient blog={blog} />;
}