import CheckoutForm from "./components/CheckoutForm";

export const metadata = {
  title: "Checkout",
  description: "Complete your SIBIONICS GS1 CGM order.",
};

type SearchParamsRecord = Record<string, string | string[] | undefined>;

interface CheckoutPageProps {
  searchParams: Promise<SearchParamsRecord>;
}

function parseQty(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value[0] : value;
  const parsed = Number.parseInt(raw ?? "1", 10);
  if (!Number.isFinite(parsed) || parsed < 1) return 1;
  return parsed;
}

export default async function SibionicsCheckoutPage({
  searchParams,
}: CheckoutPageProps) {
  const params = await searchParams;
  const qty = parseQty(params.qty);

  return (
    <div className="bg-[#F7F7F7] pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <h1 className="text-4xl font-medium text-black md:text-5xl">Checkout</h1>
        <div className="mt-10">
          <CheckoutForm qty={qty} />
        </div>
      </div>
    </div>
  );
}
