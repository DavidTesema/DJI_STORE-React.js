import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

export default function PayButton({ cartItem }) {
  const user = useSelector((state) => state.shop.cart);
  console.log(user);
  const handleCheckout = () => {
    axios
      .post("http://localhost:8000/stripe/create-checkout-session", {
        cartItem,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.massage));
  };
  return (
    <div>
      <Button onClick={() => handleCheckout()} variant="outline-secondary">CHECKOUT SECURELY NOW</Button>
    </div>
  );
}
