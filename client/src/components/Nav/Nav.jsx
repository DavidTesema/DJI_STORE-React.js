import AvatarAccount from "../Nav/AvatarMui/Avater";
import { Avatar, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShopCart from "../../components/Cart/ShopCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Nav() {
  const [color, setColor] = useState(false);
  const selector = useSelector((state) => state);
  const navigate = useNavigate();

  const changeColor = () => {
    if (window.screenY >= 150) {
      setColor(false);
    } else {
      setColor(true);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "nav-black" : "nav-none"}>
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              onClick={() => navigate("/")}
              height={"30px"}
              src="./images/DJI-LOGO.png"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  onClick={() => navigate("/admin")}
                  className="nav-link active text-white"
                  aria-current="page"
                  >
                  {localStorage.getItem("ID")== process.env.REACT_APP_ADMIN_UID?"Admin":""}
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => navigate("/")}
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#drone"
                >
                  Drone
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => navigate("/support")}
                  className="nav-link text-white"
                  href="#"
                >
                  Support
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Explore
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      SkyPixel
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      DJI Forum
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Newsroom
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Buying
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Guides
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Events
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <ShopCart />
            <div
              className="px-2"
              onClick={() =>
                localStorage.length > 0 ? "" : navigate("/signIn")
              }
            >
              {localStorage.length > 0 ? <AvatarAccount /> : <Avatar />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
