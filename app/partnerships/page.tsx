import HeroSection from "@/components/layout/HeroSection";
import AnimateIn from "@/components/shared/AnimateIn";
import IntroSection from "./components/IntroSection";
import PartnersGridSection from "./components/PartnersGridSection";

export const metadata = {
  title: "Partnerships",
  description:
    "We believe meaningful healthcare progress is achieved through trusted partnerships and a shared commitment to patient care.",
};

export default function PartnershipsPage() {
  return (
    <div className="bg-[#F7F7F7]">
      <HeroSection
        title="Our Trusted Partners"
        backgroundImage="/images/partnerships/hero.webp"
        titleClassName="text-4xl md:text-6xl lg:text-8xl"
        overlayClassName="bg-linear-to-t from-black/50 via-black/25 to-black/15"
      />
      <AnimateIn>
        <IntroSection />
      </AnimateIn>
      <PartnersGridSection />
    </div>
  );
}
