import Image from "next/image";

const therapies = [
  {
    title: "HIV Prevention",
    description:
      "Ferozsons was selected as one of six global partners of Gilead Sciences to manufacture generic lenacapavir, with BF Biosciences designated to produce the injectable formulation.",
  },
  {
    title: "Metabolic Care",
    description:
      "The launch of Zeptide (tirzepatide) expanded access to advanced obesity and diabetes treatment across Pakistan.",
  },
];

export default function StrategicGrowthSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(12rem,24.3rem)] md:gap-16">
          <div>
            <h2 className="max-w-150 text-3xl font-medium leading-[1.2] text-brand md:text-5xl lg:text-[56px]">
              A New Chapter of Strategic Growth
            </h2>
            <p className="mt-8 max-w-5xl text-lg md:text-[22px] leading-[1.2] text-black md:mt-10 2xl:text-[28px]">
              In 2024, BF Biosciences Limited was successfully listed on the
              Pakistan<br className="hidden sm:block" /> Stock Exchange following a highly successful IPO. As the
              first and only<br className="hidden sm:block" /> company in Pakistan to operate a biotech
              manufacturing facility of this<br className="hidden sm:block" /> kind, we continue to strengthen the
              country&apos;s capabilities in advanced<br className="hidden sm:block" /> biopharmaceutical
              production.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[20rem] overflow-hidden rounded-[50px]">
            <Image
              src="/images/investors/hero.webp"
              alt="Laboratory work supporting BF Biosciences biotech manufacturing"
              fill
              sizes="(max-width: 768px) 90vw, 389px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 max-w-5xl md:mt-24">
          <h2 className="text-3xl font-medium leading-[1.2] text-brand-blue md:text-5xl lg:text-[56px]">
            Expanding Access to
            <br />
            Advanced Therapies
          </h2>

          <div className="mt-10 space-y-10 md:mt-20">
            {therapies.map((therapy) => (
              <div key={therapy.title}>
                <h3 className="text-2xl ml-2 font-semibold leading-[1.2] text-black md:text-[28px]">
                  {therapy.title}
                </h3>
                <p className="mt-2 text-lg max-w-3xl font-normal leading-[1.2] text-black md:mt-8 md:text-[24px]">
                  {therapy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
