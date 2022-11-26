import Table from "./Table/Table";
import Tabbed from "./Tabbed/Tabbed";
import React from "react";
import { useSelector } from "react-redux";

export default function Admin() {
  const Selector = useSelector((state) => state);
  const product = Selector.shop.products;
  return (
    <div>
      <div className="container pt-5">
        <Tabbed/>
      </div>
    </div>
  );
}
