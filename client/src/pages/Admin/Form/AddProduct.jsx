import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    price: "",
    img: "",
    description: "",
  });
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sandData = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}`, data);
    return res;
  };


  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label> Name</Form.Label>
        <Form.Control
          onChange={handleInput}
          type="text"
          name="name"
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control
          onChange={handleInput}
          type="text"
          name="price"
          placeholder="Product Price"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Img Product </Form.Label>
        <Form.Control
          onChange={handleInput}
          type="text"
          name="img"
          placeholder="Enter URL"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>description</Form.Label>
        <Form.Control
          onChange={handleInput}
          type="text"
          name="description"
          placeholder="Description"
        />
      </Form.Group>
      <Button
        onClick={() => {
          sandData() 
          navigate("/admin")
        }}
        variant="primary"
      >
        Add product
      </Button>
    </Form>
  );
}

export default AddProduct;
