import React from "react";
import Products from "../HomePage/MainProducts/Products";
import Footer from "../../features/Footer/Footer";
import CarouselProduct from "../../features/Header/CarouselProduct";
export default function HomePage() {
  return (
    <div>
      <CarouselProduct />
      <Products />
      <Footer />
    </div>
  );
}
