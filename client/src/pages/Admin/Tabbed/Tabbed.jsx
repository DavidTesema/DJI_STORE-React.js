import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "../Table/Table";
import { useSelector } from "react-redux";
import AddProduct from "../Form/AddProduct";

function UncontrolledExample() {
  const Selector = useSelector((state) => state);
  const product = Selector.shop.products;
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Table array={product} />
      </Tab>
      <Tab eventKey="profile" title="Add product">
        <AddProduct buttonName={"Add Product"} />
      </Tab>
      <Tab eventKey="Edit" title="Edit">
        <AddProduct buttonName={"Edit Product"} />
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;
