import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

export default function CartItem({ itemData }) {
  const [inputVal, setInputVal] = useState(1);

  const totalItem = inputVal * itemData.price;

  const dispatch = useDispatch();

  const adjustQty = () => {
    const action = { type: "ADJUST_QTY", payload: inputVal };
    dispatch(action);
  };

  const removeFromCart = () => {
    const action = { type: "REMOVE_FROM_CART", payload: itemData._id };
    dispatch(action);
  };
  itemData.qty = totalItem / itemData.price;
  return (
    <div>
      <div className="d-flex">
        <div>
          <img height={"100px"} src={itemData?.img} />
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <h5 className="px-2">{itemData.name}</h5>
            <p className="px-2">Price: {totalItem}$</p>
          </div>
          <div className="d-flex justify-content-between">
            <span className="px-2">QTY:</span>
            <input
              onChange={(e) => {
                setInputVal(e.target.value);
                adjustQty();
              }}
              type="number"
              placeholder={1}
              value={inputVal}
              max={10}
              min={1}
            />
            <div>
              <Button onClick={() => removeFromCart()} variant="outline-danger">
                <i class="fa-solid fa-trash"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
