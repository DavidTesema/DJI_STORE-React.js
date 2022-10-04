import React from "react";
import HomePage from "./cmops/HomePage/HomePage";
import Button from "react-bootstrap/Button";
import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./cmops/ProductDetails/ProductDetails";
import CarouselProduct from "./cmops/Header/CarouselProduct";
import { Badge,MailIcn } from "@mui/material";
import {IconButton} from "@mui/material"
export default function App() {
  return (
    <div>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      {/* <CarouselProduct/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
