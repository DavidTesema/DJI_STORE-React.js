import React from "react";
import { useSelector } from "react-redux";
import Nav from "../../features/Nav/Nav";
import CartItem from "./CartItem";

export default function Cart() {
  const selector = useSelector((state) => state);
  const cart = selector.shop.cart;
  console.log(cart);
  return (
    <div className="cart-container">
      <Nav />
      <div className="left-container container pt-2">
      <h2 className="my pt-5">My Shopping Cart</h2>
      {cart.map((item) => {
        return (
          <div>
            <div className="container">
              <CartItem itemData={item} />
            </div>
          </div>
        );
      })}
      </div>
      
    </div>
  );
}
