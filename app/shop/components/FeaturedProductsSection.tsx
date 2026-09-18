"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  formatPkr,
  getDiscountPercent,
  getSortedProducts,
  shopHighlight,
  shopProducts,
  shopSortOptions,
  type ShopProduct,
  type ShopSortId,
} from "@/data/shop";
import { cn } from "@/lib/utils";
import AnimateIn, { AnimateInItem } from "@/components/shared/AnimateIn";

function HighlightedTitle({
  title,
  highlight,
}: {
  title: string;
  highlight?: string;
}) {
  if (!highlight || !title.includes(highlight)) {
    return title;
  }

  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      <span className="text-[#1DB8B0]">{highlight}</span>
      {after}
    </>
  );
}

function ProductCard({ product }: { product: ShopProduct }) {
  const discount =
    product.compareAtPrice != null
      ? getDiscountPercent(product.price, product.compareAtPrice)
      : 0;

  return (
    <Link href={product.href} className="group flex flex-col">
      <div className="relative aspect-5/4 overflow-hidden rounded-[28px] bg-muted">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover object-left transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.brand && (
          <span className="absolute top-4 left-4 text-xs font-medium tracking-[0.12em] text-white">
            {product.brand}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-xl font-bold tracking-tight text-black md:text-2xl">
        {product.name}
      </h3>
      <p className="mt-1 max-w-56 text-base leading-snug text-black">
        {product.description}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className="text-black">{formatPkr(product.price)}</span>
        {product.compareAtPrice != null && product.compareAtPrice > product.price && (
          <span className="text-black/40 line-through">
            {formatPkr(product.compareAtPrice)}
          </span>
        )}
        {discount > 0 && (
          <span className="text-[#1DB8B0]">{discount}% off</span>
        )}
      </div>
    </Link>
  );
}

export default function FeaturedProductsSection() {
  const [sortId, setSortId] = useState<ShopSortId>("featured");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const current =
    shopSortOptions.find((option) => option.id === sortId) ?? shopSortOptions[0];
  const products = getSortedProducts(shopProducts, sortId);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  return (
    <section className="bg-[#F7F7F7] py-16 md:py-24">
      <div className="container">
        <div className="mb-10 flex items-center justify-between gap-4 md:mb-14">
          <h2 className="text-[32px] leading-tight text-black md:text-5xl">
            Featured Products
          </h2>

          <div ref={dropdownRef} className="relative shrink-0">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="inline-flex items-center gap-3 rounded-full bg-[#E6E6E6] px-5 py-2.5 text-sm text-black"
            >
              {current.label}
              <ChevronDown
                className={cn("size-4 transition-transform", open && "rotate-180")}
              />
            </button>

            {open && (
              <ul
                role="listbox"
                className="absolute right-0 z-10 mt-2 min-w-full overflow-hidden rounded-2xl bg-white py-1 shadow-lg"
              >
                {shopSortOptions.map((option) => (
                  <li key={option.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={option.id === sortId}
                      onClick={() => {
                        setSortId(option.id);
                        setOpen(false);
                      }}
                      className={cn(
                        "w-full px-4 py-2 text-left text-sm whitespace-nowrap hover:bg-[#F7F7F7]",
                        option.id === sortId && "font-medium",
                      )}
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <Link
          href={shopHighlight.href}
          className="flex flex-col items-center gap-8 rounded-[40px] bg-[#D4F3EF] p-5 sm:p-8 md:flex-row md:gap-12 md:rounded-[48px] md:p-10 lg:gap-16"
        >
          <div className="relative aspect-5/4 w-full overflow-hidden rounded-[28px] md:w-[42%] md:max-w-md">
            <Image
              src={shopHighlight.image}
              alt={shopHighlight.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>

          <div className="w-full flex-1">
            <h3 className="text-[28px] leading-tight text-black md:text-[36px] lg:text-[40px]">
              <HighlightedTitle
                title={shopHighlight.title}
                highlight={shopHighlight.highlight}
              />
            </h3>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-black md:text-xl">
              {shopHighlight.description}
            </p>
          </div>
        </Link>

        <AnimateIn stagger className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-12">
          {products.map((product) => (
            <AnimateInItem key={product.id} className="h-full">
              <ProductCard product={product} />
            </AnimateInItem>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
