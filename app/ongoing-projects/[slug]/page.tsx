import { projects } from "@/data/projects";
import ProjectDetailClient from "./PageClient";
import { notFound } from "next/navigation";
import { generateSEO } from "@/config/seo";
import type { Metadata } from "next";

/* ✅ SEO + FIXED PARAMS */
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Aniva Group",
    };
  }

  return {
    ...generateSEO({
      title: `${project.name} in ${project.location}`,
      description: `${project.name} is a premium real estate project in ${project.location}, Hyderabad offering excellent investment potential and modern amenities.`,
      path: `/ongoing-projects/${project.slug}`,
    }),

    keywords: [
      `${project.name} ${project.location}`,
      "plots in Hyderabad",
      "HMDA plots",
      "real estate investment Hyderabad",
      "Aniva projects",
    ],

    openGraph: {
      title: `${project.name} | Aniva Group`,
      description: project.description,
      url: `/ongoing-projects/${project.slug}`,
      siteName: "Aniva Group",
      type: "website",
    },

    alternates: {
      canonical: `/ongoing-projects/${project.slug}`,
    },
  };
}

/* ✅ MAIN PAGE FIX */
export default async function ProjectPage({ params }: any) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}