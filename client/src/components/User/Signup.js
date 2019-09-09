//jshint esversion:6
import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SignupPage extends Component {
  state = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    admin: "",
    signupSuccess: false
  };
  componentDidMount = () => {
    this.props.setPathName();
  };
  onSignupName = e => {
    this.setState({
      username: e.target.value
    });
  };
  onSignupPassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  onSignupFirstname = e => {
    this.setState({
      firstname: e.target.value
    });
  };
  onSignupLastname = e => {
    this.setState({
      lastname: e.target.value
    });
  };

  onSignupEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  onSignupAdmin = e => {
    this.setState({
      admin: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    };
    axios
      .post("http://localhost:5000/api/user/signup", newUser)
      .then(res => {
        if (res.data) {
          this.setState({
            signupSuccess: true
          });
          console.log("register success, user name:" + res.data);
          toast(
            "Congratulations, You Have Successfully Signed Up! Please Log In Now"
          );
          setTimeout(() => this.props.history.push("/"), 1500);
        }
      })
      .catch(err => {
        toast(`Opps, Something is Wrong\n${err.message}`);
      });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <br />
          <br />
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-12 col-md-9 col-lg-7">
            <div class="card mb-3">
              <div class="card-header">
                <h1 class="text-center">Sign Up</h1>
              </div>
              <ToastContainer />
              <div class="card-body">
                <form onSubmit={this.onFormSubmit}>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>First Name</label>
                      <input
                        class="form-control"
                        type="text"
                        name="firstName"
                        placeholder="first name"
                        onChange={this.onSignupFirstname}
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label>Last Name</label>
                      <input
                        class="form-control"
                        type="text"
                        name="lastName"
                        placeholder="last name"
                        onChange={this.onSignupLastname}
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label>Email Address</label>
                      <input
                        class="form-control"
                        type="email"
                        name="email"
                        placeholder="email address"
                        onChange={this.onSignupEmail}
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>Username</label>
                      <input
                        class="form-control"
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={this.onSignupName}
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label>Password</label>
                      <input
                        class="form-control"
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={this.onSignupPassword}
                      />
                    </div>
                  </div>
                  {/*      <div class="form-row">
        <div class="form-group col-md-12">
          <label>Admin Code</label>
          <input
            class="form-control"
            type="text"
            name="admincode"
            placeholder="admin code"
            onChange={this.onSignupAdmin}
          />
        </div>
      </div>*/}

                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <button class="btn btn-camp btn-lg btn-block">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}
const Signup = withRouter(SignupPage);
export default Signup;
