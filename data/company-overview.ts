import type { TherapeuticArea } from "@/types/strapi";

export const therapeuticsData: TherapeuticArea[] = [
    { name: "Cardiology", image: "/images/Icons-Therapeutic-Areas/cardiology.webp" },
    { name: "Oncology", image: "/images/Icons-Therapeutic-Areas/oncology.webp" },
    {
      name: "Hepatology",
      image: "/images/Icons-Therapeutic-Areas/hepatology.webp",
      portfolioLink: "/products",
    },
    { name: "Pulmonology", image: "/images/Icons-Therapeutic-Areas/pulmonology.webp" },
  
    //Note: Pictures are missing from clients end
    { name: "Antiviral", image: "/images/Icons-Therapeutic-Areas/antiviral.webp" },
    { name: "Antibiotics", image: "/images/Icons-Therapeutic-Areas/antibiotics.webp" },
    {
      name: "Cough Syrup & Lozenges",
      image: "/images/Icons-Therapeutic-Areas/cough-syrup.webp",
    },
    { name: "Gastroenterology", image: "/images/Icons-Therapeutic-Areas/gastroenterology.webp" },
    { name: "Urology", image: "/images/Icons-Therapeutic-Areas/urology.webp" },
    {
      name: "Weight-Management",
      image: "/images/Icons-Therapeutic-Areas/weight-management.webp",
    },
    { name: "Dermatology", image: "/images/Icons-Therapeutic-Areas/dermatology.webp" },
    { name: "Psychiatry", image: "/images/Icons-Therapeutic-Areas/psychiatry.webp" },
    // { label: "Pain Relief", image: "/images/Icons-Therapeutic-Areas/pulmonology.webp" },
  ];
  