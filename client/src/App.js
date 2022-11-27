import React, { useEffect ,useState } from "react";
import "@stripe/stripe-js";
import "./css/style.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import CheckOutSucess from "./components/Cart/CheckOutSucess";
import Support from "./pages/Support/Support";
import SignInSide from "./pages/sign-in/SignInSide";
import SignUp from "./pages/SignUp/SignUp";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import axios from "axios";
import { useDispatch } from "react-redux";
import Admin from "./pages/Admin/Admin";
import EditProduct from "./pages/Admin/Form/EditProduct";

export default function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch()
  const API_url = process.env.REACT_APP_API_URL;

  const getData = async () => {
    const { data } = await axios.get(`${API_url}`);
    setLoading(false)
    addAllProducts(data);
  };
  console.log(loading);
  const addAllProducts = (data) => {
    const action = { type: "ADD_ALL_PRODUCT", payload: data };
    dispatch(action);
  };
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/checkout-success" element={<CheckOutSucess />} />
          <Route path="/signIn" element={<SignInSide />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </SkeletonTheme>
    </div>
  );
}
