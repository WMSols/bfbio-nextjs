import HeroSection from "@/components/layout/HeroSection";
import CTABanner from "@/components/shared/CTABanner";
import AnimateIn from "@/components/shared/AnimateIn";
import OurStorySection from "./components/OurStorySection";
import BetterMedicineSection from "./components/BetterMedicineSection";
import WhatGuidesUsSection from "./components/WhatGuidesUsSection";

export const metadata = {
  title: "About Us",
  description:
    "We advance health and improve lives by placing patients at the center of everything we do.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F7F7F7]">
      <HeroSection
        title="We put patients first"
        titleClassName="text-[40px] font-normal md:text-[64px] leading-[1.15]"
        subtitle={
          <span>
            We advance health and improve lives by placing patients
            <br className="hidden md:block" /> at the center of everything we do
          </span>
        }
        backgroundImage="/images/about/hero.webp"
        overlayClassName="bg-black/30"
      />
      <AnimateIn>
        <OurStorySection />
      </AnimateIn>
      <AnimateIn>
        <BetterMedicineSection />
      </AnimateIn>
      <WhatGuidesUsSection />
      <CTABanner
        align="left"
        title={
          <span>
            Support starts with a
            <br />
            conversation
          </span>
        }
        description="Whether you have a question about our medicines, need more information, or are looking for the right resources, our team is here to help."
        ctaText="Contact Us"
        ctaLink="/contact"
        titleClassName="text-[36px] font-bold md:text-[64px] leading-[1.15]"
      />
    </div>
  );
}
