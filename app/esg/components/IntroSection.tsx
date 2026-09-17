import { Cormorant } from "next/font/google";



export default function IntroSection() {
  return (
    <section>
      <div className="container max-w-7xl sm:px-20">
        <h2 className="max-w-3xl text-4xl font-normal leading-[1.2] sm:text-6xl md:text-7xl lg:text-[5rem]">
          Creating Impact<br /> Beyond <span className="italic text-brand font-serif">Medicine</span>
        </h2>

        <p className="mt-8 max-w-3xl text-2xl leading-snug text-black md:mt-12 2xl:text-3xl">
          Our commitment to sustainability extends beyond<br className="hidden md:block" /> business to create
          lasting value for people,<br className="hidden md:block" /> communities, and the planet.
        </p>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:mt-10 2xl:text-xl">
          As a subsidiary of Ferozsons Laboratories Limited, BF Biosciences is
          part of a shared commitment to responsible and sustainable growth. Our
          ESG efforts are carried out in alignment with Ferozsons, reflecting a
          collective approach to environmental responsibility, social impact,
          and strong governance. Together, we support non-profits and Civil
          Society Organizations (CSOs), contribute to Pakistan&apos;s progress
          toward key Sustainable Development Goals, and work to create lasting
          value for patients, communities, and the wider society.
        </p>
      </div>
    </section>
  );
}
