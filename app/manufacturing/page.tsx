import HeroSection from "@/components/layout/HeroSection";
import { manufacturingHero } from "@/data/manufacturing";
import OverviewSection from "./components/OverviewSection";
import StorySection from "./components/StorySection";
import ProductionLinesSection from "./components/ProductionLinesSection";
import FacilitySlideshow from "./components/FacilitySlideshow";
import QualitySection from "./components/QualitySection";
import CertificationsSection from "./components/CertificationsSection";
import PartnerCtaSection from "./components/PartnerCtaSection";

export const metadata = {
  title: "Manufacturing",
  description:
    "BF Biosciences operates Pakistan's first biopharmaceutical manufacturing facility, designed in line with EU and US FDA standards by Telstar Projects",
};

export default function ManufacturingPage() {
  return (
    <div className="bg-white">
      <HeroSection
        title={manufacturingHero.title}
        backgroundImage={manufacturingHero.backgroundImage}
        titleSize="small"
        overlayClassName="bg-black/25"
      />
      <OverviewSection />
      <StorySection />
      <ProductionLinesSection />
      <FacilitySlideshow />
      <QualitySection />
      <CertificationsSection />
      <PartnerCtaSection />
    </div>
  );
}
