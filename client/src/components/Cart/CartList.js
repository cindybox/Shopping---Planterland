import React from "react";
import { CartItem } from "./CartItem.js";

export const CartList = ({ value }) => {
  const { cart } = value;
  return (
    <div className="containerfluid text-center d-lg-block">
      {cart.map(i => {
        return i ? <CartItem key={i.pid} item={i} value={value} /> : <div />;
      })}
    </div>
  );
};
