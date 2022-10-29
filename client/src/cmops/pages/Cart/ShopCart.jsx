import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import PayButton from "./PayButton";

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selector = useSelector((state) => state);
  const cart = selector.shop.cart;
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      const total = (price += item.qty * item.price);
      setTotalData(total);
    });
  }, [cart, totalData, setTotalData]);
  return (
    <>
      <div onClick={handleShow}>
        
      <i class="fa-solid fa-cart-shopping"></i>
      </div>

      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              {cart.map((item, index) => {
                return (
                  <div>
                    <div className="container py-2">
                      <CartItem key={index} itemData={item} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex  justify-content-around border-bottom border-top py-2">
                <h5>Subtotal</h5>
                <h5 className="ms-4">{totalData}$ </h5>
              </div>
              <div className="d-flex justify-content-center pt-3">
                <PayButton cartItem={cart} />
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
