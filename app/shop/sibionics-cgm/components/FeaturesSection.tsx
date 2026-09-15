import { Droplet } from "lucide-react";
import { sibionicsFeatures } from "@/data/sibionics";
import { cn } from "@/lib/utils";
import MediaPlaceholder from "./MediaPlaceholder";

export default function FeaturesSection() {
  return (
    <section className="bg-black py-16 text-white md:py-24">
      <div className="container space-y-16 md:space-y-24">
        {sibionicsFeatures.map((feature) => (
          <div
            key={feature.title}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-14 lg:gap-20"
          >
            <div className={cn(feature.imageOnLeft && "md:order-2")}>
              <h2 className="text-3xl leading-tight font-medium md:text-4xl lg:text-[2.75rem]">
                {feature.title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
                {feature.body}
              </p>
            </div>

            <div
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
              {feature.showWaterproofIcon && (
                <div className="absolute right-5 bottom-5 flex size-14 items-center justify-center rounded-2xl bg-white/90 text-black md:right-6 md:bottom-6 md:size-16">
                  <Droplet className="size-7 md:size-8" strokeWidth={1.5} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
