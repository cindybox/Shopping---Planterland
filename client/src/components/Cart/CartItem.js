import React from "react";
import { Link } from "react-router-dom";
import DropDown from "../../styled/DropDown";

export const CartItem = ({ item, value }) => {
  let {
    productName,
    image,
    selectedPrice,
    selectedSpecs,
    selectedCount
  } = item;
  return (
    <div className="row my-1 d-flex text-capitalize align-items-center">
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product: </span>
        {productName}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <Link to="/details">
          <img
            src={image}
            alt="product"
            width={{ width: "2rem", height: "2rem" }}
            className="img-fluid"
            onClick={() => value.handleDetail(item.pid)}
          />
        </Link>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Specs</span>
        <div className="d-flex align-items-center justify-content-center">
          <span>Size:</span>
          <DropDown item={item} value={value} specType="dimensions" />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <span>Finish:</span>

          <DropDown item={item} value={value} specType="finishes" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price: </span>${selectedPrice}
      </div>
      <div className="col-10 mx-auto col-lg-2 mt-2 my-lg-0">
        <div className="d-flex justify-content-center align-items-center">
          <span
            className="btn btn-black mx-1"
            onClick={() => value.decrement(item.pid)}
          >
            -
          </span>
          <span className="text-bright mx-2"> {selectedCount} </span>
          <span
            className="btn btn-black mx-1"
            onClick={() => value.increment(item.pid)}
          >
            +
          </span>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2 mb-5 mb-md-0">
        <div className="cart-icon" onClick={() => value.removeItem(item.pid)}>
          <i className="fas fa-trash" />
        </div>
      </div>
    </div>
  );
};
