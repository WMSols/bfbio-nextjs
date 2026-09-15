"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TherapeuticArea } from "@/types/strapi";
import { useCategories } from "@/app/medicines/hooks/useCategories";
import { cn } from "@/lib/utils";
import TherapeuticCardBig from "../shared/TherapeuticCardBig";

interface TherapeuticsGridProps {
  items: TherapeuticArea[];
  loading: boolean;
}

function SlideNav({
  onPrev,
  onNext,
  active,
}: {
  onPrev: () => void;
  onNext: () => void;
  active: "prev" | "next";
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onPrev}
        className={cn(
          "flex size-12 items-center justify-center rounded-full p-[2px] text-white transition-opacity hover:opacity-80",
          active === "prev" ? "bg-brand-gradient" : "bg-transparent",
        )}
        aria-label="Previous slide"
      >
        <span className="flex size-full items-center justify-center rounded-full bg-[#A8A4AC]">
          <ChevronLeft className="size-5" />
        </span>
      </button>
      <button
        onClick={onNext}
        className={cn(
          "flex size-12 items-center justify-center rounded-full p-[2px] text-white transition-opacity hover:opacity-80",
          active === "next" ? "bg-brand-gradient" : "bg-transparent",
        )}
        aria-label="Next slide"
      >
        <span className="flex size-full items-center justify-center rounded-full bg-[#A8A4AC]">
          <ChevronRight className="size-5" />
        </span>
      </button>
    </div>
  );
}

export default function TherapeuticsGridClient({
  items,
  loading
}: TherapeuticsGridProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeNav, setActiveNav] = useState<"prev" | "next">("next");

  const touchStartX = useRef<number>(0);
  const isDragging = useRef(false);
  const hasMoved = useRef(false);

  const { categories, isLoading: categoriesLoading } = useCategories();

  const getCategorySlug = (title: string) => {
    const categorySlug = !categoriesLoading && categories.find((c) => c.name === title)?.slug;
    return categorySlug || title.toLowerCase().replace(/\s+/g, '-');
  };

  const nextSlide = () => {
    if (!items || items.length === 0) return;
    setActiveNav("next");
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (!items || items.length === 0) return;
    setActiveNav("prev");
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <section className="bg-background w-full overflow-hidden py-16 text-black md:py-24">
      {loading ? (
        <div className="text-muted-foreground py-12 text-center">
          Loading therapeutic areas...
        </div>
      ) : !items || items.length === 0 ? (
        <div className="text-muted-foreground py-12 text-center">
          No therapeutic areas found.
        </div>
      ) : (
        <div className="flex w-full flex-col lg:grid lg:grid-cols-2 lg:items-stretch">
          <div className="order-1 flex flex-col justify-between gap-10 px-6 py-4 sm:px-10 lg:order-2 lg:gap-0 lg:px-12 lg:py-2 xl:px-16">
            <div>
              <p className="text-sm font-light tracking-[0.16em] text-muted-foreground uppercase">
                Therapeutic Areas
              </p>
              <div className="bg-brand-gradient mt-8 h-2 w-24 md:mt-10" />
              <h2 className="mt-10 text-3xl leading-[1.15] font-normal tracking-tight md:mt-12 md:text-4xl xl:text-[42px]">
                A broad portfolio of
                <br />
                innovative therapies
              </h2>
              <p className="mt-8 max-w-md text-base font-normal leading-relaxed text-black/80 md:mt-10 md:text-lg">
                Through continuous development and strategic partnerships, we offer medicines across several therapeutic areas to support modern healthcare.
              </p>
            </div>

            <div className="hidden lg:flex">
              <SlideNav active={activeNav} onPrev={prevSlide} onNext={nextSlide} />
            </div>
          </div>

          <div
            className={cn(
              "relative order-2 w-full overflow-hidden touch-pan-y select-none lg:order-1",
              "[--gap:0.75rem] [--gutter:10%] [--card:86%]",
              "sm:[--gutter:12%] sm:[--card:82%]",
              "lg:[--gutter:8%] lg:[--card:90%]",
            )}
            onPointerDown={(e) => {
              touchStartX.current = e.clientX;
              isDragging.current = true;
              hasMoved.current = false;
            }}
            onPointerMove={(e) => {
              if (!isDragging.current) return;
              const dx = e.clientX - touchStartX.current;
              if (Math.abs(dx) > 10) {
                hasMoved.current = true;
              }
            }}
            onPointerUp={(e) => {
              if (!isDragging.current) return;
              isDragging.current = false;
              const dx = e.clientX - touchStartX.current;

              if (Math.abs(dx) > 40) {
                if (dx < 0) nextSlide();
                else prevSlide();
              }
              requestAnimationFrame(() => {
                hasMoved.current = false;
              });
            }}
            onPointerCancel={() => {
              isDragging.current = false;
            }}
          >
            <div className="invisible ml-[var(--gutter)] aspect-square w-[var(--card)]" />

            {items.map((item, index) => {
              const length = items.length;

              let offset = index - activeIndex;
              if (offset > Math.floor(length / 2)) offset -= length;
              else if (offset < -Math.floor(length / 2)) offset += length;

              const isActive = offset === 0;
              const isPrev = offset === -1 || (offset < 0 && length === 2);
              const shouldAnimate = Math.abs(offset) <= 1;

              const linkHref = `/medicines?category=${getCategorySlug(item.name)}`;

              return (
                <div
                  key={item.name}
                  className={cn(
                    "absolute aspect-square",
                    shouldAnimate && "duration-700 ease-out [transition-property:left,top,width]",
                    !shouldAnimate && "transition-none",
                    isActive && "top-0 left-[var(--gutter)] z-10 w-[var(--card)] pointer-events-auto",
                    isPrev && "top-[75px] z-5 w-[calc(var(--card)-150px)] left-[calc(var(--gutter)-var(--gap)-(var(--card)-150px))] pointer-events-auto",
                    offset < -1 && "top-[75px] z-0 w-[calc(var(--card)-150px)] left-[calc(var(--gutter)-var(--gap)-(var(--card)-150px)-var(--card))] pointer-events-none",
                    offset >= 1 && "top-0 left-full z-0 w-[var(--card)] pointer-events-none",
                  )}
                >
                  <TherapeuticCardBig
                    item={item}
                    isActive={isActive}
                    linkHref={linkHref}
                    onClick={() => {
                      if (hasMoved.current) return;
                      if (!isActive) setActiveIndex(index);
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="order-3 flex px-6 pt-8 sm:px-10 lg:hidden">
            <SlideNav active={activeNav} onPrev={prevSlide} onNext={nextSlide} />
          </div>
        </div>
      )}
    </section>
  );
}
