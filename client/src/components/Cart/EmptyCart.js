import React from "react";

export const EmptyCart = () => {
  return (
    <div
      className="container mt-5 d-flex align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <div className="row">
        <div className="col-10 mx-auto text-center text-title mt-5">
          <h1>Your Cart is Currently Empty</h1>
        </div>
      </div>
    </div>
  );
};
