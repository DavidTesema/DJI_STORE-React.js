import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

export default function CartItem({ itemData }) {
  const [inputVal, setInputVal] = useState(1);

  const totalItem = inputVal * itemData.price;

  const dispatch = useDispatch();
 
  const adjustQty=()=>{
    const action = { type: "ADJUST_QTY", payload: inputVal };
    dispatch(action);
  }

  const removeFromCart = () => {
    const action = { type: "REMOVE_FROM_CART", payload: itemData._id };
    dispatch(action);
  };
  itemData.qty = totalItem / itemData.price;
  return (
    <div>
      <div className="d-flex justify-content-between border-top py-3">
        <div className="d-flex col-12 container">
          <div className="col-5 d-flex ">
            <div>
              <img height={"100px"} src={itemData.images[0].img} />
            </div>
            <div>
              <h4 className="px-2">{itemData.name}</h4>
              <h5 className="px-2">Price :{itemData.price}$</h5>
              <strong>
                <span className="px-2">QTY:</span>
              </strong>
              <input
                onChange={(e) => {
                  setInputVal(e.target.value)
                  adjustQty()
                }}
                type="number"
                placeholder={1}
                value={inputVal}
                max={10}
                min={1}
              />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center col-5">
            <div className="col-6">
              <h5>Total: {totalItem}$</h5>
            </div>
          </div>
          <div className="col-1 d-flex align-items-center">
            <Button onClick={() => removeFromCart()} variant="outline-danger">
              <i class="fa-solid fa-trash"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
