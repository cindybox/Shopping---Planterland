import React from "react";
import Product from "./Product";
import { ToastContainer } from "react-toastify";
import { ProductConsumer } from "../context";
import Banner from "./Banner";
import { Waypoint } from "react-waypoint";

export default class ProductList extends React.Component {
  componentDidMount() {
    document.getElementById("navwrapper").style.cssText =
      "background:var(--mainGreen) !important;transition:background 0.5s linear;";
    this.props.setPathName();
  }
  changeToGreen = () => {
    document.getElementById("navwrapper").style.cssText =
      "background:var(--lightGreen) !important;transition:background 0.5s linear;";
  };
  changeToWhite = () => {
    document.getElementById("navwrapper").style.cssText =
      "background:var(--mainWhite) !important;transition:background 0.5s linear;";
  };
  render() {
    return (
      <React.Fragment>
        <Banner
          submitSearch={this.props.submitSearch}
          updateTerm={this.props.updateTerm}
          searchTerm={this.props.searchTerm}
        />

        <Waypoint onLeave={this.changeToGreen} onEnter={this.changeToGreen} />

        <div className="py-5">
          <div className="container">
            <ToastContainer />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(item => {
                    return (
                      <Product
                        key={item.title + 1}
                        item={item}
                        removeFromWishlist={value.removeFromWishlist}
                      />
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
        <Waypoint onEnter={this.changeToWhite} onLeave={this.changeToWhite} />
      </React.Fragment>
    );
  }
}
