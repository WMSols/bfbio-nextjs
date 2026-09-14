import type { JSX } from "react";
import Link from "next/link";
import { partners, type PartnerLogoId } from "@/data/partnerships";
import { cn } from "@/lib/utils";
import {
  BagoLogo,
  FerozsonsLogo,
  GileadLogo,
  SibionicsLogo,
} from "./PartnerLogos";

const logos: Record<PartnerLogoId, () => JSX.Element> = {
  bago: BagoLogo,
  gilead: GileadLogo,
  ferozsons: FerozsonsLogo,
  sibionics: SibionicsLogo,
};

export default function PartnersGridSection() {
  return (
    <section className="bg-[#F7F7F7] pb-20 md:pb-28 lg:pb-36">
      <div className="container">
        <h2 className="mb-10 text-center text-2xl text-brand md:mb-14 md:text-[2rem]">
          Our Trusted Partners
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {partners.map((partner) => {
            const Logo = logos[partner.logo];
            const isExternal = partner.href.startsWith("http");
            const className = cn(
              "flex aspect-2/1 items-center justify-center rounded-[24px] px-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-transform hover:scale-[1.02]",
              partner.background,
            );

            if (isExternal) {
              return (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={partner.name}
                  className={className}
                >
                  <Logo />
                </a>
              );
            }

            return (
              <Link
                key={partner.name}
                href={partner.href}
                aria-label={partner.name}
                className={className}
              >
                <Logo />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
