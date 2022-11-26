import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
function ProductsTable({ array }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      {array.map((item, index) => {
        return (
          <>
            <tbody>
              <tr>
                <td><img height={"60px"} src={item.images[0].img} alt="drone" /></td>
                <td>{item.name}</td>
                <td>{item.price}$</td>
                <td><Button eventKey="Edit" variant="success">Edit</Button></td>
                <td><Button variant="danger">X</Button></td>
              </tr>
            </tbody>
          </>
        );
      })}
    </Table>
  );
}

export default ProductsTable;
