import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default function PayButton({ cartItem }) {
  const handleCheckout = () => {
    axios
<<<<<<< HEAD
      .post(`http://localhost:8000/stripe/create-checkout-session`, {
=======
      .post("http://localhost:8000/stripe/create-checkout-session", {
>>>>>>> 0df94f99d37b55ce6cc1b78ea8f691990274ded0
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
