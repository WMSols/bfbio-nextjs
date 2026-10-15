const manufacturingImage = (fileName: string) =>
  `/images/manufacturing/${fileName}`;

export const manufacturingHero = {
  title: "Manufacturing",
  backgroundImage: manufacturingImage("hero.webp"),
};

export const manufacturingOverview = {
  eyebrow: "Manufacturing",
  title: "Pioneering Biopharmaceutical\nManufacturing in Pakistan",
  description:
    "Established in 2009, BF Biosciences operates Pakistan’s first biopharmaceutical manufacturing facility, designed in line with EU and US FDA standards by Telstar Projects",
  highlights: [
    {
      title: "Since 2009",
      subtitle: "Operational manufacturing facility",
    },
    {
      title: "3 Production Lines",
      subtitle: "Biopharmaceuticals & conventional pharmaceuticals capabilities",
    },
    {
      title: "4 Delivery Formats",
      subtitle: "Vials · Ampoules\nPrefilled Syringes · Pens & Cartridges",
    },
    {
      title: "EU & US FDA-aligned Design",
      subtitle: "Designed by Telstar Projects",
    },
  ],
  ctaText: "Explore our Facility",
  ctaHref: "#facility",
};

export const manufacturingStory = {
  image: manufacturingImage("_MG_2633.webp"),
  imageAlt: "Electrical infrastructure corridor at the BF Biosciences manufacturing facility",
  paragraphs: [
    "BF Biosciences established its manufacturing facility in 2009 to bring specialized biopharmaceutical medicines closer to patients in Pakistan. Initially focused on small volume parenterals (SVPs)for Hepatitis C, Cancer and Chronic Kidney Disease, the facility also supported the production of selected non-biopharmaceutical medicines.",
    "By manufacturing locally, BF Biosciences has helped improve access to critical therapies, reduce reliance on imports and strengthen Pakistan’s biopharmaceutical manufacturing capabilities.",
  ],
};

export type DailyProductionForm = "Liquid" | "Lyophilized";

export type DailyProductionRow = {
  form: DailyProductionForm;
  packingType: string;
  filling: string;
  dailyCapacity: string;
};

export const manufacturingDailyProduction = {
  title: "Daily Production Capacity",
  columns: ["Form", "Packing Type", "Filling", "Daily Capacity"] as const,
  rows: [
    { form: "Liquid", packingType: "Vials", filling: "2 ML", dailyCapacity: "410,000" },
    { form: "Liquid", packingType: "Vials", filling: "5 ML", dailyCapacity: "345,000" },
    { form: "Liquid", packingType: "Vials", filling: "10 ML", dailyCapacity: "298,000" },
    { form: "Liquid", packingType: "Vials", filling: "30 ML", dailyCapacity: "172,000" },
    { form: "Liquid", packingType: "Ampules", filling: "2 ML", dailyCapacity: "315,000" },
    { form: "Liquid", packingType: "Ampules", filling: "6 ML", dailyCapacity: "250,000" },
    { form: "Liquid", packingType: "Ampules", filling: "10 ML", dailyCapacity: "175,000" },
    { form: "Liquid", packingType: "Prefilled Syringes", filling: "1 ML", dailyCapacity: "135,000" },
    { form: "Liquid", packingType: "Cartridges", filling: "3 ML", dailyCapacity: "90,000" },
    { form: "Lyophilized", packingType: "Vials", filling: "2 ML", dailyCapacity: "220,000" },
    { form: "Lyophilized", packingType: "Vials", filling: "10 ML", dailyCapacity: "105,000" },
    { form: "Lyophilized", packingType: "Vials", filling: "30 ML", dailyCapacity: "54,000" },
  ] satisfies DailyProductionRow[],
};

