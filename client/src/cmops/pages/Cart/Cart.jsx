import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Button from "react-bootstrap/Button";
import Footer from "../../features/Footer/Footer";
import { useState, useEffect } from "react";
import PayButton from "./PayButton";


export default function Cart() {
  const selector = useSelector((state) => state);
  const cart = selector.shop.cart;
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    let price = 0;

    cart.forEach(item =>{
      const total = price += item.qty * item.price
      setTotalData(total) 
    })

  }, [cart,totalData,setTotalData]);
  return (
    <div className="cart-container ">
      <div className="d-md-flex col-12 pt-2">
        <div className="left-container col-12 col-md-5  container pt-2">
          <h2 className="my pt-5">My Shopping Cart</h2>
          {cart.map((item, index) => {
            console.log(item.qty);
            return (
              <div>
                <div className="container">
                  <CartItem key={index} itemData={item} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="right-container col-12 col-md-5 pt-5 py-3 text-center text-md-start ">
          <h1>Summary</h1>
          <div className="d-flex align-content-center justify-content-center justify-content-md-start">
            <h5>Subtotal</h5>
            <h5 className="ms-4">{totalData}$ </h5>
          </div>
          <PayButton cartItem={cart}/>
          <p>Shipping:Free</p>
          <h6>We Accept</h6>
          <div>
            <img
              height={"45px"}
              src="./images/Visa-electronic.png"
              alt="Card"
            />
            <img height={"45px"} src="./images/Visa.png" alt="Card" />
            <img height={"50px"} src="./images/mastercard.png" alt="Card" />
            <img height={"45px"} src="./images/paypal.png" alt="Card" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
