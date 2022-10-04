import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

export default function ProductCarousel(props) {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data: product } = await axios.get(
      `http://localhost:8000/${props.userID}`
    );
    const { images } = product;
    setData(images);
  };
  useEffect(() => {
    getData();
  }, []);
  const displayData = data?.map((item, index) => {
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
