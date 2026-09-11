import Image from "next/image";
import Link from "next/link";

export default function SolarParkSection() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[783/543] w-full overflow-hidden rounded-[50px]">
            <Image
              src="/images/esg/solar.webp"
              alt="Solar panels at the BF Biosciences Solar Park"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl font-medium leading-tight text-black md:text-4xl">
              BF Biosciences Solar Park
            </h2>

            <div className="mt-6 space-y-6 text-base leading-relaxed text-black md:mt-8 md:text-xl">
              <p>
                Our 1 MW solar park reflects our commitment to environmental
                stewardship by harnessing clean, renewable energy to power our
                operations. By reducing our reliance on conventional grid
                electricity, the facility supports our efforts to improve energy
                efficiency and advance a more sustainable operating model.
              </p>
              <p>
                The solar park is expected to generate approximately 1.3–1.7 GWh
                of renewable electricity annually, avoiding an estimated 750–900
                tonnes of CO₂ emissions each year. This investment represents a
                meaningful step in reducing our operational carbon footprint
                while contributing to Pakistan&apos;s transition towards a
                cleaner energy future.
              </p>
            </div>

            <Link
              href="#governance"
              className="mt-8 inline-block text-base text-brand underline decoration-[7%] underline-offset-4 md:text-xl"
            >
              Learn about our Environmental, Social &amp; Governance Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
