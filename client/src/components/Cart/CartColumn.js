import React from "react";

export const CartColumn = props => {
  return (
    <div className="container-fluid text-center mt-5">
      <div className="row mt-5">
        <div className="col-10 ml-5 my-5 text-left">
          <h5 className="text-muted">
            There are a total of <strong>{props.itemQuantity}</strong> planters
            in your cart{" "}
          </h5>
        </div>
      </div>
      <div className="row font-weight-bold d-none d-lg-flex ">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">name</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">specs</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
      </div>
    </div>
  );
};
