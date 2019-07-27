import React from "react";

export const EmptyWishlist = props => {
  return (
    <div
      className="container mt-5 d-flex align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <div className="row">
        <div className="col-11 mx-auto text-center text-title mt-5">
          <h1>Your Wishlist is Currently Empty</h1>
          <h5> Go to Product Detail Page to Start Adding Items to Wishlist</h5>
        </div>
      </div>
    </div>
  );
};
