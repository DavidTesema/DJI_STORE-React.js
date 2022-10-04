import React from "react";
import Nav from "../Nav/Nav";
import Products from "./MainProducts/Products";
import Footer from "../Footer/Footer";
import CarouselProduct from "../Header/CarouselProduct";

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
