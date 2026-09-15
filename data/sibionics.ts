export const sibionicsRoutes = {
  landing: "/shop/sibionics-cgm",
  product: "/shop/sibionics-cgm/product",
  checkout: "/shop/sibionics-cgm/checkout",
};

export const sibionicsBuyNow = {
  label: "BUY NOW",
  href: sibionicsRoutes.product,
};

export const sibionicsHero = {
  title: "SIBIONICS CGM",
  subtitle: "Monitor your glucose levels 24/7",
  body: "SIBIONICS turns real-time glucose data into clear, actionable insights to help you understand how food, activity, sleep, and daily habits affect your body, so you can make smarter choices every day.",
  backgroundImage: "/images/shop/sibionics/hero.webp",
  placeholderClassName: "bg-[#3d4f4a]",
};

export const sibionicsIntro = {
  title: "Introducing a Global CGM Leader to Pakistan",
  body: "SIBIONICS CGM offers real-time glucose monitoring with 14-day wear, calibration-free use, smart alerts, and a MARD of 8.83%. Trusted by millions of users globally, the technology is now available in Pakistan through its partnership with BF Biosciences, expanding access to advanced diabetes management solutions.",
  stats: [
    { value: "3M+", label: "Users Worldwide" },
    { value: "100+", label: "Countries Covered" },
    {
      value: "3900+",
      label: "Medical Institutions'\nGlucose Management",
    },
  ],
};

export const sibionicsInsights = {
  title: "Insights That Drive Better Health",
  body: "Turn continuous glucose data into meaningful insights that support healthier habits and better everyday decisions.",
  image: "/images/shop/sibionics/insights.webp",
  imageAlt: "SIBIONICS CGM reader and mobile app showing glucose readings",
  placeholderClassName: "bg-[#9ec9c0]",
};

export const sibionicsWear = {
  title: "Wear SIBIONICS, Know your glucose, Improve your health",
  highlight: "SIBIONICS",
  body: "The SIBIONICS GS1 continuously tracks your glucose while you work, exercise, shower, swim, sleep, and go about your day. Wear it consistently to better understand how your food, activity, sleep, and daily habits affect your glucose and overall health.",
  image: "/images/shop/sibionics/arm.webp",
  imageAlt: "Person wearing a SIBIONICS GS1 continuous glucose monitor on their arm",
  placeholderClassName: "bg-[#5a6d7a]",
  reading: {
    value: "39",
    unit: "mg/dL",
  },
};

export const sibionicsApp = {
  title: "Your Health, In Your Hands",
  body: "The SIBIONICS app and device work together to monitor your glucose, uncover patterns, and understand how your daily choices affect your body.",
  image: "/images/shop/sibionics/app-screens.webp",
  imageAlt: "SIBIONICS mobile app screens showing glucose tracking and insights",
  placeholderClassName: "bg-[#1f1f1f]",
};

export type SibionicsFeature = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  placeholderClassName: string;
  imageOnLeft?: boolean;
  showWaterproofIcon?: boolean;
};

export const sibionicsFeatures: SibionicsFeature[] = [
  {
    title: "Easy and Painless Application",
    body: "Applying the sensor is quick and simple. Just follow the step-by-step instructions included in the package, and you'll be ready to start tracking your glucose in minutes.",
    image: "/images/shop/sibionics/application.webp",
    imageAlt: "Applying a SIBIONICS GS1 sensor to the back of the arm",
    placeholderClassName: "bg-[#d9cfc3]",
  },
  {
    title: "Designed to Stay Out of the Way",
    body: "The GS1 CGM features a discreet, low-profile design made to fit seamlessly into your day—so you can keep tracking your glucose without unnecessary distractions or getting in the way of how you live.",
    image: "/images/shop/sibionics/discreet.webp",
    imageAlt: "SIBIONICS GS1 worn discreetly on the upper arm",
    placeholderClassName: "bg-[#4a6b7c]",
    imageOnLeft: true,
  },
  {
    title: "Waterproof for Everyday Wear",
    body: "With an IP28 waterproof rating*, the GS1 is built to stay on through workouts, showers, swims, and everything in between.",
    image: "/images/shop/sibionics/waterproof.webp",
    imageAlt: "SIBIONICS GS1 worn in water",
    placeholderClassName: "bg-[#7a9aaa]",
    showWaterproofIcon: true,
  },
];

