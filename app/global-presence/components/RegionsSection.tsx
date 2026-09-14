import Image from "next/image";
import { Button } from "@/components/ui/button";
import { regions } from "@/data/global-presence";

export default function RegionsSection() {
  return (
    <section className="px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {regions.map((region) => (
            <article
              key={region.id}
              className="relative aspect-8/7 w-full max-w-100 shrink-0 overflow-hidden rounded-[50px] sm:w-100"
            >
              <Image
                src={region.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <h2 className="absolute inset-0 z-10 flex items-center justify-center px-8 text-center text-2xl text-white md:text-[32px]">
                {region.name}
              </h2>
            </article>
          ))}
        </div>

        <Button href="/contact" variant="gradient" className="mt-10 md:mt-16">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
