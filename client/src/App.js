import React from "react";
import "@stripe/stripe-js";
import HomePage from "./cmops/pages/HomePage/HomePage";
import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./cmops/pages/ProductDetails/ProductDetails";
import Nav from "./cmops/features/Nav/Nav";
import CheckOutSucess from "./cmops/pages/Cart/CheckOutSucess";
export default function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/checkout-success" element={<CheckOutSucess/>} />
      </Routes>
    </div>
  );
}
