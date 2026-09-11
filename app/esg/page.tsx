"use client";
import HeroSection from "@/components/layout/HeroSection";
import BannerCard from "@/components/shared/BannerCard";
import CTABanner from "@/components/shared/CTABanner";
import IntroSection from "./components/IntroSection";
import SolarParkSection from "./components/SolarParkSection";
import GovernanceSection from "./components/GovernanceSection";
import ESGSlidesshow from "./components/ESGSlidesshow";
import ESGPillarOverview from "./components/ESGPillarOverview";
import ESGInitiativeGrid from "./components/ESGInitiativeGrid";
import { ESGCategory, esgInitiativesData } from "@/data/esgData";
import { useState } from "react";
import ESGFilterBar from "./components/ESGFilterBar";

 const metadata = {
  title: "Environmental, Social and Governance",
  description:
    "BF Biosciences' commitment to environmental responsibility, social impact, and strong governance — creating lasting value beyond medicine.",
};

export default function EsgPage() {
  const [activeCategory, setActiveCategory] = useState<ESGCategory | "all">(
    "all",
  );

  const filtered =
    activeCategory === "all"
      ? esgInitiativesData
      : esgInitiativesData.filter((i) => i.category === activeCategory);

  const countFor = (cat: ESGCategory) =>
    esgInitiativesData.filter((i) => i.category === cat).length;
  return (
    <>
      <HeroSection
        title="Environmental, Social and Governance"
        backgroundImage="/images/esg/hero.webp"
        titleSize="small"
        overlayClassName="bg-black/40"
      />
      <div className="flex flex-col gap-16 py-16 md:gap-24 md:py-24">
        <IntroSection />
        <BannerCard
          title="Creating Stronger Communities Through Lasting Impact"
          description="BF Biosciences corporate vision has always centred on creating a better world for the people around us. Our Impact focus spans four pillars: education, healthcare, arts & culture, and community — because we believe that health, knowledge, and creative expression are equally essential to a flourishing society. Many of these initiatives are supported year on year as part of our enduring commitment to Pakistan and beyond."
          image="/images/esg/banner.webp"
          variant="rounded"
          overlay
          overlayClassName="bg-linear-to-r from-[#3b73ac]/35 to-[#934397]/35"
          titleWeight="medium"
          titleClassName="text-3xl sm:text-4xl md:text-6xl"
          titleWidthClassName="max-w-5xl"
        />
        <SolarParkSection />
        <BannerCard
          title="Khalid Waheed Campus"
          description="In memory of Ferozsons' founding Chief Executive, Mr. Khalid Waheed, the company and family co-funded the TCF Khalid Waheed Campus at Kot Addu, Muzaffargarh. With 10% of the world's out-of-school children living in Pakistan, primary education is among our most urgent national challenges. This campus stands as a lasting tribute — bringing quality schooling to one of the country's most underserved regions."
          image="/images/esg/kw-campus.webp"
          ctaText="Missions, Strategy & Values"
          ctaLink="/about/purpose"
          titleWeight="medium"
          titleClassName="text-4xl sm:text-5xl md:text-7xl lg:text-8xl"
          titleWidthClassName="max-w-4xl"
          overlayClassName="bg-black/20"
        />
        <ESGSlidesshow />
        <ESGPillarOverview activeCategory={activeCategory} onCategoryChange={setActiveCategory} /> 
        <div className="container">
          <ESGFilterBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            countFor={countFor}
          />

          <ESGInitiativeGrid filtered={filtered} />
        </div>
        <GovernanceSection />
      </div>
      <CTABanner
        title="Join us in building a better world"
        description="We believe that health, knowledge, conservation and creative expression are equally essential to a sustainable society. Many of these initiatives are supported year on year as part of our enduring commitment to our Planet."
        ctaText="Get in touch"
        ctaLink="/contact"
        titleClassName="text-[32px] font-medium md:text-[40px] leading-snug"
        ctaClassName="bg-black hover:bg-black/90"
      />
    </>
  );
}
