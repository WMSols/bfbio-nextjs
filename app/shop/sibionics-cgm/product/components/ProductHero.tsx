"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  formatPkr,
  getDiscountPercent,
  shopProducts,
} from "@/data/shop";
import {
  sibionicsProduct,
  sibionicsRoutes,
} from "@/data/sibionics";
import { cn } from "@/lib/utils";
import MediaPlaceholder from "../../components/MediaPlaceholder";

const product = shopProducts[0];

export default function ProductHero() {
  const [slide, setSlide] = useState(0);
  const [qty, setQty] = useState(1);
  const slides = sibionicsProduct.gallery;
  const current = slides[slide] ?? slides[0];
  const discount =
    product.compareAtPrice != null
      ? getDiscountPercent(product.price, product.compareAtPrice)
      : 0;
  const checkoutHref = `${sibionicsRoutes.checkout}?qty=${qty}`;

  const goTo = (next: number) => {
    const total = slides.length;
    setSlide(((next % total) + total) % total);
  };

  return (
    <section className="bg-white pt-28 pb-12 md:pt-32 md:pb-16">
      <div className="container">
        <h1 className="text-center text-3xl font-medium text-black md:text-5xl">
          {sibionicsProduct.title}
        </h1>

        <div className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-2 md:gap-16">
          <div className="overflow-hidden rounded-[32px] bg-[#D4F3EF] p-5 md:rounded-[40px] md:p-8">
            <MediaPlaceholder
              src={current.src}
              alt={current.alt}
              placeholderClassName={current.placeholderClassName}
              className="aspect-4/3 w-full rounded-[24px]"
            />

            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-1 flex-1 overflow-hidden rounded-full bg-black/10">
                {slides.map((item, index) => (
                  <div
                    key={item.src}
                    className={cn(
                      "h-full flex-1 transition-colors",
                      index === slide ? "bg-black/45" : "bg-transparent",
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => goTo(slide - 1)}
                  className="flex size-10 items-center justify-center rounded-full border border-black/15 bg-white text-black hover:bg-black/5"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => goTo(slide + 1)}
                  className="flex size-10 items-center justify-center rounded-full border border-black/15 bg-white text-black hover:bg-black/5"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium tracking-tight text-black md:text-3xl">
              {product.name}
            </h2>
            <p className="mt-1 text-base text-black/70 md:text-lg">
              {product.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="text-black">{formatPkr(product.price)}</span>
              {product.compareAtPrice != null &&
                product.compareAtPrice > product.price && (
                  <span className="text-black/40 line-through">
                    {formatPkr(product.compareAtPrice)}
                  </span>
                )}
              {discount > 0 && (
                <span className="text-[#1DB8B0]">{discount}% off</span>
              )}
            </div>

            <p className="mt-8 text-xs font-medium tracking-[0.16em] text-black/55 uppercase">
              Quantity
            </p>
            <div className="mt-3 inline-flex items-center gap-5 text-lg text-black">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((value) => Math.max(1, value - 1))}
                className="px-1 hover:opacity-60"
              >
                –
              </button>
              <span className="min-w-4 text-center">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((value) => value + 1)}
                className="px-1 hover:opacity-60"
              >
                +
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={checkoutHref}
                variant="outline"
                size="pill"
                className="rounded-full border-black bg-white px-8 text-black hover:bg-black/5 hover:text-black"
              >
                {sibionicsProduct.addToCartLabel}
              </Button>
              <Button
                href={checkoutHref}
                size="pill"
                className="rounded-full border-transparent bg-black px-8 text-sm font-medium tracking-[0.12em] text-white hover:bg-black/85"
              >
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
