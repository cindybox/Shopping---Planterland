import React from "react";
import PayPalButton from "./PayPalButton";
export const CartTotal = ({ value, history }) => {
  const { cartSubtotal, cartTotal, cartTax, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container mb-5">
        <div className="row">
          <div className="col-10 mt-5 ml-sm-5 ml-md-auto col-sm-8 text-right ">
            <button
              onClick={() => clearCart()}
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
            >
              Clear Cart
            </button>

            <h5>
              <span className="text-title">subtotal</span>
              <strong> ${cartSubtotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Tax</span>
              <strong> ${cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">Total</span>
              <strong> ${cartTotal}</strong>
            </h5>
            {/* <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            /> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
