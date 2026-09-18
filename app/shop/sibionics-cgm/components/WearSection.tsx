import { ArrowDown } from "lucide-react";
import { sibionicsWear } from "@/data/sibionics";
import MediaPlaceholder from "./MediaPlaceholder";
import AnimateIn from "@/components/shared/AnimateIn";

function HighlightedTitle({
  title,
  highlight,
}: {
  title: string;
  highlight?: string;
}) {
  if (!highlight || !title.includes(highlight)) {
    return title;
  }

  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      <span className="text-[#1DB8B0]">{highlight}</span>
      {after}
    </>
  );
}

export default function WearSection() {
  return (
    <AnimateIn as="section" className="py-12 md:py-20">
      <div className="container">
        <div className="max-w-4xl">
          <h2 className="text-4xl leading-tight font-medium text-black md:text-5xl lg:text-[3.5rem]">
            <HighlightedTitle
              title={sibionicsWear.title}
              highlight={sibionicsWear.highlight}
            />
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:text-lg">
            {sibionicsWear.body}
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[32px] md:mt-14 md:rounded-[40px]">
          <MediaPlaceholder
            src={sibionicsWear.image}
            alt={sibionicsWear.imageAlt}
            placeholderClassName={sibionicsWear.placeholderClassName}
            className="aspect-16/10 min-h-80 w-full md:min-h-128"
          />

          <div className="absolute bottom-[16%] left-[6%] md:left-[8%]">
            <div className="flex items-end rounded-2xl bg-[#C41E3A] px-5 py-3 text-white md:rounded-[1.25rem] md:px-7 md:py-4">
              <span className="text-5xl leading-none font-medium md:text-7xl">
                {sibionicsWear.reading.value}
              </span>
              <span className="mb-1 ml-1 text-sm font-medium md:text-lg">
                {sibionicsWear.reading.unit}
              </span>
            </div>
            <ArrowDown
              className="mx-auto mt-4 size-6 text-white md:size-8"
              strokeWidth={2.5}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
