import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { withRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class LoginPage extends Component {
  componentDidMount = () => {
    this.props.setPathName();
  };
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            onLoginSubmit,
            onLoginName,
            onLoginPassword,
            // loginUsername,
            isLoggedIn
            //err Message comes after login
            // errMessage
          } = value;
          if (isLoggedIn) {
            setTimeout(() => this.props.history.push("/"), 1200);
          }
          return (
            <div className="container mt-5">
              <div className="row">
                <br />
                <br />
              </div>
              <div className="row justify-content-center align-items-center mt-5">
                <div className="col-12 col-md-9 col-lg-7 mt-5">
                  <div className="card mb-3">
                    <div className="card-header">
                      <h1 className="text-center">Login</h1>
                    </div>{" "}
                    <div>
                      <ToastContainer />
                    </div>
                    <div className="card-body">
                      <form onSubmit={onLoginSubmit}>
                        <div className="form-row">
                          <div className="form-group col-md-8 mx-auto">
                            <label>Username</label>
                            <input
                              className="form-control"
                              type="text"
                              name="username"
                              placeholder="username"
                              onChange={onLoginName}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-8 mx-auto">
                            <label>Password</label>
                            <input
                              className="form-control"
                              type="password"
                              name="password"
                              placeholder="password"
                              onChange={onLoginPassword}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-4 mx-auto">
                            <button
                              onClick={onLoginSubmit}
                              className="btn btn-camp btn-lg btn-block"
                            >
                              Login
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

let Login = withRouter(LoginPage);

export default Login;
