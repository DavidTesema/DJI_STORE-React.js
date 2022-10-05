import React from "react";
import HomePage from "./cmops/pages/HomePage/HomePage";
import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./cmops/pages/ProductDetails/ProductDetails";
import Cart from "./cmops/pages/Cart/Cart";
import Nav from "./cmops/features/Nav/Nav";
export default function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
