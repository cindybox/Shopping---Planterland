import React, { Component } from "react";
import Product from "../Product";
import { ProductConsumer } from "../../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { EmptyWishlist } from "./EmptyWishlist";
import LoginRedirect from "../User/LoginRedirect";

class WishlistElement extends Component {
  componentDidMount = () => {
    this.props.setPathName();
  };

  render() {
    const {
      isLoggedIn,
      currentUser,
      currentWishlist,
      changeCurrentList,
      createNewList,
      handleNewList
    } = this.props.value;
    let selectedProducts;
    let { wishlists } = currentUser;
    if (currentWishlist) {
      selectedProducts = currentWishlist.products;
    }

    if (isLoggedIn) {
      return wishlists.length > 0 ? (
        <div className="py-5">
          <div className="container">
            <WishlistWrapper>
              <div className="row mt-5">
                {/*LIST NAME COLUMN*/}
                <div className="col-10 col-lg-3 mx-auto">
                  {/*TITLE*/}
                  <h5 className="text-uppercase font-weight-bold">
                    Your WishList
                  </h5>
                  <hr />
                  {/*LISTNAMES*/}
                  <ul className=" mt-5 col-10 mx-auto">
                    {wishlists.map(w => (
                      <li onClick={changeCurrentList} className="wishlistname">
                        {w.listname}
                      </li>
                    ))}
                    {/*NEW LIST INPUT*/}
                    <div className=" py-3 mx-auto">
                      <form
                        onSubmit={e => createNewList(e)}
                        className="d-flex list-form align-items-center"
                      >
                        <input
                          width="80%"
                          placeholder="Add A New List"
                          className="input-newList p-2 newListInput"
                          onChange={e => handleNewList(e)}
                        />
                        <div className="listbutton">
                          <button
                            className="btn addBtn "
                            onClick={e => createNewList(e)}
                          >
                            <span className="d-flex align-items-center justify-content-center ">
                              &#9547;
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </ul>
                </div>

                {/*PRODUCT COLUMN*/}
                <div className="col-10 col-lg-9 mx-auto ">
                  <div className="row">
                    {selectedProducts && selectedProducts.length > 0 ? (
                      selectedProducts.map(p => <Product item={p} inWishlist />)
                    ) : (
                      <div
                        style={{ height: "50vh" }}
                        className="col-9 mx-auto mt-5 d-flex align-items-center justify-content-center"
                      >
                        <h5>you don't have any products in this list</h5>{" "}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </WishlistWrapper>
          </div>
        </div>
      ) : (
        <EmptyWishlist />
      );
    } else {
      return <LoginRedirect location="Wishlist" />; //Remind User to Log In
    }
  }
}

const Wishlist = props => (
  <ProductConsumer>
    {value => <WishlistElement value={value} setPathName={props.setPathName} />}
  </ProductConsumer>
);

const WishlistWrapper = styled.div`
  li {
    list-style: none;
  }
  .newListInput {
  }
  li:hover {
    color: var(--lightGreen) !important;
    cursor: pointer;
  }
`;
export default Wishlist;
