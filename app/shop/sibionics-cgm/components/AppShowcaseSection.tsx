import { sibionicsApp } from "@/data/sibionics";
import MediaPlaceholder from "./MediaPlaceholder";
import AnimateIn from "@/components/shared/AnimateIn";

export default function AppShowcaseSection() {
  return (
    <AnimateIn as="section" className="pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-tight font-medium text-[#1DB8B0] md:text-5xl lg:text-[3.25rem]">
            {sibionicsApp.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-black md:text-lg">
            {sibionicsApp.body}
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[32px] bg-black md:mt-14 md:rounded-[40px]">
          <MediaPlaceholder
            src={sibionicsApp.image}
            alt={sibionicsApp.imageAlt}
            placeholderClassName={sibionicsApp.placeholderClassName}
            className="aspect-21/9 min-h-64 w-full md:min-h-88"
          />
        </div>
      </div>
    </AnimateIn>
  );
}
