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
            <h2 className="max-w-[35.125rem] text-3xl font-medium leading-[1.2] text-brand md:text-5xl lg:text-[64px]">
              A New Chapter of Strategic Growth
            </h2>
            <p className="mt-8 max-w-4xl text-lg leading-[1.2] text-black md:mt-10 md:text-[32px]">
              In 2024, BF Biosciences Limited was successfully listed on the
              Pakistan Stock Exchange following a highly successful IPO. As the
              first and only company in Pakistan to operate a biotech
              manufacturing facility of this kind, we continue to strengthen the
              country&apos;s capabilities in advanced biopharmaceutical
              production.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[24.3rem] overflow-hidden rounded-[50px]">
            <Image
              src="/images/careers/mission.png"
              alt="Laboratory work supporting BF Biosciences biotech manufacturing"
              fill
              sizes="(max-width: 768px) 90vw, 389px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 max-w-5xl md:mt-24">
          <h2 className="text-3xl font-medium leading-[1.2] text-brand-blue md:text-5xl lg:text-[64px]">
            Expanding Access to
            <br />
            Advanced Therapies
          </h2>

          <div className="mt-10 space-y-10 md:mt-14">
            {therapies.map((therapy) => (
              <div key={therapy.title}>
                <h3 className="text-2xl font-semibold leading-[1.2] text-black md:text-[36px]">
                  {therapy.title}
                </h3>
                <p className="mt-3 text-lg font-normal leading-[1.2] text-black md:mt-4 md:text-[32px]">
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
