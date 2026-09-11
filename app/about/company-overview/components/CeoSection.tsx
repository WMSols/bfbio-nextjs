import Image from "next/image";

export default function CeoSection() {
  return (
    <section>
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-[minmax(0,280px)_1fr] md:gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <div className="mx-auto w-full max-w-70 md:mx-0 md:max-w-none">
            <Image
              src="/images/ceo-message/ceo.png"
              alt="Mohammad Farhan, CEO of BF Biosciences Limited"
              width={500}
              height={650}
              className="h-auto w-full"
              sizes="(max-width: 768px) 280px, 320px"
            />
          </div>

          <div className="flex flex-col justify-between gap-10 md:gap-16">
            <blockquote className="text-2xl font-medium leading-snug text-brand-blue sm:text-3xl lg:text-[2rem] lg:leading-snug">
              “Through strategic partnerships and continued innovation, we aim
              to bring relevant healthcare solutions closer to patients and
              healthcare professionals in Pakistan.”
            </blockquote>

            <div>
              <p className="text-base font-medium text-black md:text-lg">
                Mohammad Farhan
              </p>
              <p className="mt-0.5 text-sm font-light text-muted-foreground">
                CEO BF Biosciences Limited
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
