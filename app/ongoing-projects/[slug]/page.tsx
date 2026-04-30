import { projects } from "@/data/projects";
import ProjectDetailClient from "./PageClient";
import { notFound } from "next/navigation";
import { generateSEO } from "@/config/seo";
import type { Metadata } from "next";

/* ✅ Next 16 (async params) */
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* ✅ SEO (safe: metadata only) */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Aniva Group",
      description: "The requested project could not be found.",
    };
  }

  const title = `${project.name} in ${project.location} | Aniva Group`;
  const description = `${project.name} in ${project.location}, Hyderabad offers premium plots with modern amenities, excellent connectivity, and strong investment potential.`;

  return {
    ...generateSEO({
      title,
      description,
      path: `/ongoing-projects/${project.slug}`,
    }),

    keywords: [
      `${project.name} ${project.location}`,
      "plots in Hyderabad",
      "HMDA plots Hyderabad",
      "real estate investment Hyderabad",
      "Aniva Group projects",
    ],

    openGraph: {
      title,
      description,
      url: `/ongoing-projects/${project.slug}`,
      siteName: "Aniva Group",
      type: "website",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.name} in ${project.location}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image],
    },

    alternates: {
      canonical: `/ongoing-projects/${project.slug}`,
    },
  };
}

/* ✅ PAGE (no UI changes) */
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}