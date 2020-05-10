import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_RcF4nqlSuZH93uub4ZXpqArL00ZPDLeqgu";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="JB Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
    />
  );
};

export default StripeCheckoutButton;
