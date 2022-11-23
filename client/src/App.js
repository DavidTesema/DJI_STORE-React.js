import React from "react";
import "@stripe/stripe-js";
import "./css/style.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Nav from "./components/Nav/Nav";
import CheckOutSucess from "./pages/Cart/CheckOutSucess";
import Support from "./pages/Support/Support";
import SignInSide from "./pages/sign-in/SignInSide";
import SignUp from "./pages/SignUp/SignUp";
export default function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/checkout-success" element={<CheckOutSucess/>} />
        <Route path="/signIn" element={<SignInSide/>} />
        <Route path="/signUp" element={<SignUp/>} />
      </Routes>
      
    </div>
  );
}
