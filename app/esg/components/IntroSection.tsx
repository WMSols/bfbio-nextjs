import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});

export default function IntroSection() {
  return (
    <section>
      <div className="container max-w-5xl">
        <h2 className="max-w-3xl text-4xl font-normal leading-[1.2] sm:text-6xl md:text-7xl lg:text-[6rem]">
          Creating Impact Beyond
          <span
            className={`${cormorant.className} mt-1 block text-right text-5xl font-bold italic text-brand sm:text-7xl md:text-8xl lg:text-[6.75rem]`}
          >
            Medicine
          </span>
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-snug text-black md:mt-12 md:text-4xl">
          Our commitment to sustainability extends beyond business to create
          lasting value for people, communities, and the planet.
        </p>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-black md:mt-10 md:text-xl">
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
