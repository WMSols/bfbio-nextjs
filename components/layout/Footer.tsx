"use client";

// import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// Brand icons are not exported by the installed lucide-react version yet
// import { Facebook, Instagram, Linkedin } from "lucide-react";
import { footerLinks, legalLinks, socialLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
// import {
//   fetchWebsiteUpdateDate,
//   WEBSITE_UPDATE_DATE_FALLBACK,
// } from "@/lib/website-update-date";

const WEBSITE_UPDATE_DATE_FALLBACK = "September 2026";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z" />
    </svg>
  );
}

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
} as const;

function footerBackgroundForPath(pathname: string) {
  if (pathname === "/shop/sibionics-cgm/checkout") return "bg-brand";
  if (
    pathname === "/shop/sibionics-cgm" ||
    pathname.startsWith("/shop/sibionics-cgm/product")
  ) {
    return "bg-black";
  }
  return "bg-brand";
}

const Footer = ({
  dark = false,
  backgroundClassName,
}: {
  dark?: boolean;
  backgroundClassName?: string;
}) => {
  const pathname = usePathname();
  const displayDate = WEBSITE_UPDATE_DATE_FALLBACK;
  const resolvedBackground =
    backgroundClassName ??
    (dark ? "bg-black" : footerBackgroundForPath(pathname));
  // const [displayDate, setDisplayDate] = useState(WEBSITE_UPDATE_DATE_FALLBACK);
  // useEffect(() => {
  //   fetchWebsiteUpdateDate().then(setDisplayDate);
  // }, []);

  return (
    <footer className={cn("reveal-section text-white bg-[#1f011d]", )}>
      <div className="container pt-16 ">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-6 lg:gap-x-12 lg:gap-y-10">
          {/* Logo column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/nav-logo.webp"
                alt="BF Biosciences"
                width={200}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">
            BF Biosciences develops and manufactures advanced biopharmaceuticals, expanding access to innovative therapies while strengthening Pakistan's biotechnology capabilities.
            </p>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3 opacity-80">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:border-white/50 hover:bg-white/10 transition-colors"
                    >
                      <Icon className="h-4 w-4 fill-white text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-14  gap-y-10 lg:contents">
            {footerLinks.map((column) => (
              <div key={column.title}>
                {column.title.trim() ? (
                  <h3 className="text-sm font-semibold mb-4">{column.title}</h3>
                ) : (
                  <div className="text-sm font-semibold mb-4 invisible" aria-hidden>
                    &nbsp;
                  </div>
                )}
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm opacity-70 hover:opacity-100 transition-opacity"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  md:items-start border-t border-white/10 mt-12 pt-4">
          {/* Left Column: Copyright */}
          <div className="justify-self-start">
            <p className="text-xs opacity-50">
              © {new Date().getFullYear()} BF Biosciences. All
              rights reserved.
            </p>
           
            <p className="text-xs  mt-2">“In case your complaint has not been properly redressed by us, you may lodge your 
complaint with Securities and Exchange Commission of Pakistan (the “SECP”). 
However, please note that SECP will entertain only those complaints which were at first 
directly requested to be redressed by the company and the company has failed to 
redress the same. Further, the complaints that are not relevant to SECP’s regulatory 
domain/competence shall not be entertained by the SECP.</p>

            <div className="mt-6 pt-4 border-t border-white/15 flex items-center gap-3">
              {legalLinks.map((link, index) => (
                <span key={link.href} className="flex items-center gap-3">
                  {index > 0 && (
                    <span className="text-white/20" aria-hidden>
                      |
                    </span>
                  )}
                  <Link
                    href={link.href}
                    className="text-xs font-medium text-white/70 hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          {/* Center Column: SCEP and Jama-Punji logos */}
          <div className="flex gap-2 h-auto justify-self-center xs:px-0 px-2 mt-2 md:mt-0">
            <div className="h-8 xs:w-40 w-32 rounded-sm overflow-hidden">
              <a
                href="https://sdms.secp.gov.pk"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="h-full w-full aspect-auto"
                  alt="secp logo"
                  src={"/images/secp-logo.webp"}
                />
              </a>
            </div>
            <div className="h-8 xs:w-40 w-32  rounded-sm overflow-hidden">
              <a href="https://jamapunji.pk" target="_blank" rel="noreferrer">
                <img
                  className="h-full w-full aspect-auto"
                  alt="jamapunji logo"
                  src={"/images/jama-punji-logo.webp"}
                />
              </a>
            </div>
          </div>

          {/* Right Column: Contact info and Links */}
          <div className="flex flex-col gap-3 justify-self-end text-left md:text-right w-full md:w-auto">
            <p className="text-sm opacity-70 leading-relaxed">
              For any inquiries, concerns, or complaints, please contact:
              <br />
              5 KM Sundar Raiwind Road,
              Raiwind, Lahore, Pakistan
              <br />
              Email:{" "}
              <a
                href="mailto:info@bfbio.com"
                className="hover:text-white transition-opacity"
              >
                info@bfbio.com
              </a>
            </p>
          </div>
        </div>
        <div className="py-6 text-sm font-light border-t border-white/10 mt-4">
          <p className="text-center">
            Designed & Developed by{" "}
            <a
              className="text-[#38ceec] font-semibold"
              href="https://www.wmsols.com/"
              target="_blank"
            >
              WMsols
            </a>
          </p>
          {/* Dynamic Date Rendered Here */}
          <p className="text-center text-xs mt-2 ">
            Last date website was updated: {displayDate}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;