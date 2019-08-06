import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../context";

import { withRouter } from "react-router-dom";

class Product extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <ProductWrapper
        className="col-9 mx-auto col-md-6 col-lg-4 my-3"
        inWishlist={this.props.inWishlist}
        inCart={this.props.inCart}
      >
        <div className="card">
          <div className="card-body">
            <ProductConsumer>
              {value => {
                return (
                  <div
                    className="image-container p-5 d-flex justify-content-center"
                    onClick={() => value.handleDetail(item.pid)}
                  >
                    <Link to="/details" className="productImageContainer">
                      <img
                        className="card-img-top"
                        src={item.image}
                        alt="planter"
                        style={{ width: "14rem" }}
                      />
                    </Link>
                    <button
                      className="card-btn text-center"
                      disabled={item.inCart ? true : false}
                      onClick={() => {
                        value.removeFromWishlist(item.pid);
                        // value.openModal(item.pid);
                      }}
                    >
                      {this.props.inWishlist ? (
                        <p> Remove </p>
                      ) : (
                        <i className="fas fa-cart-plus" />
                      )}

                      {/* {item.inCart ? (
                      <p className="text-text-capitalize mb-0" disabled>
                        in Cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )} */}
                    </button>
                  </div>
                );
              }}
            </ProductConsumer>

            {/*card footer*/}
            <div className="card-text text-center">
              <h5 className="align-self-center mb-1">{item.title} </h5>
              <p className="text-muted  mb-0">from {item.company}</p>
              <p className="text-blue font-italic mb-0">
                <span className="mr-1">$</span>
                {item.price}
              </p>
            </div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

// Product.propTypes = {
//   product: PropTypes.shape({
//     pid: PropTypes.number,
//     image: PropTypes.string,
//     title: PropTypes.string,
//     price: PropTypes.number
//   }).isRequired
// };

const ProductWrapper = styled.div`


/* .productImageContainer{
  posistion:relative;
}
.productRemoveFromWL{
  position:absolute;
  background:rgba(0,0,0,0.6);
  top:0;
  bottom:0;
  left:0;
  right:0;
  width:100%;
  height:100%;
  display:none;
} */

/* .productImageContainer:hover .productRemoveFromWL{
  display: ${props => (props.inWishlist ? "block" : "none")}

} */

  .card {
    background: var(--mainWhite) !important;
    border: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.3s linear;
  }
  &:hover {
    /* .card {
      box-shadow: ${props =>
        props.inWishlist
          ? "2px 2px 5px 0px rgba(0, 0, 0, 0.2);"
          : "0px rgba(0, 0, 0, 0) "};
    } */
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .image-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .image-container:hover .card-img-top {
    transform: scale(1.1);
  }

  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background-color: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    transform: translate(100%, 100%);
    border-radius: 0.5rem 0 0 0;
    transition: all 0.5s linear;
  }
  .image-container:hover .card-btn {
    transform:  ${props =>
      props.inWishlist ? "translate(0, 0)" : "translate(100%, 100%)"}  ;
  }
.card-btn:hover {
    color:   ${props =>
      props.atWishlist ? "var(--mainBlue);" : "var(--mainWhite);"}

  /* background-color: var(--mainBlue) !important; */
`;

export default withRouter(Product);
