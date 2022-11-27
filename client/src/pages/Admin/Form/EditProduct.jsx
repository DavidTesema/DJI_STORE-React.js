import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [data, setaDta] = useState({
    name: "",
    price: "",
    img: "",
    description: "",
  });

  const handleInput = (e) => {
    setaDta({ ...data, [e.target.name]: e.target.value });
  };
  const UpdateData = async () => {
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/${id}`, data);
    navigate("/admin")
    return res;
  };


  return (
    <Form className="container mt-5">
        <h1>Edit Product</h1>
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
      <Button onClick={() => UpdateData()} variant="primary">
        Add product
      </Button>
    </Form>
  );
}

export default UpdateProduct;
