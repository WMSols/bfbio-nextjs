import { Button } from "@/components/ui/button";

export default function OurStorySection() {
  return (
    <section className="bg-[#F7F7F7] py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl text-black md:text-6xl">Our Story</h2>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-black md:mt-12 md:text-[22px] md:leading-relaxed">
            <p>
              In 2002, Ferozsons Laboratories Limited and Bagó formed a
              commercial partnership to introduce the Bagó portfolio of branded
              generics in oncology and hepatology to Pakistan. Within just two
              years, the partnership achieved a leadership position, ranking
              among the top three companies in both therapeutic areas.
            </p>
            <p>
              Building on this success, the two companies agreed in principle to
              establish a joint venture in 2004. This vision became a reality in
              2006 with the formation of BF Biosciences Limited—Pakistan&apos;s
              first biotech formulation company.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 md:mt-16">
            <Button
              href="/about/company-overview"
              variant="outline"
              size="pill"
              className="rounded-full border-brand bg-transparent text-brand hover:bg-brand/5 hover:text-brand"
            >
              Company Overview
            </Button>
            <Button
              href="/about/history"
              variant="outline"
              size="pill"
              className="rounded-full border-brand bg-transparent text-brand hover:bg-brand/5 hover:text-brand"
            >
              Our History
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
