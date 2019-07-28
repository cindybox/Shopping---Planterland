import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import ButtonContainer from "../styled/ButtonContainer";
import classNames from "classnames";

export default class Product extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            modalOpen,
            closeModal,
            detailedproducts,
            currentUser,
            addtoWishlist,
            createNewList,
            handleNewList,
            currentWishlist
          } = value; //need the const
          const { wishlists } = currentUser;
          let image;
          if (detailedproducts) {
            image = detailedproducts.image;
          }

          let wishlistitems;
          if (wishlists && wishlists.length > 0) {
            wishlistitems = wishlists.map(w => {
              if (w.listname) {
                return (
                  <li
                    onClick={e => addtoWishlist(e)}
                    key={w.listname}
                    className={classNames("lists", {
                      active:
                        currentWishlist &&
                        currentWishlist.listname === w.listname
                    })}
                  >
                    {w.listname}
                  </li>
                );
              } else {
                return "";
              }
            });
          }
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div
                  className="pagecontainer d-flex align-items-center"
                  onClick={e => closeModal(e)}
                >
                  <div className="container" id="pagecontainer">
                    <div className="row p-5">
                      <div
                        id="modalcontainer"
                        className="col-12 col-md-10 col-lg-8 mx-auto "
                      >
                        <div className="row modalcontainer p-5">
                          <div
                            id="modal"
                            className="modal-img col-10 col-md-6 mx-auto d-flex justify-content-center "
                          >
                            <img
                              src={image}
                              alt="products"
                              className="img-fluid"
                              width="200px"
                            />
                          </div>
                          <div className="col-10 col-md-6 modal-list mx-auto">
                            <h5 className="text-title text-center">
                              Choose Lists
                            </h5>
                            <hr />

                            <ul>{wishlistitems}</ul>

                            <div className="border-top py-3 mx-auto">
                              <form
                                onSubmit={e => createNewList(e)}
                                className="d-flex list-form align-items-center"
                              >
                                <div className="listbutton">
                                  <button
                                    className="btn addBtn "
                                    onClick={e => createNewList(e)}
                                  >
                                    <span className="d-flex align-items-center justify-content-center mx-auto">
                                      &#9547;
                                    </span>
                                  </button>
                                </div>
                                &emsp;
                                <input
                                  placeholder="Add A New List"
                                  className="input-newList"
                                  onChange={e => handleNewList(e)}
                                />
                              </form>
                            </div>

                            <div className="row ">
                              {currentWishlist ? (
                                <Link to="/wishlist" className="ml-auto">
                                  <ButtonContainer
                                    style={{ width: "100% !important;" }}
                                    onClick={() => closeModal()}
                                  >
                                    View This List
                                  </ButtonContainer>
                                </Link>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  .pagecontainer {
    height: 100%;
    width: 100%;
  }
  li {
    list-style: none;
    font-size: 1.3rem !important;
    line-height: 2rem;
    font-weight: bold;
    color: var(--mainGrey) !important;
  }
  .active {
    color: var(--lightGreen) !important;
  }
  li:hover {
    color: var(--lightGreen);
    cursor: pointer;
  }
  .modalcontainer {
    background: var(--mainWhite) !important;
  }

  .listbutton {
    position: relative;
  }

  .input-newList {
    border: none;
    background: transparent;
  }

  .btn.addBtn {
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
    color: var(--mainWhite);
    z-index: 3;
    background: var(--lightGreen) !important;
    border: none;
  }
  span {
    font-size: 1rem;
    top: -10%;
    bottom: -10%;
    left: 0;
    right: 0;
    position: absolute;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