export const sibionicsProduct = {
  title: "Your Health, In Your Hands",
  addToCartLabel: "Add to cart",
  gallery: [
    {
      src: "/images/shop/sibionics/product-1.webp",
      alt: "SIBIONICS GS1 CGM kit with sensor applicator and mobile app",
      placeholderClassName: "bg-[#9ec9c0]",
    },
    {
      src: "/images/shop/sibionics/product-2.webp",
      alt: "SIBIONICS GS1 sensor applicator",
      placeholderClassName: "bg-[#7ebfb6]",
    },
    {
      src: "/images/shop/sibionics/product-3.webp",
      alt: "SIBIONICS GS1 packaging box",
      placeholderClassName: "bg-[#b7ddd6]",
    },
  ],
};

export const sibionicsSpecs = [
  { label: "Sensor service life", value: "GS1: 14 days" },
  { label: "Sensor memory", value: "GS1: 14 days" },
  { label: "Sensor shelf life", value: "12 months" },
  { label: "Waterproof rating", value: "IP28" },
  { label: "Bluetooth range", value: "20 feet" },
  { label: "MARD", value: "8.83%" },
  { label: "Sensor dimensions", value: "33.5mmx20.0mmx5.3mm" },
  { label: "Sensor weight", value: "3.84g" },
  { label: "Sensor power source", value: "One lithium battery DC 3.0V" },
  { label: "Operating temperature", value: "5°C to 40°C" },
  { label: "Storage and transport temperature", value: "4 °C to 25 °C" },
  {
    label: "Operating and storage relative humidity",
    value: "10%-90%, non-condensing",
  },
];

export const sibionicsPackingList = [
  {
    label: "1*Packaging Box",
    src: "/images/shop/sibionics/pack-box.webp",
    placeholderClassName: "bg-[#1DB8B0]",
  },
  {
    label: "1*Sensor Applicator",
    src: "/images/shop/sibionics/pack-applicator.webp",
    placeholderClassName: "bg-[#2ec4b6]",
  },
  {
    label: "1*Sensor Pack",
    caption: "1*Overpatch",
    src: "/images/shop/sibionics/pack-sensor.webp",
    placeholderClassName: "bg-[#d5d5d5]",
  },
  {
    label: "1*User Guide",
    src: "/images/shop/sibionics/pack-guide.webp",
    placeholderClassName: "bg-[#ececec]",
  },
  {
    label: "1*Product Insert",
    src: "/images/shop/sibionics/pack-insert.webp",
    placeholderClassName: "bg-[#f3f3f3]",
  },
];

export const sibionicsProvinces = [
  {
    name: "Punjab",
    cities: ["Lahore", "Rawalpindi", "Faisalabad", "Multan", "Gujranwala"],
  },
  {
    name: "Sindh",
    cities: ["Karachi", "Hyderabad", "Sukkur", "Larkana"],
  },
  {
    name: "Khyber Pakhtunkhwa",
    cities: ["Peshawar", "Abbottabad", "Mardan", "Swat"],
  },
  {
    name: "Balochistan",
    cities: ["Quetta", "Gwadar", "Turbat"],
  },
  {
    name: "Islamabad Capital Territory",
    cities: ["Islamabad"],
  },
  {
    name: "Azad Jammu & Kashmir",
    cities: ["Muzaffarabad", "Mirpur"],
  },
  {
    name: "Gilgit-Baltistan",
    cities: ["Gilgit", "Skardu"],
  },
] as const;
