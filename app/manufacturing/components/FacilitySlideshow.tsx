"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  manufacturingFacilityIntro,
  manufacturingSlideshow,
} from "@/data/manufacturing";

export default function FacilitySlideshow() {
  const slides = manufacturingSlideshow;
  const total = slides.length;

  // Render [last, ...slides, first] so end wraps can keep sliding in the same direction.
  const track = total > 1 ? [slides[total - 1], ...slides, slides[0]] : slides;
  // Position 1 is the real first slide when clones exist.
  const [trackIndex, setTrackIndex] = useState(total > 1 ? 1 : 0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const realIndex = total > 1 ? (trackIndex - 1 + total) % total : 0;
  const current = slides[realIndex];
  const progress = ((realIndex + 1) / total) * 100;

  const { title, titleHighlight, description } = manufacturingFacilityIntro;
  const highlightIndex = title.indexOf(titleHighlight);
  const titleBefore = title.slice(0, highlightIndex);
  const titleAfter = title.slice(highlightIndex + titleHighlight.length);

  const settleIfCloned = useCallback(
    (nextTrackIndex: number) => {
      if (total <= 1) {
        setIsAnimating(false);
        return;
      }

      // Landed on leading clone (before first) → snap to real last.
      if (nextTrackIndex === 0) {
        setEnableTransition(false);
        setTrackIndex(total);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setEnableTransition(true);
            setIsAnimating(false);
          });
        });
        return;
      }

      // Landed on trailing clone (after last) → snap to real first.
      if (nextTrackIndex === total + 1) {
        setEnableTransition(false);
        setTrackIndex(1);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setEnableTransition(true);
            setIsAnimating(false);
          });
        });
        return;
      }

      setIsAnimating(false);
    },
    [total],
  );

  const go = (dir: 1 | -1) => {
    if (isAnimating || total <= 1) return;

    setIsAnimating(true);
    const nextTrackIndex = trackIndex + dir;
    setTrackIndex(nextTrackIndex);

    window.setTimeout(() => settleIfCloned(nextTrackIndex), 1000);
  };

  return (
    <section id="facility" className="scroll-mt-28 bg-white py-16 md:py-24 sm:px-24">
      <div className="container">
        <div className="mx-auto sm:max-w-5xl text-center">
          <h2 className="text-4xl leading-[1.15] font-medium text-brand-blue md:text-5xl lg:text-[52px]">
            {titleBefore}
            <span className="text-brand">{titleHighlight}</span>
            {titleAfter}
          </h2>
          <p className="mt-5 text-lg leading-[120%] max-w-3xl mx-auto font-light text-black md:text-[24px] 2xl:text-[28px] ">
            {description}
          </p>
        </div>

        <div className="relative mx-auto mt-10 h-[600px] sm:h-[620px] 2xl:h-[750px] overflow-hidden rounded-[20px] md:mt-14 md:rounded-[40px]">
          <div
            className={cn(
              "flex h-full",
              enableTransition && "transition-transform duration-1000 ease-in-out",
            )}
            style={{ transform: `translateX(-${trackIndex * 100}%)` }}
          >
            {track.map((slide, slideIndex) => (
              <div
                key={`${slide.src}-${slideIndex}`}
                className="relative h-full w-full shrink-0"
                aria-hidden={slideIndex !== trackIndex}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 1024px) 80vw, 70vw"
                  className="object-cover"
                  // Eager-load every slide so deployed navigation never waits on decode.
                  priority={slideIndex <= 2}
                  loading="eager"
                />
              </div>
            ))}
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
                disabled={isAnimating}
                aria-label="Previous facility image"
                className="flex size-8 items-center justify-center rounded-full bg-white/90 text-black shadow-sm transition-colors hover:bg-white disabled:opacity-70 md:size-11"
              >
                <ChevronLeft className="size-4 md:size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={isAnimating}
                aria-label="Next facility image"
                className="flex size-8 items-center justify-center rounded-full bg-white/90 text-black shadow-sm transition-colors hover:bg-white disabled:opacity-70 md:size-11"
              >
                <ChevronRight className="size-4 md:size-5" />
              </button>
            </div>
          </div>
        </div>

        <p className="sr-only">
          Showing image {realIndex + 1} of {total}: {current.alt}
        </p>
      </div>
    </section>
  );
}
