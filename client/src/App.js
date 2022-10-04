import React from "react";
import HomePage from "./cmops/HomePage/HomePage";
import Button from "react-bootstrap/Button";
import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./cmops/ProductDetails/ProductDetails";
import CarouselProduct from "./cmops/Header/CarouselProduct";
export default function App() {
  return (
    <div>
      {/* <CarouselProduct/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
