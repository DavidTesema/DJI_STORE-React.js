import React from "react";
import { useState } from "react";

export default function CartItem(props) {
  const [inputVal,setInputVal]=useState(0)
  const totalItem = +inputVal * props.itemData.price
  console.log(totalItem);
  return (
    <div>
      <div className="d-flex justify-content-between border-top py-3">
        <div className="d-flex col-12 container">
          <div className="col-6 d-flex align-items-center">
            <div>
              <img height={"100px"} src={props.itemData.images[0].img} />
            </div>
            <div>
              <h5 className="px-2">{props.itemData.name}</h5>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-end col-5">
            <div className="col-3">
              <h4>USD{props.itemData.price}$</h4>
            </div>
            <div className="col-3">
              <input
              onChange={(e)=>setInputVal(e.target.value)}
                type="number"
                placeholder={1}
                max={10}
                min={1}
              />
            </div>
            <div className="col-3">
              <h4>USD{totalItem}$</h4>
            </div>
            <div className="col-3">
              <h4>
                <i class="fa-solid fa-trash"></i>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
