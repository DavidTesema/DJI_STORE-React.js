import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

// export default function Footer() {
//   return (
//     <div>Footer</div>
//   )
// }

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-around border-bottom container">
        <div className="text-center">
        <i class="fa-solid fa-truck fs-1 my-2"></i>
            <p>Free shipping on orders over USD $149</p>
        </div>
        <div className="text-center">
        <i class="fa-regular fa-credit-card fs-1 my-2"></i>
            <p>We accept credit cards, PayPal, and bank wires</p>
        </div>
        <div className="text-center">
        <i class="fa-regular fa-message fs-1 my-2"></i>
            <p>Order Service: Live Chat</p>
        </div>
        
        
      </section>
     

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <img height={"25px"} src={"./images/gray-logo.png"} alt="logo" />
              <p className="mt-2 fs-6">
                Creativity is at the heart of every dream. Every idea, every
                groundbreaking leap that changes our world starts with the
                vision of talented creators. At DJI, we give these creators the
                tools they need to bring their ideas to life.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Product Categories
              </h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none fs-6 ">
                  Drones
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none fs-6 ">
                  Professional
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none fs-6 ">
                  Enterprise
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none fs-6 ">
                  Components
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Support</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none fs-6 ">
                  Product Support
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none fs-6 ">
                  Help Center
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none fs-6 ">
                  Security and Privacy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none fs-6 ">
                  After-Sales Service Policies
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                dji@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-top container">
        <div className="me-5 d-none d-lg-block">
          <a href="#" className="tex text-reset text-decoration-none">
            Who We Are |
          </a>
          <a href="#" className="tex text-reset text-decoration-none">
            {" "}
            Contact Us |
          </a>
          <a href="#" className="tex text-reset text-decoration-none">
            {" "}
            Careers |
          </a>
          <a href="#" className="tex text-reset text-decoration-none">
            {" "}
            Flagship Stores
          </a>
        </div>
        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Copyright © 2022 DJI All Rights Reserved.
      </div>
    </MDBFooter>
  );
}
