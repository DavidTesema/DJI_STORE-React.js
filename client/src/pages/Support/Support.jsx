import React from "react";
import { RiMessageFill } from "react-icons/ri";
import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav/Nav";

export default function Support() {
  return (
    <div className="support">
      <Nav/>
      <div className="support-img-container text-center d-flex justify-content-center align-items-center">
        <div className="text-container">
          <h1>Support</h1>
          <h4 className="mt-4">Welcome to DJI Support</h4>
        </div>
      </div>
      <div className="text-center">
        <h1 className="my-4">Contact Us</h1>
      </div>
      <div className="d-flex container mb-3 col-12 w-100">
        <div className="d-flex flex-wrap justify-content-center col-12 ">
          <div className="box-container col-12 col-lg-5 ">
            <i class="fa-solid fa-headphones"></i>
            <h3 className="my-2">Online Customer Service</h3>
            <p>Contact online customer service for immediate support.</p>
            <a href="#">Contact Online Customer Service</a>
          </div>
          <div className="box-container col-12 col-lg-5 ">
            <img
              height={"100%"}
              width={"100%"}
              src="./images/Support2.jpg"
              alt="Support"
            />
          </div>
          <div className="box-container col-12 col-lg-5 ">
            <i class="fa-solid fa-phone"></i>
            <h2>Hotline Service</h2>
            <p>
              English:{" "}
              <a className="text-decoration-none" href="#">
                {" "}
                +1 818 235 0789
              </a>
            </p>
            <p>Monday - Sunday: 6:00 - 18:00 (PST)</p>
            <a href="#">Phone Support Options</a>
          </div>
          <div className="box-container col-12 col-lg-5 ">
            <RiMessageFill size={"50"} />
            <h3>DJI Community</h3>
            <p className="my-2">
              Connect with DJI enthusiasts to explore various product
              experiences
            </p>
            <a href="#">Join DJI Community</a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
