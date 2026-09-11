export interface NavChild {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  megaImage?: string;
  megaImageTitle?: string;
  megaImageSubtitle?: string;
  megaImageLink?: string;
  children?: NavChild[];
}

export const mainNavItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about/company-overview",
    description:
      "For over 70 years, Bf Bio Sciences has been putting patients first",
    megaImage: "/images/navbar/nav-about.jpg",
    megaImageTitle: "",
    megaImageSubtitle: "Discover our Company",
    megaImageLink: "/about/company-overview",
    children: [
      { label: "Our History", href: "/about/history" },
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "Purpose", href: "/about/purpose" },
      { label: "Message from the CEO", href: "/about/ceo-message" },
      { label: "Board of Directors", href: "/about/board-of-directors" },
    ],
  },
  {
    label: "Medicines",
    href: "/medicines",
    description:
      "Advancing healthcare through innovative medicines across multiple therapeutic areas",
    megaImageTitle: "",
    children: [
      { label: "All medicines", href: "/medicines" },
      { label: "Report a product concern", href: "/medicines/product-concern" },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
    description:
      "Discover a growing selection of products, available directly from BF Biosciences",
    megaImage: "/images/navbar/nav-shop.png",
    megaImageTitle: "",
    megaImageSubtitle: "View our products",
    megaImageLink: "/shop",
    children: [
      { label: "Shop", href: "/shop" },
      { label: "Products", href: "/shop/products" },
      { label: "Sibionics CGM", href: "/shop/sibionics-cgm" },
    ],
  },
  {
    label: "Partnerships",
    href: "/partnerships",
    description:
      "We believe meaningful healthcare progress is achieved through trusted partnerships and a shared commitment to patient care",
    megaImage: "/images/navbar/nav-partnerships.png",
    megaImageTitle: "",
    megaImageSubtitle: "Explore our partnerships",
    megaImageLink: "/partnerships",
  },
  {
    label: "Global Presence",
    href: "/global-presence",
    description:
      "Delivering trusted, high-quality pharmaceutical products to over 30 countries",
    megaImage: "/images/global-presence/oceania.webp",
    megaImageTitle: "",
    megaImageSubtitle: "View our global presence",
    megaImageLink: "/global-presence",
  },
  {
    label: "Manufacturing",
    href: "/manufacturing",
    description:
      "BF Biosciences operates Pakistan's first biopharmaceutical manufacturing facility, designed in line with EU and US FDA standards by Telstar Projects",
    megaImage: "/images/manufacturing/_MG_2630.webp",
    megaImageTitle: "",
    megaImageSubtitle: "Learn about our manufacturing",
    megaImageLink: "/manufacturing",
  },
  {
    label: "ESG",
    href: "/esg",
    description:
      "We are committed to creating lasting value through sustainable practices, social impact, and responsible business",
    megaImage: "/images/esg/hero.webp",
    megaImageTitle: "",
    megaImageSubtitle: "See our impact",
    megaImageLink: "/esg",
  },
];

export const secondaryNavItems: NavItem[] = [
  {
    label: "Investors",
    href: "/investors",
    description:
      "We enhance shareholder value by collaborating for excellence and upholding the highest standards of ethics and transparency",
    megaImage: "/images/banner-bg.webp",
    megaImageTitle: "",
    megaImageSubtitle: "Investor information",
    megaImageLink: "/investors",
    children: [
      { label: "Newsroom ", href: "/investors/newsroom" },
      { label: "Investors Information", href: "/investors" },
      { label: "ESG", href: "/esg" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    description:
      "We are committed to employee development through continuous learning and leadership opportunities",
    megaImage: "/images/careers/hero.webp",
    megaImageTitle: "",
    megaImageSubtitle: "Find your role at BF Biosciences",
    megaImageLink: "/careers",
  },
];

export const footerLinks = [
  {
    title: "About Us",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our History", href: "/about/history" },
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "Purpose", href: "/about/purpose" },
      { label: "Message from the CEO", href: "/about/ceo-message" },
      { label: "Board of Directors", href: "/about/board-of-directors" },
    ],
  },
  {
    title: "Medicines",
    links: [
      { label: "All medicines", href: "/medicines" },
      { label: "Report a Product Concern", href: "/medicines/product-concern" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Shop", href: "/shop" },
      { label: "Products", href: "/shop/products" },
      { label: "Sibionics CGM", href: "/shop/sibionics-cgm" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Global Presence", href: "/global-presence" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "ESG", href: "/esg" },
    ],
  },
  {
    title: " ",
    links: [
      { label: "Investor Information", href: "/investors" },
      { label: "Newsroom", href: "/investors/newsroom" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Site Map", href: "/sitemap" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Site Map", href: "/sitemap" },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ferozsonslabs/",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ferozsonslabs/",
    icon: "facebook",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ferozsonslabs",
    icon: "linkedin",
  },
] as const;
