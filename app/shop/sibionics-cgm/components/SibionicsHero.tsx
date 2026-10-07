"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { sibionicsBuyNow, sibionicsHero } from "@/data/sibionics";
import { cn } from "@/lib/utils";
import MediaPlaceholder from "./MediaPlaceholder";

export default function SibionicsHero() {
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const target = heroCtaRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyCta(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px -8px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative flex h-svh min-h-svh items-center overflow-hidden pt-28 pb-28 md:pt-44 md:pb-36">
        <MediaPlaceholder
          src="/images/shop/sibionics/hero-new-2.png"
          alt=""
          placeholderClassName={sibionicsHero.placeholderClassName}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="container relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl leading-none font-bold tracking-tight text-white sm:text-6xl md:text-7xl 2xl:text-[5.5rem]">
            {sibionicsHero.title}
          </h1>
          <p className="2xl:mt-4 text-2xl font-medium text-[#1DB8B0] sm:text-3xl md:text-5xl md:leading-tight">
            {sibionicsHero.subtitle}
          </p>
          <p className="2xl:mt-6 mt-4 max-w-2xl text-base leading-tight text-white md:text-lg">
            {sibionicsHero.body}
          </p>
          <div ref={heroCtaRef} className="mt-24">
            <Button
              href={sibionicsBuyNow.href}
              size="pill"
              className="rounded-[12px] font-bold border-transparent bg-black/60 px-10 py-8 text-sm  tracking-[0.12em] text-white hover:text-[#1DB8B0] hover:bg-black/85 transition-all duration-300"
            >
              {sibionicsBuyNow.label}
            </Button>
          </div>
        </div>
      </section>

      <div
        aria-hidden={!showStickyCta}
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] transition-all duration-300 ease-out sm:bottom-6 sm:px-6",
          showStickyCta
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <Link
          href={sibionicsBuyNow.href}
          className="group relative mx-auto flex h-12 w-44 max-w-none items-center justify-center overflow-hidden rounded-2xl border border-[#1DB8B0]/40 bg-black/95 px-8 text-sm font-semibold tracking-[0.14em] text-white shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md sm:h-18 sm:w-lg sm:rounded-xl"
        >
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 z-0 w-0 bg-[#1DB8B0] transition-[width] duration-500 ease-out group-hover:w-full"
          />
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            {sibionicsBuyNow.label}
          </span>
        </Link>
      </div>
    </>
  );
}
