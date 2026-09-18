import HeroSection from "@/components/layout/HeroSection";
import AnimateIn from "@/components/shared/AnimateIn";
import PartnershipIntroSection from "./components/PartnershipIntroSection";
import ManufacturingSection from "./components/ManufacturingSection";
import StrategicGrowthSection from "./components/StrategicGrowthSection";
import CommitmentSection from "./components/CommitmentSection";

export const metadata = {
  title: "Company History",
  description:
    "From a 2002 partnership to Pakistan's first biotech formulation company, BF Biosciences continues to expand access to advanced therapies.",
};

export default function AboutHistoryPage() {
  return (
    <>
      <HeroSection
        title="Company History"
        backgroundImage="/images/about/history/hero.webp"
        overlayClassName="bg-black/30"
      />
      <AnimateIn>
        <PartnershipIntroSection />
      </AnimateIn>
      <AnimateIn>
        <ManufacturingSection />
      </AnimateIn>
      <AnimateIn>
        <StrategicGrowthSection />
      </AnimateIn>
      <AnimateIn>
        <CommitmentSection />
      </AnimateIn>
    </>
  );
}
