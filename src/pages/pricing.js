import { MainBenefits } from "src/pricing/components/Benefits";
import Plans from "src/pricing/components/Plans";
import { stripe } from "src/pricing/utils/stripe";

export default function PricingPage({ plans }) {
  return (
    <div className="grid-halves h-screen-navbar">
      <Plans plans={plans} />
      <MainBenefits />
    </div>
  );
}

export async function getStaticProps() {
  const { data: prices } = await stripe.prices.list({ limit: 2 });
  const plans = [];

  for (const price of prices) {
    const product = await stripe.products.retrieve(price.product);
    plans.push({
      name: product.name,
      id: price.id,
      price: price.unit_amount / 100,
      interval: price.recurring.interval,
    });
  }
  return {
    props: {
      plans,
    },
  };
}
