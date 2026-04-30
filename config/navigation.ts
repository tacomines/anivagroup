export const navigation = [
  { label: "Home", href: "/" },

  { label: "About", href: "/about" },

  {
    label: "Ongoing Projects",
    href: "/ongoing-projects",
    children: [
      { label: "Tellapur", href: "/ongoing-projects/tellapur" },
      { label: "Nallagandla", href: "/ongoing-projects/nallagandla" },
    ],
  },

  { label: "Delivered Projects", href: "/delivered-projects" },
  { label: "Property Partners", href: "/property-partners" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];