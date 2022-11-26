import React,{ useEffect } from "react";
import CanvasConfetti from "./canvas-confetti/CanvasConfetti";
import { useNavigate } from "react-router-dom";


export default function CheckOutSucess() {
  const navigate = useNavigate()
  useEffect(() => {
    CanvasConfetti();
  }, []);
  
  return (
    <div className="checkOut-success d-flex justify-content-center align-items-center">
      <div className="h-50 w-50 box d-flex justify-content-center align-items-center text-center">
        <i class="fa-solid fa-cart-shopping   py-4"></i>
        <h1>Thank You For Your Order !</h1>
        <p>Check your email inbox for the receipt</p>
        <p className="pt-3">
          if you have any questions, please email{" "}
          <a className="text-decoration-none text-danger" href="#">
            Dji-Store@gmail.com
          </a>
        </p>
        <button onClick={()=>navigate("/")} type="button" class="btn btn-danger px-md-5">
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
}
