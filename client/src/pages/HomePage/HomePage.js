import React from "react";
import Products from "../HomePage/MainProducts/Products";
import Footer from "../../components/Footer/Footer";
import CarouselProduct from "../../components/Header/CarouselProduct";
import Drone3DAnimated from "./Drone3D/Drone3DAnimated";
import Nav from "../../components/Nav/Nav";
export default function HomePage() {
  return (
    <div>
      <Nav/>
      <CarouselProduct />
      <Products />
      <Drone3DAnimated/>
      <Footer />
    </div>
  );
}