export const manufacturingSlideshow = [
  {
    src: manufacturingImage("hero.webp"),
    alt: "Production hall with stainless-steel process equipment at the BF Biosciences facility",
  },
  {
    src: manufacturingImage("_MG_2630.webp"),
    alt: "Close-up of a Telstar water-for-injection process skid",
  },
  {
    src: manufacturingImage("slide-3.webp"),
    alt: "Stainless-steel mixing tanks and control cabinets in a clean production area",
  },
  {
    src: manufacturingImage("slide-4.webp"),
    alt: "High-speed filling and packaging line with blue cleanroom flooring",
  },
  {
    src: manufacturingImage("BF 4.webp"),
    alt: "Conveyor and stainless filling enclosure inside the production line",
  },
  {
    src: manufacturingImage("slide-6.webp"),
    alt: "Rotary vial processing machine in a classified manufacturing room",
  },
  {
    src: manufacturingImage("IMG_3616.webp"),
    alt: "Isolator with glove ports on a sterile filling line",
  },
  {
    src: manufacturingImage("IMG_3634.webp"),
    alt: "Water treatment and purification skid with blue storage tanks",
  },
  {
    src: manufacturingImage("IMG_3648.webp"),
    alt: "Cleanroom production equipment with a blue personnel door",
  },
  {
    src: manufacturingImage("_MG_2633.webp"),
    alt: "Electrical switchgear corridor supporting the manufacturing facility",
  },
  {
    src: manufacturingImage("_MG_2642.webp"),
    alt: "Quality control scientist operating laboratory instruments",
  },
  {
    src: manufacturingImage("_MG_2665.webp"),
    alt: "Sievers 900 total organic carbon analyzer in the QC laboratory",
  },
  {
    src: manufacturingImage("_MG_2671.webp"),
    alt: "Scientist preparing a gel electrophoresis sample",
  },
  {
    src: manufacturingImage("_MG_2673.webp"),
    alt: "Laboratory incubators used for quality control testing",
  },
  {
    src: manufacturingImage("_MG_2681.webp"),
    alt: "Cryogenic storage vessel used in biological manufacturing",
  },
  {
    src: manufacturingImage("_MG_2694.webp"),
    alt: "Clean classified corridor with blue personnel doors",
  },
  {
    src: manufacturingImage("_MG_2703.webp"),
    alt: "Scientist weighing materials in a controlled laboratory",
  },
];

export const manufacturingFacilityIntro = {
  title: "Inside Our Manufacturing Facility",
  titleHighlight: "Manufacturing",
  description:
    "Purpose-built environments, advanced manufacturing technologies and highly controlled production areas",
};

export const manufacturingQuality = {
  eyebrow: "Quality Assurance & Control",
  title: "Built on International Compliance",
  description:
    "Quality is integrated into the facility, its processes and its analytical infrastructure— from cleanroom design and equipment qualification to microbiological control and laboratory testing.",
  cards: [
    {
      title: "Quality Control & Microbiology",
      items: [
        "Telstar-designed QC and Microbiology laboratories",
        "Validation in accordance with EMA standards",
        "Agilent and Shimadzu HPLC, UPLC & LCMS systems",
        "Bio-Rad microplate readers",
        "Fully automated bio-analyzers",
      ],
    },
    {
      title: "Quality Systems",
      items: [
        "Full IQ/OQ qualification for equipment and clean areas",
        "Biosafety Level II environments",
        "Multi-stage gowning protocols",
        "Controlled internal laundry systems",
        "Contamination-prevention procedures",
      ],
    },
  ],
};

export const manufacturingCertifications = {
  eyebrow: "Certifications",
  title: "Quality Systems Backed by\nRecognized Standards",
  items: [
    { code: "ISO 9001", label: "Quality Management" },
    { code: "ISO 14001", label: "Environmental Management" },
    { code: "ISO 45001", label: "Occupational Health & Safety" },
    { code: "ISO 17025", label: "Laboratory Competence" },
  ],
};

export const manufacturingCta = {
  title: "Partner with us",
  description:
    "Leverage our decades of pharmaceutical manufacturing expertise, state-of-the-art facilities, and global quality frameworks for your contract manufacturing needs.",
  ctaText: "Get in touch",
  ctaLink: "/contact",
};
