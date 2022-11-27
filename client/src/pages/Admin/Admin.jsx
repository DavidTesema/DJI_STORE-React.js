import Table from "./Table/Table";
import Tabbed from "./Tabbed/Tabbed";
import React from "react";
import { useNavigate } from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function Admin() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container pt-5">
        <div>
          <h1>Admin</h1>
          <div>
            <h6 onClick={() => navigate("/")}> Back To Store <StorefrontIcon/></h6>
          </div>
        </div>
        <Tabbed />
      </div>
    </div>
  );
}
