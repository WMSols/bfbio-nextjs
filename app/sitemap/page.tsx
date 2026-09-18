import Link from "next/link";
import { sitemapPage } from "@/data/sitemap";

export const metadata = {
  title: "Site Map",
  description:
    "Find your way around the BF Biosciences website.",
};

export default function SitemapPage() {
  return (
    <section className="bg-[#F7F7F7] pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container max-w-[75rem]">
        <h1 className="mb-12 md:mb-16">
          <Link
            href={sitemapPage.home.href}
            className="inline-block text-4xl md:text-5xl lg:text-6xl font-semibold text-brand border-b-2 border-brand pb-1 hover:opacity-80"
          >
            {sitemapPage.home.label}
          </Link>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-24">
          {sitemapPage.groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-2xl md:text-[2rem] font-bold text-black mb-5">
                {group.title}
              </h2>
              <ul className="list-disc pl-5 space-y-6 text-brand">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-brand underline underline-offset-4 hover:opacity-80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
