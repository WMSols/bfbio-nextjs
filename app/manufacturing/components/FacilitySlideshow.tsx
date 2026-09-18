"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  manufacturingFacilityIntro,
  manufacturingSlideshow,
} from "@/data/manufacturing";

export default function FacilitySlideshow() {
  const slides = manufacturingSlideshow;
  const [index, setIndex] = useState(0);
  const [outgoing, setOutgoing] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [shift, setShift] = useState(false);

  const total = slides.length;
  const current = slides[index];
  const progress = ((index + 1) / total) * 100;
  const animating = outgoing !== null;
  const { title, titleHighlight, description } = manufacturingFacilityIntro;
  const highlightIndex = title.indexOf(titleHighlight);
  const titleBefore = title.slice(0, highlightIndex);
  const titleAfter = title.slice(highlightIndex + titleHighlight.length);

  const go = (dir: 1 | -1) => {
    if (animating) return;
    setDirection(dir);
    setOutgoing(index);
    setShift(false);
    setIndex((currentIndex) => (currentIndex + dir + total) % total);
  };

  useEffect(() => {
    if (outgoing === null) return;

    let innerFrame = 0;
    const start = window.requestAnimationFrame(() => {
      innerFrame = window.requestAnimationFrame(() => setShift(true));
    });
    const end = window.setTimeout(() => {
      setOutgoing(null);
      setShift(false);
    }, 1100);

    return () => {
      window.cancelAnimationFrame(start);
      window.cancelAnimationFrame(innerFrame);
      window.clearTimeout(end);
    };
  }, [outgoing]);

  return (
    <section id="facility" className="scroll-mt-28 bg-white py-16 md:py-24 sm:px-12">
      <div className="container">
        <div className="mx-auto sm:max-w-6xl text-center">
          <h2 className="text-4xl leading-[1.15] font-medium text-brand-blue md:text-5xl lg:text-[52px]">
            {titleBefore}
            <span className="text-brand">{titleHighlight}</span>
            {titleAfter}
          </h2>
          <p className="mt-5 text-lg leading-[120%] max-w-3xl mx-auto font-light text-black md:text-[24px] 2xl:text-[28px] ">
            {description}
          </p>
        </div>

        <div className="relative mx-auto mt-10 aspect-16/10 overflow-hidden rounded-[20px] md:mt-14 md:rounded-[40px]">
          {outgoing !== null && (
            <div
              className="absolute inset-0 transition-transform duration-1000 ease-in-out"
              style={{
                transform: shift
                  ? `translateX(${direction * -100}%)`
                  : "translateX(0)",
              }}
            >
              <Image
                src={slides[outgoing].src}
                alt={slides[outgoing].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 90vw"
                className="object-cover"
              />
            </div>
          )}

          <div
            className={cn(
              "absolute inset-0",
              outgoing !== null &&
                shift &&
                "transition-transform duration-1000 ease-in-out",
            )}
            style={{
              transform:
                outgoing === null || shift
                  ? "translateX(0)"
                  : `translateX(${direction * 100}%)`,
            }}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 90vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end gap-2.5 px-3 py-3 md:gap-4 md:px-8 md:py-7">
            <div className="mb-1.5 h-[3px] min-w-0 flex-1 overflow-hidden rounded-full bg-white/55 md:mb-4">
              <div
                className="h-full bg-brand-gradient transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="pointer-events-auto flex shrink-0 gap-1.5 md:gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={animating}
                aria-label="Previous facility image"
                className="flex size-8 items-center justify-center rounded-full bg-white/90 text-black shadow-sm transition-colors hover:bg-white disabled:opacity-70 md:size-11"
              >
                <ChevronLeft className="size-4 md:size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={animating}
                aria-label="Next facility image"
                className="flex size-8 items-center justify-center rounded-full bg-white/90 text-black shadow-sm transition-colors hover:bg-white disabled:opacity-70 md:size-11"
              >
                <ChevronRight className="size-4 md:size-5" />
              </button>
            </div>
          </div>
        </div>

        <p className="sr-only">
          Showing image {index + 1} of {total}: {current.alt}
        </p>
      </div>
    </section>
  );
}
