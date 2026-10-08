import Image from "next/image";

export default function ManufacturingSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <h2 className="mx-auto mb-12 max-w-[84.6rem] bg-brand-gradient bg-clip-text text-center text-3xl font-medium text-transparent md:mb-32 md:text-5xl 2xl:text-[56px] lg:leading-[1.2]">
          Advancing Biotech Manufacturing and Pharmaceutical Capabilities in
          Pakistan
        </h2>
      </div>

      <div className="relative mx-4 flex min-h-[32rem] items-center overflow-hidden rounded-[50px] px-6 py-12 md:min-h-[800px] sm:px-10 md:mx-8  md:px-16 md:py-16 lg:mx-22 ">
        <Image
          src="/images/banner-bg.webp"
          alt="BF Biosciences manufacturing facility in Lahore"
          fill
          sizes="(max-width: 1024px) 100vw, 90vw"
          className="z-0 object-cover"
        />
        <div className="absolute inset-0 z-1 bg-black/50" />
        <div className="relative z-10">
          <div className="max-w-6xl space-y-8 text-xl font-semibold leading-[1.2] text-white md:text-[24px] lg:text-[32px]">
            <p>
              Completed in 2009 on a 27-acre site in Lahore, our
              state-of-the-art manufacturing facility produces biological
              medicines for the treatment of cancer and Hepatitis C, serving
              both domestic and international markets.
            </p>
            <p>
              BF Biosciences has played a pioneering
              role in establishing the country&apos;s biotechnology
              manufacturing capabilities and expanding access to high-quality
              biologic medicines.
            </p>
            <p>
              Today, our products are exported across global markets, reflecting
              our commitment to quality, innovation, and global healthcare
              standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
