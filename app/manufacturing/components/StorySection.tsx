import Image from "next/image";
import { manufacturingStory } from "@/data/manufacturing";

export default function StorySection() {
  const { image, imageAlt, paragraphs } = manufacturingStory;

  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="relative mx-4 flex min-h-[32rem] items-center justify-center overflow-hidden rounded-[50px] px-6 py-16 text-center sm:min-h-[40rem] sm:px-10 md:mx-8 md:min-h-[44rem] md:px-16 lg:mx-12 lg:min-h-[48rem]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 90vw"
          className="z-0 object-cover"
        />
        <div className="absolute inset-0 z-1 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-xl leading-[1.35] font-medium text-white md:text-[28px] lg:text-[32px]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
