import { loadStripe } from "@stripe/stripe-js";
export async function checkout({ lineItems }) {
  let stripePromise = null;
  // FUNCTION TO GET STRIPE INSTANCE
  const getStripe = (lineItems) => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
    }
    return stripePromise;
  };
  // FUNCTION TO HANDLE PAYMENT
  const stripe = await getStripe();
  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?session_id = {CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}
