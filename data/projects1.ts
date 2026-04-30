export type Project = {
  slug: string;
  name: string;
  location: string;
  image: string;
  description: string;
  gallery: string[];
  floors?: string;
  units?: string;
  amenitiesCount?: string;
};

export const projects: Project[] = [
  {
    slug: "tellapur",
    name: "Tellapur Project",
    location: "Tellapur, Hyderabad",
    image: "/images/projects/tellapur/tellapur-thumbnail.webp",
    description: "Premium plotted development in a fast-growing location.",
    floors: "B1+B2+G+10",
    units: "120 Flats",
    amenitiesCount: "15+ Amenities",
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
    description:
      "Well-connected residential project with strong investment potential.",
    floors: "B1+B2+G+10",
    units: "50 Flats",
    amenitiesCount: "15+ Amenities",
    gallery: [
      "/images/projects/nallagandla/nallagandla-thumbnail.webp",
      "/images/projects/nallagandla/nallagandla-anivagroup-amenity1.webp",
      "/images/projects/nallagandla/nallagandla-anivagroup-amenity2.webp",
      "/images/projects/nallagandla/nallagandla-anivagroup-amenity3.webp",
    ],
  },
];