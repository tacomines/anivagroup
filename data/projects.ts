export type Project = {
  slug: string;
  name: string;
  location: string;
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "tellapur",
    name: "Tellapur Project",
    location: "Tellapur, Hyderabad",
    image: "/images/projects/tellapur/tellapur-thumbnail.webp",
    description: "Premium plotted development in a fast-growing location.",
  },
  {
    slug: "nallagandla",
    name: "Nallagandla Project",
    location: "Nallagandla, Hyderabad",
    image: "/images/projects/nallagandla/nallagandla-thumbnail.webp",
    description: "Well-connected residential project with strong investment potential.",
  },
];