import Image from "next/image";

export default function TrustSection() {
  return (
    <section className="relative flex h-[600px]  sm:h-[1206px] items-end justify-center overflow-hidden px-6 py-16 md:px-16 md:py-24">
      <Image
        src="/images/global-presence/trust.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute hidden sm:block top-4 left-4 z-10 size-[min(90vw,350px)]">
        <Image
          src="/images/global-presence/people-trust-us.webp"
          alt="People trust us"
          width={350}
          height={350}
          className="size-full object-contain object-top-left"
        />
      </div>
      <p className="relative z-10 max-w-3xl text-center text-lg font-light text-white md:text-2xl md:leading-normal">
        Delivering trusted, high-quality pharmaceutical<br className="hidden sm:block" /> products to over 30
        countries
      </p>
    </section>
  );
}
