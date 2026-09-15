"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  formatPkr,
  getDiscountPercent,
  shopProducts,
} from "@/data/shop";
import { sibionicsProvinces, sibionicsRoutes } from "@/data/sibionics";
import MediaPlaceholder from "../../components/MediaPlaceholder";

const product = shopProducts[0];
const fieldClassName =
  "h-12 rounded-full border-black/15 bg-white px-4 text-sm placeholder:text-black/35";

type CheckoutFormProps = {
  qty: number;
};

export default function CheckoutForm({ qty }: CheckoutFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [addNote, setAddNote] = useState(false);
  const cities = useMemo(
    () => sibionicsProvinces.find((item) => item.name === province)?.cities ?? [],
    [province],
  );

  const compareAt = product.compareAtPrice ?? product.price;
  const discountEach =
    product.compareAtPrice != null
      ? product.compareAtPrice - product.price
      : 0;
  const discountPercent =
    product.compareAtPrice != null
      ? getDiscountPercent(product.price, product.compareAtPrice)
      : 0;
  const subtotal = compareAt * qty;
  const discountTotal = discountEach * qty;
  const total = product.price * qty;

  const handleProvinceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setProvince(event.target.value);
    setCity("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[32px] bg-white px-8 py-16 text-center md:rounded-[40px] md:px-16 md:py-24">
        <h2 className="text-3xl font-medium text-black md:text-4xl">
          Order placed
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-black/65">
          Thank you. Your order has been received. This is a dummy confirmation
          until Shopify checkout is connected.
        </p>
        <Button
          href={sibionicsRoutes.landing}
          size="pill"
          className="mt-8 rounded-full border-transparent bg-[#1DB8B0] px-10 text-white hover:bg-[#1DB8B0]/90"
        >
          Back to Sibionics
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
    >
      <div className="space-y-8 rounded-[32px] bg-white p-6 md:rounded-[40px] md:p-10">
        <fieldset>
          <legend className="text-2xl font-medium text-black">
            Contact Information
          </legend>
          <div className="mt-5 space-y-3">
            <Input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className={fieldClassName}
            />
            <Input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className={fieldClassName}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-2xl font-medium text-black">
            Shipping Address
          </legend>
          <div className="mt-5 space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <Input
                name="firstName"
                required
                placeholder="First Name"
                className={fieldClassName}
              />
              <Input
                name="lastName"
                required
                placeholder="Last Name"
                className={fieldClassName}
              />
            </div>
            <Input
              name="street"
              required
              placeholder="Street Address"
              className={fieldClassName}
            />
            <Input
              name="apartment"
              placeholder="Apartment, Suite, Unit, etc. (optional)"
              className={fieldClassName}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <select
                name="province"
                required
                value={province}
                onChange={handleProvinceChange}
                className={`${fieldClassName} w-full`}
              >
                <option value="">Select Province/Territory</option>
                {sibionicsProvinces.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select
                name="city"
                required
                disabled={!province}
                value={city}
                onChange={(event) => setCity(event.target.value)}
                className={`${fieldClassName} w-full`}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <Input
              name="postcode"
              required
              placeholder="Postcode/ZIP Code"
              className={fieldClassName}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-2xl font-medium text-black">
            Payment Options
          </legend>
          <label className="mt-5 flex items-center gap-3 rounded-full border border-black px-4 py-3 text-sm text-black">
            <input
              type="radio"
              name="payment"
              value="cod"
              defaultChecked
              className="size-4 accent-black"
            />
            Cash on delivery
          </label>
          <label className="mt-4 flex items-center gap-3 px-1 text-sm text-black/70">
            <input
              type="checkbox"
              checked={addNote}
              onChange={(event) => setAddNote(event.target.checked)}
              className="size-4 rounded border-black/30"
            />
            Add a note to your order
          </label>
          {addNote && (
            <textarea
              name="note"
              rows={3}
              placeholder="Order note"
              className="mt-3 w-full rounded-2xl border border-black/15 bg-white px-4 py-3 text-sm outline-none"
            />
          )}
          <p className="mt-5 text-sm text-black/55">
            By proceeding with your purchase you agree to our{" "}
            <Link href="#" className="text-[#1DB8B0] hover:underline">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-[#1DB8B0] hover:underline">
              Privacy Policy
            </Link>
          </p>
          <Button
            type="submit"
            size="pill"
            className="mt-6 h-12 w-full rounded-full border-transparent bg-[#1DB8B0] text-base font-medium text-white hover:bg-[#1DB8B0]/90"
          >
            Place Order
          </Button>
        </fieldset>
      </div>

      <aside className="rounded-[32px] bg-white p-6 md:rounded-[40px] md:p-8">
        <h2 className="text-xl font-medium text-black">Order Summary</h2>
        <div className="mt-6 flex items-start gap-4">
          <div className="relative size-20 shrink-0 overflow-hidden rounded-full bg-[#D4F3EF]">
            <MediaPlaceholder
              src="/images/shop/sibionics/product-1.webp"
              alt={product.imageAlt}
              placeholderClassName="bg-[#9ec9c0]"
              className="h-full w-full"
            />
            <span className="absolute top-0 right-0 flex size-5 items-center justify-center rounded-full bg-black text-[10px] text-white">
              {qty}
            </span>
          </div>
          <div>
            <p className="font-medium text-black">{product.name}</p>
            <p className="text-sm text-black/60">{product.description}</p>
            {product.compareAtPrice != null && (
              <p className="mt-1 text-sm text-black/35 line-through">
                {formatPkr(product.compareAtPrice)}
              </p>
            )}
            <p className="text-sm text-[#1DB8B0]">{formatPkr(product.price)}</p>
          </div>
        </div>

        <select
          name="coupon"
          defaultValue=""
          className={`${fieldClassName} mt-6 w-full`}
          aria-label="Apply coupon"
        >
          <option value="">Apply Coupon</option>
          <option value="dummy">Coming soon</option>
        </select>

        <div className="mt-8 space-y-2 text-sm">
          <div className="flex justify-between text-black/70">
            <span>Subtotal</span>
            <span>{formatPkr(subtotal)}</span>
          </div>
          {discountTotal > 0 && (
            <div className="flex justify-between">
              <span />
              <span className="text-[#1DB8B0]">
                -{formatPkr(discountTotal)} ({discountPercent}% off)
              </span>
            </div>
          )}
          <div className="flex justify-between pt-4 text-base font-medium text-black">
            <span>Total</span>
            <span>{formatPkr(total)}</span>
          </div>
        </div>
      </aside>
    </form>
  );
}
