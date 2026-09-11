import HeroSection from "@/components/layout/HeroSection";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactFormSection from "./components/ContactFormSection";

export default function ContactPage() {
  return (
    <>
    <HeroSection title="Contact Us" backgroundImage="/images/contact/hero.webp" overlayClassName="bg-black/30" />
    <div className="bg-background">
        <section className="py-16 md:py-24">
          {/* Stacked Layout with centered max-width */}
          <div className="container max-w-6xl mx-auto px-4 flex flex-col gap-16 md:gap-24">
            <ContactFormSection />
            <ContactInfoSection />
          </div>
        </section>

      </div>
    </>
  )
}
