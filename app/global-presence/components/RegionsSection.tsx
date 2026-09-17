"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { regions } from "@/data/global-presence";
import { cn } from "@/lib/utils";

const fade = { duration: 0.2 };

export default function RegionsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index === null ? index : (index + 1) % regions.length,
        );
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null ? index : (index - 1 + regions.length) % regions.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  const goPrev = () =>
    setActiveIndex((index) =>
      index === null ? index : (index - 1 + regions.length) % regions.length,
    );
  const goNext = () =>
    setActiveIndex((index) =>
      index === null ? index : (index + 1) % regions.length,
    );

  const activeRegion = activeIndex === null ? null : regions[activeIndex];
  const countryColumns = activeRegion
    ? splitCountries(activeRegion.countries)
    : [[], []];
  const isOpen = activeIndex !== null;

  return (
    <section className="px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="relative w-full">
          <motion.div
            className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6"
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={fade}
            style={{ pointerEvents: isOpen ? "none" : "auto" }}
          >
            {regions.map((region, index) => (
              <button
                key={region.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-haspopup="dialog"
                aria-label={`View countries in ${region.name}`}
                className={cn(
                  "relative aspect-5/4 w-full overflow-hidden rounded-[32px] text-left shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.03] md:rounded-[40px] lg:col-span-2",
                  index === 3 && "lg:col-start-2",
                  index === 4 &&
                    "sm:col-span-2 sm:mx-auto sm:max-w-[calc(50%-0.625rem)] lg:col-span-2 lg:mx-0 lg:max-w-none",
                )}
              >
                <Image
                  src={region.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <h2 className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-2xl text-white md:text-[32px]">
                  {region.name}
                </h2>
              </button>
            ))}
          </motion.div>

          <AnimatePresence>
            {activeRegion && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="region-dialog-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={fade}
                className="absolute inset-0 z-10 overflow-hidden rounded-[32px] bg-black max-sm:bottom-auto max-sm:h-[min(32rem,75svh)] md:rounded-[50px]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeRegion.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={fade}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeRegion.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/20" />
                  </motion.div>
                </AnimatePresence>

                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="absolute top-5 right-5 z-20 text-white/90 transition-colors hover:text-white md:top-8 md:right-8"
                  aria-label="Close"
                >
                  <X className="size-7" />
                </button>

                <div className="relative z-10 flex h-full min-h-0 flex-col overflow-y-auto px-8 py-10 pb-24 md:px-14 md:py-14 md:pb-24">
                  <h2
                    id="region-dialog-title"
                    className="mb-8 text-4xl font-medium text-white md:mb-10 md:text-6xl"
                  >
                    {activeRegion.name}
                  </h2>

                  <div className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-3 sm:grid-cols-2">
                    {countryColumns.map((column, columnIndex) => (
                      <ul key={columnIndex} className="space-y-3">
                        {column.map((country) => (
                          <li
                            key={country}
                            className="text-base text-white md:text-xl"
                          >
                            {country}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>

                <div className="absolute right-5 bottom-5 z-20 flex items-center gap-3 md:right-8 md:bottom-8">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="flex size-11 items-center justify-center rounded-full bg-white text-black transition-opacity hover:opacity-80 md:size-12"
                    aria-label="Previous region"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="flex size-11 items-center justify-center rounded-full bg-white text-black transition-opacity hover:opacity-80 md:size-12"
                    aria-label="Next region"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Button href="/contact" variant="gradient" className="mt-10 md:mt-16">
          Contact Us
        </Button>
      </div>
    </section>
  );
}

function splitCountries(countries: readonly string[]) {
  const midpoint = Math.ceil(countries.length / 2);
  return [countries.slice(0, midpoint), countries.slice(midpoint)] as const;
}
