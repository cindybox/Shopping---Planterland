import React from "react";
import { ProductConsumer } from "../../context";
import styled from "styled-components";
import { DetailSpecs } from "./DetailSpecs.js";
// import { SpecSelected } from "./SpecSelected.js";
import { DetailGeneral } from "./DetailGeneral.js";
import DetailProjectImg from "./DetailProjectImg.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class DetailElement extends React.Component {
  componentDidMount = () => {
    this.props.navToWhite();
    if (this.props.value.detailedproducts) {
      this.props.value.loadDetailList(this.props.value.detailedproducts.pid);
    } else {
      this.props.value.loadDetailList(1);
    }
  };

  render() {
    return (
      <DetailWrapper>
        <div className="container mt-5 pt-5">
          <div className="row">
            <ToastContainer />
            <DetailGeneral value={this.props.value} />
            <DetailProjectImg
              detailedproducts={this.props.value.detailedproducts}
            />
            <DetailSpecs value={this.props.value} />
          </div>
        </div>
      </DetailWrapper>
    );
  }
}

class Detail extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <DetailElement value={value} navToWhite={this.props.navToWhite} />
          );
        }}
      </ProductConsumer>
    );
  }
}

const DetailWrapper = styled.div`
  .text-moreinfo {
    /* border-color: var(--darkGreen) !important;
    border-width: 2px !important; */
    font-size: 1.1rem;
    letter-spacing: 0.08rem;
  }

  .text-moreinfo a {
    color: var(--mainNavy) !important;
  }

  .text-moreinfo a {
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--darkGreen) !important;
    curser: pointer !important;
  }
  .text-moreinfo a:hover {
    color: var(--lightGreen) !important;
  }

  .scrolldown-arrow {
    transform: rotate(90deg);
    font-size: 2.4rem;
    color: var(--darkGreen);
    animation: 2s infinite normal arrowdown;


    @media (max-width: 767px) {
  .scroll-down{
    display:none;
  }

  }

  @keyframes arrowdown {
    0% {
      top: 0px;
    }
    20% {
      top: 0px;
    }
    40% {
      top: 12px;
    }
    50% {
      top: 0px;
    }
    /* 80% {
      top: 6x;
    } */
    60% {
      top: 6px;
    }

    80% {
      top: 0px;
    }
  }
`;
export default Detail;
