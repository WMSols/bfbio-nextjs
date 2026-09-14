import HeroSection from "@/components/layout/HeroSection";
import CTABanner from "@/components/shared/CTABanner";
import IntroSection from "./components/IntroSection";
import MissionVisionSection from "./components/MissionVisionSection";
import CoreValuesSection from "./components/CoreValuesSection";

export const metadata = {
  title: "Purpose",
  description:
    "We advance health and improve lives by placing patients at the center of everything we do.",
};

export default function PurposePage() {
  return (
    <>
      <HeroSection
        title={
          <span>
            We advance health and improve lives by placing
            <br className="hidden md:block" /> patients at the center of
            everything we do.
          </span>
        }
        backgroundImage="/images/purpose/hero.webp"
        titleSize="small"
        overlayClassName="bg-black/15"
      />
      <IntroSection />
      <CTABanner
        title="Committed to Better Health"
        description="For over 20 years, BF Biosciences has been advancing healthcare through scientific excellence, innovation, and an unwavering commitment to quality— helping expand access to high-quality biopharmaceutical therapies and improve patient outcomes across Pakistan."
        ctaText="Company Overview"
        ctaLink="/about/company-overview"
        ctaVariant="gradient"
        className="bg-transparent"
        titleClassName="font-medium md:text-[96px]"
      />
      <MissionVisionSection />
      <CoreValuesSection />
      <CTABanner
        title="Join us in building a better world"
        description="We believe that health, knowledge, conservation and creative expression are equally essential to a sustainable society. Many of these initiatives are supported year on year as part of our enduring commitment to our Planet."
        ctaText="Get in touch"
        ctaLink="/contact"
        titleClassName="text-[32px] font-medium md:text-[40px] leading-snug"
        className="bg-transparent"
      />
    </>
  );
}
