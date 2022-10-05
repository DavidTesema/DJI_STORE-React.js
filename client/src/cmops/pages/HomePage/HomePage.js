import React from "react";
import Nav from "../../features/Nav/Nav";
import Products from "../HomePage/MainProducts/Products";
import Footer from "../../features/Footer/Footer";
import CarouselProduct from "../../features/Header/CarouselProduct";
export default function HomePage() {
  return (
    <div>
      <Nav />
      <CarouselProduct />
      <Products />
      <Footer />
    </div>
  );
}
