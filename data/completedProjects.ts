/* ✅ TYPE (IMPORTANT FOR NO ERRORS) */
export type CompletedProject = {
  id: number;
  name: string;
  location: string;
  units: string;
  area?: string; // optional (prevents TS errors)
  images: string[];
};

/* ✅ DATA */
export const completedProjects: CompletedProject[] = [
  {
    id: 1,
    name: "AM Crystal",
    location: "Hyderabad",
    units: "4 Units",
    area: "150 - 200 Sq.Yds",
    images: ["/images/gallery/amcrystal.webp"],
  },
  {
    id: 2,
    name: "BJR Mansion",
    location: "Hyderabad",
    units: "Residential",
     area: "150 - 200 Sq.Yds",
    images: ["/images/gallery/bjrmansion.webp"],
  },
  {
    id: 3,
    name: "Classic Heights",
    location: "Hyderabad",
    units: "Apartments",
     area: "150 - 200 Sq.Yds",
    images: ["/images/gallery/classicheights.webp"],
  },
  {
    id: 4,
    name: "Crystal Homes",
    location: "Hyderabad",
    units: "Residential",
     area: "150 - 200 Sq.Yds",
    images: ["/images/gallery/crystalhomes.webp"],
  },
  {
    id: 5,
    name: "Elite Enclave",
    location: "Hyderabad",
    units: "Apartments",
     area: "150 - 200 Sq.Yds",
    images: ["/images/gallery/eliteenclave.webp"],
  },
  {
    id: 6,
    name: "Global Villas",
    location: "Bangalore",
    units: "27 Units",
    area: "2000 - 3000 Sq.Ft",
    images: ["/images/gallery/globalvillas.webp"],
  },
  {
    id: 7,
    name: "Green Homes",
    location: "Hyderabad",
    units: "Residential",
     area: "150 - 200 Sq.Yds",
    images: ["/images/gallery/greenhomes.webp"],
  },
  {
    id: 8,
    name: "Happy Homes",
    location: "Hyderabad",
    units: "Residential",
     area: "150 - 200 Sq.Yds",
    images: ["/images/gallery/happyhomes.webp"],
  },
  {
    id: 9,
    name: "KS Residency",
    location: "Hyderabad",
    units: "Apartments",
     area: "150 - 200 Sq.Yds",
    images: ["/images/gallery/ksresidency.webp"],
  },
  {
    id: 10,
    name: "Maples Homes",
    location: "Hyderabad",
    units: "Residential",
     area: "150 - 200 Sq.Yds",
    images: ["/images/gallery/mapleshomes.webp"],
  },
  {
    id: 11,
    name: "MRS Meadows Villas",
    location: "Bangalore",
    units: "Villas",
    area: "1800 - 2500 Sq.Ft",
    images: ["/images/gallery/mrsmeadowsvillas.webp"],
  },
  {
    id: 12,
    name: "Park View Apartments 1 & 2",
    location: "Hyderabad",
    units: "Apartments",
     area: "150 - 200 Sq.Yds",
    images: ["/images/gallery/parkviewapartments1a2.webp"],
  },
  {
    id: 13,
    name: "Rain Tree Apartments",
    location: "Hyderabad",
    units: "Apartments",
     area: "150 - 200 Sq.Yds",
    images: ["/images/gallery/raintreeapartments.webp"],
  },
];