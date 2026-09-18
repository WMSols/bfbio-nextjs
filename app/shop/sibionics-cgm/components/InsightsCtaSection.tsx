import { Button } from "@/components/ui/button";
import { sibionicsBuyNow, sibionicsInsights } from "@/data/sibionics";
import MediaPlaceholder from "./MediaPlaceholder";
import AnimateIn from "@/components/shared/AnimateIn";

export default function InsightsCtaSection() {
  return (
    <AnimateIn as="section" className="py-8 md:py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-8 rounded-[40px] bg-[#D4F3EF] p-6 sm:p-8 md:flex-row md:gap-10 md:rounded-[48px] md:p-10 lg:gap-14">
          <MediaPlaceholder
            src={sibionicsInsights.image}
            alt={sibionicsInsights.imageAlt}
            placeholderClassName={sibionicsInsights.placeholderClassName}
            className="aspect-5/4 w-full shrink-0 rounded-[28px] md:w-[38%] md:max-w-md"
          />

          <div className="flex w-full flex-1 flex-col items-start gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="max-w-md">
              <h2 className="text-[28px] leading-tight text-black md:text-[36px] lg:text-[40px]">
                {sibionicsInsights.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-black md:text-lg">
                {sibionicsInsights.body}
              </p>
            </div>

            <Button
              href={sibionicsBuyNow.href}
              variant="outline"
              size="pill"
              className="shrink-0 rounded-full border-black bg-white px-8 text-sm font-medium tracking-[0.12em] text-black hover:bg-black/5 hover:text-black"
            >
              {sibionicsBuyNow.label}
            </Button>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
