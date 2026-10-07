import { sibionicsFeatures } from "@/data/sibionics";
import { cn } from "@/lib/utils";
import MediaPlaceholder from "./MediaPlaceholder";
import AnimateIn, { AnimateInItem } from "@/components/shared/AnimateIn";

const SIDE_OFFSET = 48;

export default function FeaturesSection() {
  return (
    <section className="bg-black py-16 text-white md:py-24">
      <div className="container space-y-16 md:space-y-24 sm:px-24">
        {sibionicsFeatures.map((feature) => {
          const textFromLeft = !feature.imageOnLeft;

          return (
            <AnimateIn
              key={feature.title}
              stagger
              className="grid items-center gap-8 md:grid-cols-2 md:gap-14 lg:gap-20"
            >
              <AnimateInItem
                x={textFromLeft ? -SIDE_OFFSET : SIDE_OFFSET}
                className={cn(feature.imageOnLeft && "md:order-2")}
              >
                <div className="max-w-md flex flex-col gap-2 items-center justify-center">                  <h2 className="text-3xl leading-tight font-medium md:text-4xl lg:text-[2.75rem]">
                    {feature.title}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
                    {feature.body}
                  </p>
                </div>
              </AnimateInItem>

              <AnimateInItem
                x={textFromLeft ? SIDE_OFFSET : -SIDE_OFFSET}
                className={cn(
                  "relative overflow-hidden rounded-[28px] md:rounded-[32px]",
                  feature.imageOnLeft && "md:order-1",
                )}
              >
                <MediaPlaceholder
                  src={feature.image}
                  alt={feature.imageAlt}
                  placeholderClassName={feature.placeholderClassName}
                  className="aspect-4/3 w-full"
                />
              </AnimateInItem>
            </AnimateIn>
          );
        })}
      </div>
    </section>
  );
}
