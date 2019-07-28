import React from "react";
import { Link } from "react-router-dom";
import ButtonContainer from "../../styled/ButtonContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DetailGeneral = props => {
  const {
    pid,
    title,
    company,
    link,
    price,
    image,
    description,
    material
  } = props.value.detailedproducts;

  const { openModal, isLoggedIn } = props.value;

  const onClickWishlist = () => {
    if (!isLoggedIn) {
      toast("Please Log In First");
    } else {
      openModal(pid);
    }
  };
  return (
    <div className="col-10 mx-auto text-navy text-slanted mt-5">
      {/*end title*/}

      <div className="row">
        <ToastContainer />
        {/* product info*/}
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={image} className="img-fluid" alt="products" width="400px" />
        </div>
        {/* product text*/}
        <div className="col-10 text-left mx-auto col-md-6 my-3 text-capitalize">
          <h1 className="product-title mb-5"> {title}</h1>
          <h4 className="text-navy mt-3 mb-2">
            from <strong>{company}</strong>
          </h4>
          <h4 className=" mt-3 mb-4">
            Price
            <strong>
              <span>$</span>
              {price}
            </strong>
          </h4>
          {/* product info*/}
          <p className="text-capitalize mt-3 mb-0">{description}</p>
          <p>
            Material: <span> {material}</span>{" "}
          </p>
          <div className="d-flex justify-content-end">
            <div className="text-center mt-2 text-moreinfo">
              <span>More Info</span> <a href={link}>&#9547; </a>
            </div>
          </div>

          <div className="mt-4 row d-block d-md-flex justify-content-around">
            <div className=" col-md-6 d-none d-md-inline-block">
              <Link to="/">
                <ButtonContainer>Go Back</ButtonContainer>
              </Link>
            </div>
            <div className="col-12 col-md-6 text-right">
              <ButtonContainer onClick={onClickWishlist}>
                Add to Collection
              </ButtonContainer>
            </div>
          </div>

          <div className="d-none d-md-flex scroll-down justify-content-end text-uppercase mt-5">
            <h5 className="col-10 col-md-6">scroll down for buying options</h5>
            <div className="scrolldown-arrow col-2">&#10132;</div>
          </div>
        </div>
      </div>
    </div>
  );
};
