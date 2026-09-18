import { sibionicsPackingList, sibionicsSpecs } from "@/data/sibionics";
import MediaPlaceholder from "../../components/MediaPlaceholder";
import AnimateIn, { AnimateInItem } from "@/components/shared/AnimateIn";

export default function SpecsSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-black md:text-2xl">
            Specs - SIBIONICS GS1
          </h2>
          <div className="mt-4 border-t border-black/15" />

          <AnimateIn stagger className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {sibionicsSpecs.map((spec) => (
              <AnimateInItem key={spec.label}>
              <div>
                <p className="text-sm font-semibold text-black">{spec.label}</p>
                <p className="mt-1 text-sm text-black/45">{spec.value}</p>
              </div>
              </AnimateInItem>
            ))}
          </AnimateIn>

          <h2 className="mt-20 text-xl font-semibold text-black md:text-2xl">
            Packing list
          </h2>
          <div className="mt-4 border-t border-black/15" />

          <AnimateIn stagger className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {sibionicsPackingList.map((item) => (
              <AnimateInItem key={item.label}>
              <div className="flex flex-col items-center text-center">
                {item.caption && (
                  <p className="mb-2 text-xs text-black/50">{item.caption}</p>
                )}
                <MediaPlaceholder
                  src={item.src}
                  alt={item.label}
                  placeholderClassName={item.placeholderClassName}
                  className="aspect-square w-full max-w-40 rounded-lg"
                />
                <p className="mt-3 text-xs text-black/70">{item.label}</p>
              </div>
              </AnimateInItem>
            ))}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
