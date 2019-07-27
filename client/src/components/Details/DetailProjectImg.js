import React, { Component } from "react";
import classNames from "classnames";

export default class DetailProjectImg extends Component {
  state = {
    isClicked: [true, false, false]
  };
  render() {
    return (
      <div className="col-10 mx-auto text-navy text-slanted mt-5">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            {this.props.detailedproducts.projectimage.map((item, index) => (
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={index.toString()}
                class={classNames({ active: this.state.isClicked[index] })}
              ></li>
            ))}
          </ol>
          <div class="carousel-inner">
            {this.props.detailedproducts.projectimage.map((item, index) => (
              <div
                class={classNames("carousel-item", {
                  active: this.state.isClicked[index]
                })}
              >
                <img
                  style={{ width: "100%" }}
                  class="d-block w-100"
                  src={item}
                  alt={`slide number\: ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
