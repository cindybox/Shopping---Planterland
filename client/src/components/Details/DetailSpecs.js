import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import ButtonContainer from "../../styled/ButtonContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";

export const DetailSpecs = withRouter(props => {
  let { value } = props;
  const { specs, pid } = value.detailedproducts;
  const {
    selectedSpecType,
    tempSelected,
    handleSelection,
    addToDimension,
    addToFinish,
    incrementAtDetail,
    decrementAtDetail,
    isLoggedIn,
    specsSelected
  } = value;

  let selectedDimension, selectedFinish, selectedCount, selectedPrice;

  let found = tempSelected.find(i => i.pid === pid);
  if (found) {
    selectedDimension = found.selectedSpecs.dimension;
    selectedFinish = found.selectedSpecs.finish;
    selectedCount = found.selectedCount;
    selectedPrice = found.selectedPrice;
  }
  const dim = [];
  const fin = [];
  let dimList = [];
  let finList = [];
  if (specs) {
    specs.forEach(s => {
      if (!dim.includes(s.dimension)) {
        dim.push(s.dimension);
      }
    });
    specs.forEach(s => {
      if (!fin.includes(s.finish)) {
        fin.push(s.finish);
      }
    });

    dimList = dim.map(d => (
      <div
        onClick={addToDimension}
        id={d.toLowerCase()}
        className={classNames("text-specoption mb-2", {
          "specs-active": specsSelected === d.toLowerCase()
        })}
      >
        {d}
      </div>
    ));

    finList = fin.map(f => (
      <div
        onClick={addToFinish}
        id={f.toLowerCase()}
        className={classNames("text-specoption mb-2", {
          "specs-active": specsSelected === f.toLowerCase()
        })}
      >
        {f}
      </div>
    ));
  }

  return (
    <div className="col-10 text-navy text-slanted my-5 mx-auto p-5  ">
      <SpecWrapper selectedSpecType={selectedSpecType}>
        <div className="row text-uppercase mb-3">
          <ToastContainer />
          <div className="">
            <strong> &emsp; Please Make Selections</strong>{" "}
          </div>
        </div>
        <div className="row pt-5 border-top">
          <div className="col-12 col-md-6 mx-auto ">
            <div
              onClick={handleSelection}
              className="mb-md-5 text-uppercase mx-auto"
            >
              <div
                className={`text-spectype  font-weight-bold    ${
                  selectedSpecType === "dimensions" ? "selected-spectype " : ""
                }`}
              >
                &emsp;Dimensions
              </div>

              <div className="d-block d-md-none ml-5 mt-2 mb-4">{dimList}</div>
            </div>

            <div
              onClick={handleSelection}
              className="mx-auto text-uppercase mb-md-5"
            >
              <div
                className={`text-spectype  font-weight-bold    ${
                  selectedSpecType === "finishes/colors"
                    ? "selected-spectype"
                    : " "
                }`}
              >
                &emsp;Finishes/Colors
              </div>
              <div className="d-block d-md-none ml-5 mt-2 mb-4">{finList}</div>
            </div>
          </div>
          <div className=" col-6 mx-auto">
            <div
              id="dimensionlist"
              className="d-none d-md-inline-block d-lg-inline-block"
            >
              {dimList}
            </div>
            <div
              id="finishlist"
              className="d-none d-md-inline-block d-lg-inline-block"
            >
              {finList}
            </div>
          </div>
        </div>
        <div className="row border-top">
          <div className="col-12 col-md-6 mx-auto">
            <div className="row mb-2  my-auto  ">
              <div className="col-8 ml-auto d-flex align-items-center">
                <span>Price:&emsp; </span>
                <div className="d-flex align-items-center justify-content-center mx-auto">
                  <span>
                    {selectedDimension !== "" && selectedFinish !== ""
                      ? "$"
                      : ""}
                  </span>
                  <span className="product-title mx-2 my-2">
                    {selectedPrice}
                  </span>
                </div>{" "}
              </div>
            </div>

            <div className="row mb-2  my-auto ">
              <div className="col-8 ml-auto d-flex align-items-center">
                <span>Quantity:&emsp; </span>
                <div className="d-flex align-items-center justify-content-center mx-auto">
                  <span
                    className="btn btn-black mx-1 "
                    onClick={decrementAtDetail}
                  >
                    -
                  </span>
                  <span className="product-title mx-2 my-2 text-center ">
                    {selectedCount}
                  </span>
                  <span
                    className="btn btn-black mx-1 "
                    onClick={incrementAtDetail}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2 mx-auto  justify-content-end">
          <ButtonContainer
            className="px-4 py-2 font-weight-bold"
            isGreen="true"
            onClick={() => {
              if (isLoggedIn) {
                if (selectedDimension == "" && selectedFinish == "") {
                  toast("Please select specs above");
                } else if (selectedDimension == "") {
                  toast("Please select a size");
                } else if (selectedFinish == "") {
                  toast("Please select a finish");
                } else {
                  value.addToCart(pid);
                  setTimeout(() => props.history.push("/cart"), 800);
                }
              } else {
                toast("You Are Not Logged In, Please Log In First");
              }
            }}
          >
            Add to Cart
          </ButtonContainer>
        </div>
      </SpecWrapper>
    </div>
  );
});

const SpecWrapper = styled.div`
  .text-spectype:before {
    content: "\u2794";
    visibility: hidden;
  }
  .text-spectype:hover {
    cursor: pointer !important;
    color: var(--lightGreen);
    transition: color 0.15s linear;
    &:before {
      visibility: visible;
    }
  }

  .text-specoption:hover {
    cursor: pointer !important;
    color: var(--lightGreen);
    transition: color 0.15s linear;
  }
  .specs-active {
    color: var(--lightGreen);
    transition: color 0.15s linear;
  }
  .selected-spectype:before {
    content: "\u2794";
    visibility: hidden;
  }
  .selected-spectype {
    color: var(--darkGreen) !important;
    &:before {
      visibility: visible;
    }
  }
  span.btn {
    font-size: 2rem;
  }
  #dimensionlist {
    position: absolute;
    visibility: ${props =>
      props.selectedSpecType === "dimensions" ? "visible" : "hidden"};
  }
  #finishlist {
    position: absolute;
    visibility: ${props =>
      props.selectedSpecType === "finishes/colors" ? "visible" : "hidden"};
  }
`;
