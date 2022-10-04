import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCarousel from "./ProductCarousel";
import { connect, Connect, useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/shopping/ShoppingAction";
export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [color, setColor] = useState(false);
  const Selector = useSelector((state) => state);
  const allProducts = Selector.shop.products;
  const productData = allProducts?.find((item) => item._id === id);
  const productDetails = (
    <div className={color != productData.backgroundColor ? "bg-white" : "bg-black"}>
      <video className="first-video" src={productData.video1} autoPlay muted />
      <div className="content d-none d-xxl-flex mt-5 ">
        <p>{productData.name}</p>
        <h5>Born to Fly</h5>
        <button type="button" class="btn btn-outline-primary fw-bold">
          Buy Now
        </button>
      </div>
      <section className="main-product">
        <div className="d-flex align-items-center w-75 mt-5">
          <img width={"75%"} src={productData.picture1} />
          <h4
            className={
              color != productData.backgroundColor
                ? "text-black px-5"
                : "text-white px-5"
            }
          >
            {productData.title1}
          </h4>
        </div>
        {productData.video2 ? (
          <video src={productData.video2} autoPlay muted loop width={"100%"} />
        ) : (
          ""
        )}
        <div className="d-flex align-items-center justify-content-center mt-5 flex-row-reverse">
          <img width={"70%"} src={productData.picture2} />
          <h4
            className={
              color != productData.backgroundColor
                ? "text-black px-5"
                : "text-white px-5"
            }
          >
            {productData.title2}
          </h4>
        </div>
        {productData.video3 ? (
          <video src={productData.video3} autoPlay muted loop width={"100%"} />
        ) : (
          ""
        )}
        <img width={"100%"} src={productData.picture3} />
        {productData.video4 ? (
          <video src={productData.video4} autoPlay muted loop width={"100%"} />
        ) : (
          ""
        )}
        <img width={"100%"} src={productData.picture4} />
        <img width={"100%"} src={productData.picture5} />
      </section>
    </div>
  );
  const addProduct = () => {
    const action = { type: "ADD_TO_CART", payload: productData._id };
    dispatch(action)
  };
  const textContainer = (
    <div className="text-center">
      <h2 className="text-white">{productData.name}</h2>
      <p className="text-white">{productData.description}</p>
      <h5 className="text-white">USD {productData.price}$</h5>
      <button
        onClick={() => addProduct()}
        className="btn btn btn-primary"
        type="submit"
      >
        Buy
      </button>
    </div>
  );
  return (
    <div>
      <Nav />
      {productDetails}
      <div className="d-flex justify-content-around align-items-center bg-black py-5">
        <div style={{ width: "50%" }}>
          <ProductCarousel userID={id} />
        </div>
        <div className="d-flex align-items-around " style={{ width: "30%" }}>
          {textContainer}
        </div>
      </div>
      <Footer />
    </div>
  );
}

// const mapDispatch = (dispatch) => {
//   return {
//     addToCart: (id) => dispatch(addToCart(id)),
//   };
// };
// export default connect(null, mapDispatch)(ProductDetails);
