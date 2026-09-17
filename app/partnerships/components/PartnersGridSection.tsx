import Image from "next/image";
import Link from "next/link";
import { partners } from "@/data/partnerships";
import { cn } from "@/lib/utils";

export default function PartnersGridSection() {
  return (
    <section className="bg-[#F7F7F7] pb-20 md:pb-28 lg:pb-36">
      <div className="container">
        <h2 className="mb-10 text-center text-2xl text-brand md:mb-14 md:text-[2rem]">
          Our Trusted Partners
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {partners.map((partner) => {
            const isExternal = partner.href.startsWith("http");
            const className = cn(
              "relative flex aspect-2/1 items-center justify-center overflow-hidden rounded-[24px] px-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-transform hover:scale-[1.02]",
              partner.background,
            );
            const logo = (
              <Image
                src={partner.image}
                alt=""
                width={280}
                height={80}
                className={cn(
                  partner.imageClassName
                    ? partner.imageClassName
                    : "h-12 w-auto max-w-[85%] object-contain md:h-16",
                )}
              />
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
                  {logo}
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
                {logo}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
