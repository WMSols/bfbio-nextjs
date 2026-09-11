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
        backgroundImage="/images/company-overview/hero.webp"
        titleSize="small"
        overlayClassName="bg-black/40"
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
          image="/images/company-overview/banner.webp"
          variant="rounded"
          ctaText="View Our Social Responsibility Initiatives"
          ctaLink="/esg"
          ctaVariant="solid"
          titleWidthClassName="max-w-7xl"
          titleClassName="text-3xl sm:text-4xl md:text-6xl"
          ctaClassName="mt-20"
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
          image="/images/company-overview/banner-2.webp"
          description={
            <span>
              We are committed to employee development
              <br className="hidden md:block" /> through continuous learning and
              leadership
              <br className="hidden md:block" /> opportunities.
            </span>
          }
          ctaText="Career Opportunities"
          ctaLink="/careers"
        />
      </div>
      <ArticlesGridClient />
      <TherapeuticsGrid/>
      <CTABanner/>
    </>
  );
}
