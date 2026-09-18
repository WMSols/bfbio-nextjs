import { ArrowDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { manufacturingOverview } from "@/data/manufacturing";
import GradientCard from "./GradientCard";
import AnimateIn, { AnimateInItem } from "@/components/shared/AnimateIn";

export default function OverviewSection() {
  const { eyebrow, title, description, highlights, ctaText, ctaHref } =
    manufacturingOverview;

  return (
    <section className="bg-white py-16 md:py-24 sm:px-12">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium text-center tracking-[0.18em] text-black/45 uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-12 bg-brand-gradient bg-clip-text text-4xl leading-[1.15] font-medium whitespace-pre-line text-transparent md:text-5xl lg:text-[56px]">
            {title}
          </h2>
          <p className="mt-8 text-xl leading-snug max-w-172 text-black md:text-[24px] md:leading-[1.35]">
            {description}
          </p>
        </div>

        <AnimateIn stagger className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-5">
          {highlights.map((item, index) => (
            <AnimateInItem key={item.title} className="h-full">
              <GradientCard
                reverse={index % 2 === 1}
                innerClassName="flex min-h-[11.5rem] flex-col items-center justify-center px-6 py-8 text-center md:min-h-[13.5rem] md:px-7"
              >
                <p className="text-lg font-medium text-brand md:text-xl">
                  {item.title}
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-snug text-brand-blue md:text-[15px]">
                  {item.subtitle}
                </p>
              </GradientCard>
            </AnimateInItem>
          ))}
        </AnimateIn>

        <div className="mt-10 flex justify-center md:mt-14">
          <a
            href={ctaHref}
            className={cn(buttonVariants({ variant: "gradient" }), "px-8 py-6 text-lg")}
          >
            {ctaText}
            <ArrowDown className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
