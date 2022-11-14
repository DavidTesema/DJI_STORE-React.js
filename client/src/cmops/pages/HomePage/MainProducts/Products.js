import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const Selector = useSelector((state) => state);
  const product = Selector.shop.products;
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const API_url = process.env.REACT_APP_API_URL;
  const getData = async () => {
    const { data } = await axios.get(`${API_url}`);
    setData(data);
    addAllProducts();
  };
  const addAllProducts = () => {
    const action = { type: "ADD_ALL_PRODUCT", payload: data };
    dispatch(action);
  };

  const scrollEvent = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    getData();
  }, [data.length]);
  return (
    <div className="card-container d-flex flex-wrap justify-content-center">
      {product.map((product, index) => {
        return (
          <Card
            onClick={() =>{
               Navigate(`/${product._id}`)
               scrollEvent()
              }}
            className="col-md-3 m-4"
            key={index}
            sx={{ maxWidth: 345 }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={product.images[0].img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography
                  className="d-none d-lg-block"
                  variant="body2"
                  color="text.secondary"
                >
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Buy now
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
