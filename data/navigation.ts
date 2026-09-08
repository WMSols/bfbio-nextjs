export type NavItem = {
  label: string;
  href: string | null;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "History", href: "/about/history" },
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "Purpose", href: "/about/purpose" },
      { label: "CEO Message", href: "/about/ceo-message" },
      { label: "Board of Directors", href: "/about/board-of-directors" },
    ],
  },
  {
    label: "Medicines",
    href: "/medicines",
    children: [
      { label: "Medicine Categories", href: null },
      { label: "All Medicines", href: null },
      { label: "Product Concern", href: "/medicines/product-concern" },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Sibionics CGM", href: "/shop/sibionics-cgm" },
      { label: "Products", href: "/shop/products" },
    ],
  },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Global Presence", href: "/global-presence" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "ESG", href: "/esg" },
  { label: "Careers", href: "/careers" },
  {
    label: "Investors",
    href: "/investors",
    children: [
      { label: "Newsroom", href: "/investors/newsroom" },
      { label: "Investors Information", href: "/investors" },
      { label: "Our Impact", href: "/esg" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];
