"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface MissionSectionProps {
  label: string;
  headline: string | ReactNode;
  description: string | ReactNode;
  ctaText: string;
  ctaLink: string;
  secondaryLink?: { text: string; href: string };
  backgroundImage?: string;
}

export default function MissionSection({
  label,
  headline,
  description,
  ctaText,
  ctaLink,
  secondaryLink,
  backgroundImage,
}: MissionSectionProps) {
  return (
    <section className=" mt-8   overflow-hidden bg-brand-gradient">
      <div className="relative flex flex-col items-center justify-center px-2 pt-16 pb-16 md:px-12 md:pt-24 md:pb-24 lg:px-16">
        <div className="container relative z-10 flex flex-col items-center text-white font-light text-center">
          <h2 className="mb-6 md:mb-8  md:text-base uppercase  ">
            {label}
          </h2>

          <h3 className="mb-8 md:mb-10  text-[28px] font-medium leading-relaxed  sm:text-3xl md:text-6xl 2xl:text-7xl  lg:leading-snug">
            {headline}
          </h3>

          <p className="mb-10 md:mb-12 sm:max-w-4xl text-base  font-light leading-relaxed md:text-xl">
            {description}
          </p>

          <div>
            <Button variant="transparent"
              asChild
              size="lg"
              className="rounded-full bg-mission-cta h-12 px-8 text-base font-medium text-mission-cta-foreground hover:opacity-90 transition-opacity"
            >
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
