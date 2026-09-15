import SibionicsHero from "./components/SibionicsHero";
import IntroSection from "./components/IntroSection";
import InsightsCtaSection from "./components/InsightsCtaSection";
import WearSection from "./components/WearSection";
import AppShowcaseSection from "./components/AppShowcaseSection";
import FeaturesSection from "./components/FeaturesSection";

export const metadata = {
  title: "Sibionics CGM",
  description:
    "SIBIONICS CGM offers real-time glucose monitoring with 14-day wear, calibration-free use, and smart alerts. Now available in Pakistan through BF Biosciences.",
};

export default function SibionicsCgmPage() {
  return (
    <div className="bg-black">
      <SibionicsHero />
      <div className="relative z-10 -mt-16 rounded-t-[2.5rem] bg-white md:-mt-24 md:rounded-t-[3.5rem]">
        <IntroSection />
        <InsightsCtaSection />
        <WearSection />
        <AppShowcaseSection />
      </div>
      <FeaturesSection />
    </div>
  );
}
