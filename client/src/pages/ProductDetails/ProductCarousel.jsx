import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";

export default function ProductCarousel(props) {
  const selector = useSelector(state => state)
  const allProducts = selector.shop.products;
  const productData = allProducts?.find((item) => item._id === props.userID);
  const images = productData?.images
  
  const displayData = images?.map((item, index) => {
    return (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.img} alt="First slide" />
        </Carousel.Item>
    );
  });
  return (
    <div>
      <Carousel>
      {displayData}
      </Carousel>
    </div>
  );
}
