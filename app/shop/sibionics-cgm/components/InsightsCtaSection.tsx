import { Button } from "@/components/ui/button";
import { sibionicsBuyNow, sibionicsInsights } from "@/data/sibionics";
import MediaPlaceholder from "./MediaPlaceholder";
import AnimateIn from "@/components/shared/AnimateIn";
import Link from "next/link";

export default function InsightsCtaSection() {
  return (
    <AnimateIn as="section" className="py-8 md:py-6">
      <div className="container">
        <div className="flex flex-col  gap-8 rounded-[40px] bg-[#D4F3EF] p-6 sm:p-8 md:flex-row md:gap-10 md:rounded-[48px] md:px-10 lg:gap-6">
          <MediaPlaceholder
            src='/images/shop/sibionics/insight.gif'
            alt={sibionicsInsights.imageAlt}
            placeholderClassName={sibionicsInsights.placeholderClassName}
            className=" h-[300px] w-full shrink-0 rounded-[28px] md:w-[38%] md:max-w-md lg:w-[48%]"
          />

          <div className="flex w-full flex-1 flex-col items-start gap-5 md:flex-row  md:justify-between md:gap-8">
            <div className="max-w-md flex flex-col h-full">
              <h2 className="text-[28px] font-medium leading-tight text-black md:text-[36px] lg:text-[40px]">
                {sibionicsInsights.title}
              </h2>
              <p className="mt-4 flex-1 text-base leading-relaxed font-normal text-black md:text-lg lg:text-xl">
              Turn continuous glucose data<br className="hidden md:block" /> into meaningful insights that<br className="hidden md:block" /> support healthier habits and<br className="hidden md:block" /> better everyday decisions
              </p>
            </div>

            <Link
              href={"https://btr1hg-7g.myshopify.com/products/sibionics-gs1-cgm"}
                target="_blank"
              className="shrink-0 rounded-[12px] bg-transparent border-2 py-4 sm:py-6 border-black sm:self-center  px-8 text-sm font-medium tracking-[0.12em] text-black hover:bg-black/5 hover:text-black"
              >
                {sibionicsBuyNow.label}
              </Link>
            </div>
          </div>
        </div>
    </AnimateIn>
  );
}
