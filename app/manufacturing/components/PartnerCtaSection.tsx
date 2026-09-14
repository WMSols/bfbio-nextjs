import { Button } from "@/components/ui/button";
import { manufacturingCta } from "@/data/manufacturing";

export default function PartnerCtaSection() {
  const { title, description, ctaText, ctaLink } = manufacturingCta;

  return (
    <section className="bg-brand py-16 text-white md:py-24">
      <div className="container flex flex-col items-center text-center">
        <h2 className="text-[32px] leading-snug font-medium md:text-[40px]">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
          {description}
        </p>
        <Button href={ctaLink} variant="gradient" className="mt-8 px-10">
          {ctaText}
        </Button>
      </div>
    </section>
  );
}
