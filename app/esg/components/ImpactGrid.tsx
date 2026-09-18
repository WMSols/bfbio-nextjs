import Image from "next/image";
import AnimateIn, { AnimateInItem } from "@/components/shared/AnimateIn";

const impactAreas = [
  {
    title: "Arts & Culture",
    image: "/images/esg/impact-arts.webp",
  },
  {
    title: "Quality Education",
    image: "/images/esg/impact-education.webp",
  },
  {
    title: "Zero Hunger",
    image: "/images/esg/impact-zero-hunger.webp",
  },
  {
    title: "Health & Well-being",
    image: "/images/esg/impact-health.webp",
  },
  {
    title: "Climate Action",
    image: "/images/esg/impact-climate.webp",
  },
  {
    title: "Community",
    image: "/images/esg/impact-community.webp",
  },
];

export default function ImpactGrid() {
  return (
    <section>
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-medium text-black md:mb-16 md:text-4xl">
          Our Impact
        </h2>

        <AnimateIn stagger className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {impactAreas.map((area) => (
            <AnimateInItem key={area.title} className="h-full">
            <article
              className="relative aspect-4/5 overflow-hidden rounded-[50px]"
            >
              <Image
                src={area.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
              <div className="absolute inset-0 bg-black/25" />
              <h3 className="absolute inset-0 flex items-center justify-center px-4 text-center text-2xl font-semibold text-white md:text-[28px]">
                {area.title}
              </h3>
            </article>
            </AnimateInItem>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
