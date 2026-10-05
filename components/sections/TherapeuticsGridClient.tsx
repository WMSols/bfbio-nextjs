"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TherapeuticArea } from "@/types/strapi";
import { useCategories } from "@/app/medicines/hooks/useCategories";
import { cn } from "@/lib/utils";
import TherapeuticCardBig from "../shared/TherapeuticCardBig";
import AnimateIn from "@/components/shared/AnimateIn";

interface TherapeuticsGridProps {
  items: TherapeuticArea[];
  loading: boolean;
}

type SlideRole = "active" | "prev" | "next" | "hidden-left" | "hidden-right";
type NavDirection = "prev" | "next";

function SlideNav({
  onPrev,
  onNext,
  active,
}: {
  onPrev: () => void;
  onNext: () => void;
  active: NavDirection;
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

function getSlideRole(
  index: number,
  activeIndex: number,
  length: number,
  direction: NavDirection,
  prepIndex: number | null,
  prepRole: SlideRole | null,
): SlideRole {
  if (prepIndex === index && prepRole) return prepRole;
  if (index === activeIndex) return "active";
  if (length <= 1) return "hidden-right";

  const prevIndex = (activeIndex - 1 + length) % length;
  const nextIndex = (activeIndex + 1) % length;

  // Two slides share one inactive card — park it on the exit side of the last move
  // so a reversed click can enter from the correct side immediately.
  if (length === 2) {
    return direction === "next" ? "prev" : "next";
  }

  if (index === prevIndex) return "prev";
  if (index === nextIndex) return "next";

  // Stage the rest in loop order so wrapping never pulls a card from the wrong side.
  const forwardDistance = (index - activeIndex + length) % length;
  return forwardDistance <= Math.floor(length / 2) ? "hidden-right" : "hidden-left";
}

function isEnterSide(role: SlideRole, direction: NavDirection) {
  if (direction === "next") return role === "next" || role === "hidden-right";
  return role === "prev" || role === "hidden-left";
}

export default function TherapeuticsGridClient({
  items,
  loading,
}: TherapeuticsGridProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeNav, setActiveNav] = useState<NavDirection>("next");
  const [skipTransition, setSkipTransition] = useState(false);
  const [prepIndex, setPrepIndex] = useState<number | null>(null);
  const [prepRole, setPrepRole] = useState<SlideRole | null>(null);

  const touchStartX = useRef(0);
  const isDragging = useRef(false);
  const hasMoved = useRef(false);
  const isAnimating = useRef(false);

  const { categories, isLoading: categoriesLoading } = useCategories();

  const getCategorySlug = (title: string) => {
    const categorySlug =
      !categoriesLoading && categories.find((c) => c.name === title)?.slug;
    return categorySlug || title.toLowerCase().replace(/\s+/g, "-");
  };

  const goTo = useCallback(
    (direction: NavDirection, targetIndex?: number) => {
      if (!items || items.length === 0 || isAnimating.current) return;

      const length = items.length;
      const nextIndex =
        targetIndex ??
        (direction === "next"
          ? (activeIndex + 1) % length
          : (activeIndex - 1 + length) % length);

      if (nextIndex === activeIndex) return;

      const currentRole = getSlideRole(
        nextIndex,
        activeIndex,
        length,
        activeNav,
        null,
        null,
      );

      const commit = () => {
        setPrepIndex(null);
        setPrepRole(null);
        setSkipTransition(false);
        setActiveNav(direction);
        setActiveIndex(nextIndex);
        window.setTimeout(() => {
          isAnimating.current = false;
        }, 700);
      };

      isAnimating.current = true;
      setActiveNav(direction);

      // Incoming card is on the exit side (common when looping with 2 slides, or
      // after traveling one way). Teleport it to the enter side, then animate.
      if (!isEnterSide(currentRole, direction)) {
        setSkipTransition(true);
        setPrepIndex(nextIndex);
        setPrepRole(direction === "next" ? "next" : "prev");

        requestAnimationFrame(() => {
          requestAnimationFrame(commit);
        });
        return;
      }

      commit();
    },
    [activeIndex, activeNav, items],
  );

  const nextSlide = () => goTo("next");
  const prevSlide = () => goTo("prev");

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
          <AnimateIn className="order-1 flex flex-col justify-between gap-10 px-6 py-4 sm:px-10 lg:order-2 lg:gap-0 lg:px-12 lg:py-2 xl:px-16">
            <div className="flex flex-col gap-8 2xl:gap-12">
              <p className="text-sm sm:text-xl font-extralight tracking-[0.16em] uppercase">
                Therapeutic Areas
              </p>
              <div className="bg-brand-gradient mt-8 h-5 w-50 " />
              <h2 className=" text-3xl leading-[1.15] font-medium tracking-tight  md:text-5xl 2xl:text-[63px]">
                A broad portfolio of
                <br />
                innovative therapies
              </h2>
              <p className="mt-8  text-base font-normal leading-relaxed text-black/80  md:text-xl">
                Through continuous development and strategic
                <br className="hidden sm:block" /> partnerships, we offer
                medicines across several
                <br className="hidden sm:block" /> therapeutic areas to support
                modern healthcare.
              </p>
            </div>

            <div className="hidden lg:flex">
              <SlideNav
                active={activeNav}
                onPrev={prevSlide}
                onNext={nextSlide}
              />
            </div>
          </AnimateIn>

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
              const role = getSlideRole(
                index,
                activeIndex,
                length,
                activeNav,
                prepIndex,
                prepRole,
              );
              const isActive = role === "active";
              const shouldAnimate =
                !skipTransition &&
                (role === "active" || role === "prev" || role === "next");

              const linkHref = `/medicines?category=${getCategorySlug(item.name)}`;

              return (
                <div
                  key={item.name}
                  className={cn(
                    "absolute aspect-square",
                    shouldAnimate &&
                      "duration-700 ease-out [transition-property:left,top,width]",
                    !shouldAnimate && "transition-none",
                    role === "active" &&
                      "top-0 left-[var(--gutter)] z-10 w-[var(--card)] pointer-events-auto",
                    role === "prev" &&
                      "top-[75px] z-5 w-[calc(var(--card)-150px)] left-[calc(var(--gutter)-var(--gap)-(var(--card)-150px))] pointer-events-auto",
                    role === "hidden-left" &&
                      "top-[75px] z-0 w-[calc(var(--card)-150px)] left-[calc(var(--gutter)-var(--gap)-(var(--card)-150px)-var(--card))] pointer-events-none",
                    (role === "next" || role === "hidden-right") &&
                      "top-0 left-full z-0 w-[var(--card)] pointer-events-none",
                  )}
                >
                  <TherapeuticCardBig
                    item={item}
                    isActive={isActive}
                    linkHref={linkHref}
                    onClick={() => {
                      if (hasMoved.current || isActive) return;
                      const prevIndex = (activeIndex - 1 + length) % length;
                      goTo(index === prevIndex ? "prev" : "next", index);
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="order-3 flex justify-end px-6 pt-8 sm:px-10 lg:hidden">
            <SlideNav active={activeNav} onPrev={prevSlide} onNext={nextSlide} />
          </div>
        </div>
      )}
    </section>
  );
}
