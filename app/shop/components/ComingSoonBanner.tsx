import { shopComingSoon } from "@/data/shop";

export default function ComingSoonBanner() {
  return (
    <section className="bg-linear-to-r from-brand to-brand-blue py-14 md:py-20">
      <div className="container">
        <h2 className="text-center text-[32px] leading-tight text-white md:text-5xl">
          {shopComingSoon.title}
        </h2>
      </div>
    </section>
  );
}
