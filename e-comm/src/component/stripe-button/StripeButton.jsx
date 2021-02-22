import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51INc4sA2t9Wic0J7ZwxCjdww4FueHqN922V5QFtdcwjoxbCowQVipD6gVMz1qsaHENRyVrAyLqkYFtBhS32pQ8Mc00XcT7EQtW";

  const onToken = (token) => {
    console.log(token);
    alert("payment succesfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
