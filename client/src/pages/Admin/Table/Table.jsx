import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ProductsTable({ array }) {
  const navigate = useNavigate()
  const deleteProduct = async (id) => {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`);
    return res;
  };
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
            <tbody key={index}>
              <tr>
                <td>
                  <img height={"60px"} src={item.img} alt="drone" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}$</td>
                <td>
                  <Button onClick={() => navigate(`/edit-product/${item._id}`)}  eventKey="Edit" variant="success">
                    Edit
                  </Button>
                </td>
                <td>
                  <Button onClick={() => deleteProduct(item._id)} variant="danger">
                    X
                  </Button>
                </td>
              </tr>
            </tbody>
          </>
        );
      })}
    </Table>
  );
}

export default ProductsTable;
