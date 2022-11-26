import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddProduct({buttonName}) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>	Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Product Price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Img Product </Form.Label>
        <Form.Control type="text" placeholder="Enter URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="description" />
      </Form.Group>
      <Button variant="primary">{buttonName}</Button>
    </Form>
  );
}

export default AddProduct;