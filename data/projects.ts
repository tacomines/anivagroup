export type Project = {
  slug: string;
  name: string;
  location: string;
  image: string;
  description: string;
  gallery: string[]; // ✅ added
};

export const projects: Project[] = [
  {
    slug: "tellapur",
    name: "Tellapur Project",
    location: "Tellapur, Hyderabad",
    image: "/images/projects/tellapur/tellapur-thumbnail.webp",
    description: "Premium plotted development in a fast-growing location.",
    gallery: [
      "/images/projects/tellapur/tellapur-thumbnail.webp",
      "/images/projects/tellapur/tellapur-anivagroup-amenity1.webp",
      "/images/projects/tellapur/tellapur-anivagroup-amenity2.webp",
      "/images/projects/tellapur/tellapur-anivagroup-amenity3.webp",
      "/images/projects/tellapur/tellapur-anivagroup-droneview.webp",
    ],
  },
  {
    slug: "nallagandla",
    name: "Nallagandla Project",
    location: "Nallagandla, Hyderabad",
    image: "/images/projects/nallagandla/nallagandla-thumbnail.webp",
    description: "Well-connected residential project with strong investment potential.",
    gallery: [
      "/images/projects/nallagandla/nallagandla-thumbnail.webp",
      "/images/projects/nallagandla/nallagandla-anivagroup-amenity1.webp",
      "/images/projects/nallagandla/nallagandla-anivagroup-amenity2.webp",
      "/images/projects/nallagandla/nallagandla-anivagroup-amenity3.webp",
    ],
  },
];