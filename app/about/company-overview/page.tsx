import HeroSection from "@/components/layout/HeroSection";
import VisionSection from "./components/VisionSection";
import StatsSection from "./components/StatsSection";
import CeoSection from "./components/CeoSection";
import CovidAccessSection from "./components/CovidAccessSection";
import BannerCard from "@/components/shared/BannerCard";
import TherapeuticsGrid from "@/components/sections/TherapeuticsGrid";
import ArticlesGridClient from "@/components/sections/ArticlesGridClient";
import CTABanner from "@/components/shared/CTABanner";

export default function CompanyOverviewPage() {
  return (
    <>
      <HeroSection
        title={
          <span>
            Over 20 years of biotechnology,
            <br className="hidden md:block" /> driven by a vision for better
            health
          </span>
        }
        backgroundImage="/images/about/company-overview/hero.webp"
        titleSize="small"
        overlayClassName="bg-black/40"
        titleClassName="leading-[120%]"
      />
      <div className="flex flex-col gap-16 py-16 md:gap-24 md:py-24">
        <VisionSection />
        <BannerCard
          title={
            <span>
              BF Biosciences advances patient education
              <br className="hidden md:block" /> and disease awareness to help
              people make
              <br className="hidden md:block" /> informed healthcare decisions
            </span>
          }
          image="/images/about/company-overview/banner.webp"
          variant="rounded"
          ctaText="View Our Social Responsibility Initiatives"
          ctaLink="/esg"
          ctaVariant="solid"
          titleWidthClassName="max-w-7xl"
          titleClassName="  text-3xl sm:text-[42px] 2xl:text-5xl leading-[120%]"
          ctaClassName="mt-20 sm:px-6 px-3 text-sm"
        />
        <StatsSection />
        <CeoSection />
        <CovidAccessSection />
        <BannerCard
          title={
            <span>
              Join our team and help shape
              <br className="hidden md:block" /> the future of healthcare.
            </span>
          }
          titleClassName="font-bold text-3xl sm:text-[46px] 2xl:text-6xl leading-[120%]"
          titleWidthClassName="max-w-7xl"
          image="/images/about/company-overview/banner-2.webp"
          description={
            <span>
              We are committed to employee development
              <br className="hidden md:block" /> through continuous learning and
              leadership
              <br className="hidden md:block" /> opportunities.
            </span>
          }
          descriptionClassName="text-base sm:text-2xl mt-4 sm:mt-10"
          ctaText="Career Opportunities"
          ctaLink="/careers"
          ctaClassName="sm:mt-52 mt-20 sm:px-6 px-3 "
        />
      </div>
      <ArticlesGridClient />
      <TherapeuticsGrid/>
      <CTABanner/>
    </>
  );
}
