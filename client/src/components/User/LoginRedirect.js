import React from "react";
import { Link } from "react-router-dom";

const LoginRedirect = props => (
  <div className="py-5 mt-5">
    <div
      className="container mt-5 d-flex align-items-center  justify-content-center"
      style={{ height: "60vh" }}
    >
      <div className="row mt-5 ">
        <div className="col-10 mx-auto text-title text-center">
          Please&ensp;
          <span>
            <Link
              to="/login"
              className="text-uppercase font-weight-bold "
              style={{ color: "var(--danger)" }}
            >
              Log In
            </Link>
          </span>
          &ensp;to See Your <span> {props.location} </span>
        </div>
        <div className="col-10">
          <br />
        </div>
        <div className="col-10 mx-auto text-title text-center">
          Don't have an account yet?&ensp;
          <span>
            <Link
              to="/signup"
              className="text-uppercase font-weight-bold "
              style={{ color: "var(--danger)" }}
            >
              Register here
            </Link>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default LoginRedirect;
