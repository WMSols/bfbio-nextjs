export const partners = [
  {
    name: "Bagó",
    href: "https://www.bago.com",
    logo: "bago" as const,
    background: "bg-white",
  },
  {
    name: "Gilead",
    href: "https://www.gilead.com",
    logo: "gilead" as const,
    background: "bg-[#C8102E]",
  },
  {
    name: "Ferozsons Laboratories Limited",
    href: "https://ferozsons-labs.com",
    logo: "ferozsons" as const,
    background: "bg-[#3B6BA5]",
  },
  {
    name: "Sibionics",
    href: "/shop/sibionics-cgm",
    logo: "sibionics" as const,
    background: "bg-[#1DB8B0]",
  },
];

export type PartnerLogoId = (typeof partners)[number]["logo"];
