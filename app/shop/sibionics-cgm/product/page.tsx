import FeaturesSection from "../components/FeaturesSection";
import ProductHero from "./components/ProductHero";
import SpecsSection from "./components/SpecsSection";

export const metadata = {
  title: "SIBIONICS GS1 CGM",
  description:
    "Buy the SIBIONICS GS1 Continuous Glucose Monitoring System. 14-day wear, calibration-free use, now available in Pakistan through BF Biosciences.",
};

export default function SibionicsProductPage() {
  return (
    <div className="bg-black">
      <div className="bg-white">
        <ProductHero />
        <SpecsSection />
      </div>
      <FeaturesSection />
    </div>
  );
}
