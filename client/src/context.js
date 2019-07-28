import React from "react";
import { detailedproducts } from "./data.js";
import _ from "lodash";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    products: [],
    detailedproducts: [],

    modalOpen: false,
    modalProduct: detailedproducts,

    loginUsername: "",
    loginPassword: "",
    isLoggedIn: false,
    errMessage: "",
    currentUser: {},

    currentWishlist: {},
    newListName: "",

    tempSelected: [],
    specsSelected: "",
    selectedSpecType: "dimensions",
    cart: [],
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  //once the page loads, load all products from data
  componentDidMount() {
    this.setProducts();
  }
  // ====================== BANNER FUNCTIONS =======================//

  // ====================== LOGIN PAGE FUNCTIONS =======================//
  onLoginName = e => {
    this.setState({
      loginUsername: e.target.value
    });
  };
  onLoginPassword = e => {
    this.setState({
      loginPassword: e.target.value
    });
  };
  onLoginSubmit = e => {
    console.log("submit user");
    e.preventDefault();
    //on submital, send to server for authentification check
    axios
      .post("/api/user/login", {
        username: this.state.loginUsername,
        password: this.state.loginPassword
      })
      .then(res => {
        if (res.data) {
          this.setState(
            {
              //nav will need to access is LoggedIn
              isLoggedIn: true,
              currentUser: res.data,
              //initialize currentWishlist
              currentWishlist: res.data.wishlists[0],
              currentMessage: `Welcome ${res.data.username}`
            },
            () => {
              this.loadWishlist();
              this.loadCart();
            } //initialize cart
          );
          toast(`welcome ${this.state.loginUsername}`);
        }
      })
      .catch(err => {
        toast(`Oops Something Is Wrong, Try Again\n ${err.message}`);
      });
  };

  logout = () => {
    axios
      .get("/api/user/logout")
      .then(res => {
        this.setState({
          isLoggedIn: false,
          currentWishlist: {},
          cartSubtotal: 0,
          cartTax: 0,
          cartTotal: 0,
          tempSelected: [],
          loginUsername: "",
          loginPassword: "",
          currentUser: {},
          modalOpen: false,
          cart: []
        });
      })
      .catch(err => console.log(err));
  };
  // ====================== PRODUCT PAGE FUNCTIONS =======================//
  //initialize product data
  setProducts = async () => {
    //copy data one by one without manipulating the original data
    let tempProducts = [];

    let products = await axios.get("/api");

    products.data.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState({
      products: tempProducts,
      detailedproducts: tempProducts[0]
    });
  };

  //find the data of the product selected
  getItem = id => {
    return this.state.products.find(item => id === item.pid);
  };
  // ======================DETAIL PAGE FUNCTIONS =======================//
  //load detail after at page detail
  loadDetailList = pid => {
    let selectedProduct = this.getItem(pid);
    let selectedList = {
      _id: selectedProduct._id,
      pid: pid,
      productName: selectedProduct.title,
      image: selectedProduct.image,
      selectedPrice: 0,
      selectedSpecs: { dimension: "", finish: "" },
      selectedCount: 0,
      selectedTotal: 0
    };

    //if current product is already in the tempSelected
    if (
      this.state.tempSelected.find(i => {
        if (i && i.length > 0) {
          return i.find(k => k.pid === pid);
        }
      })
    ) {
      return;
    } else {
      //push a set of product info into tempSelected
      let currentTempSelected = [...this.state.tempSelected, selectedList];
      this.setState({
        tempSelected: currentTempSelected
      });
    }
  };

  handleSelection = e => {
    let updatedType = e.target.innerText.toLowerCase().trim();
    let tempSelectedCopy = _.clone(this.state.tempSelected);

    // let tempFound = tempSelectedCopy.find(s => s.p === id);

    this.setState({
      tempSelected: tempSelectedCopy,
      selectedSpecType: updatedType
    });
  };

  handleDetail = id => {
    const matchproduct = this.getItem(id);
    this.setState({
      detailedproducts: matchproduct
    });
  };

  incrementAtDetail = () => {
    let id = this.state.detailedproducts.pid;
    let tempSelectedCopy = _.clone(this.state.tempSelected);

    let foundProduct = tempSelectedCopy.find(s => s.pid === id);
    // let index = tempSelectedCopy.indexOf(foundProduct);
    // let updatedProduct = tempSelectedCopy[index];
    if (foundProduct.selectedCount < 20) {
      foundProduct.selectedCount++;
    }
    //check if temp copy is updated this way, which is YES
    // console.log(tempSelectedCopy);
    this.setState({
      tempSelected: tempSelectedCopy
    });
  };

  decrementAtDetail = () => {
    let id = this.state.detailedproducts.pid;
    let tempSelectedCopy = _.clone(this.state.tempSelected);

    let foundProduct = tempSelectedCopy.find(s => s.pid === id);

    if (foundProduct.selectedCount > 0) {
      foundProduct.selectedCount--;
    }
    this.setState({
      tempSelected: tempSelectedCopy
    });
  };

  addToDimension = e => {
    let pid = this.state.detailedproducts.pid;

    let updatedDimension = e.target.innerText.toLowerCase();

    //copy current tempSelected List
    let tempSelectedCopy = _.clone(this.state.tempSelected);

    //found item is referenced, so update the found item will update the parent array as well
    let tempFound = tempSelectedCopy.find(s => s.pid === pid);

    if (tempFound) {
      // if (tempFound.selectedSpecs.dimension) {
      //   document.getElementById(
      //     tempFound.selectedSpecs.dimension
      //   ).style.cssText =
      //     "color:var(--mainDark) !important;transition:background 0.5s linear;";
      // }

      tempFound.selectedSpecs.dimension = updatedDimension;
    }

    this.setState(
      {
        tempSelected: tempSelectedCopy,
        specsSelected: updatedDimension,
        selectedSpecType: "dimensions"
      },

      () => {
        this.showPricing();
        document.getElementById(updatedDimension).style.cssText =
          "color:var(--lightGreen) !important;transition:background 0.5s linear;text-decoration:underline";
      }
    );
  };

  addToFinish = e => {
    let id = this.state.detailedproducts.pid;
    let updatedFinish = e.target.innerText.toLowerCase();
    let tempSelectedCopy = _.clone(this.state.tempSelected);
    //in the list, find item i.pid === id, id is passed to the function using detailedproduct

    //you will be able to find it, cuz it is pushed to temp once you are at the detail page
    let tempFound = tempSelectedCopy.find(s => s.pid === id);
    //if this product is already added to the tempselected, replace the value. Otherwise,
    if (tempFound) {
      tempFound.selectedSpecs.finish = updatedFinish;
      // if (tempFound.selectedSpecs) {
      //   document.getElementById(tempFound.selectedSpecs.finish).style.cssText =
      //     "color:var(--mainDark) !important;transition:background 0.5s linear;";
      // }
    }

    this.setState(
      {
        selectedSpecType: "finishes/colors",
        specsSelected: updatedFinish,
        tempSelected: tempSelectedCopy
      },

      () => {
        this.showPricing();
        document.getElementById(updatedFinish).style.cssText =
          "color:var(--lightGreen) !important;transition:background 0.5s linear;text-decoration:underline";
      }
    );
  };

  showPricing = () => {
    let id = this.state.detailedproducts.pid;

    let specs = this.state.detailedproducts.specs;
    let tempSelectedCopy = _.clone(this.state.tempSelected);

    let found = tempSelectedCopy.find(s => s.pid === id);

    let { dimension, finish } = found.selectedSpecs;
    if (dimension !== "" && finish !== "") {
      let priceFound = specs.find(
        s =>
          s.dimension.toLowerCase() === dimension &&
          s.finish.toLowerCase() === finish
      ).price;

      //update the price of the selectedPrice

      found.selectedPrice = priceFound;
      this.setState({
        tempSelected: tempSelectedCopy
      });
    }
  };

  // ====================== MODAL PAGE FUNCTIONS =======================//
  //opent the modal to select wishlist to add to
  openModal = id => {
    if (!this.state.isLoggedIn) {
      toast("Please Log In First");
    } else {
      this.setState({ modalOpen: true });
    }
  };
  closeModal = e => {
    if (e) {
      if (e.target.childNodes.length > 0) {
        if (this.state.modalOpen && e.target.childNodes[0].id) {
          this.setState({ modalOpen: false });
        }
      }
    }
  };

  // ====================== HANDLE WISHLIST FUNCTIONS =======================//
  //pass a list name, get the list id
  getListId = name => {
    //find the id of the list in User db
    if (this.state.currentUser.wishlists) {
      let foundList = this.state.currentUser.wishlists.find(
        w => w.listname === name
      );
      if (foundList) {
        return foundList._id;
      }
    }
  };

  //make sure that the user is logged in
  loadWishlist = () => {
    if (this.state.currentUser) {
      console.log(this.state.currentUser);
      if (this.state.currentUser.wishlists) {
        if (this.state.currentUser.wishlists.length > 0) {
          let currentListId = this.state.currentUser.wishlists[0]._id;
          axios
            .get(
              `/api/user/${this.state.currentUser._id}/wishlists/${currentListId}`
            )
            .then(res => this.setState({ currentWishlist: res.data }))
            .catch(err => console.log(err));
        }
      }
    }
  };
  handleNewList = e => {
    this.setState({ newListName: e.target.value });
  };

  createNewList = e => {
    e.preventDefault();
    let newListName = this.state.newListName;
    const userId = this.state.currentUser._id;

    axios
      .post("/api/user/" + userId + "/wishlists", {
        listname: newListName
      })
      .then(res => {
        //the updated wishlists for the user
        console.log(res.data);
        let tempUser = _.clone(this.state.currentUser);
        console.log(tempUser);
        tempUser.wishlists = res.data;
        this.setState({ currentUser: tempUser });
        console.log(this.state.tempUser);
      })

      //should send the a list of wishlist names of the users including the newly added one
      .catch(err => console.log(err));
  };

  //add product to selected wishlist
  addtoWishlist = e => {
    //take corresponding product info from selectedTemp, and push to the cart database

    let pId = this.state.detailedproducts.pid;
    //get the user and list id to form axios post request URL
    // const userId = this.state.currentUser._id;
    let currentListName = e.target.innerText.trim();
    let currentListId = this.getListId(currentListName);

    console.log("user id is " + this.state.currentUser._id);
    console.log("list name is " + currentListName);

    axios
      .post(
        `/api/user/${this.state.currentUser._id}/wishlists/${currentListId}`,
        { productId: pId }
      )
      .then(res => this.setState({ currentWishlist: res.data })) //should send the updatedlist with newly added product
      .catch(err => console.log(err));
    //should contain all products in products
  };

  changeCurrentList = e => {
    let currentListName = e.target.innerText.trim();
    let currentListId = this.getListId(currentListName);

    axios
      .get(`/api/user/${this.state.currentUser._id}/wishlists/${currentListId}`)
      .then(res => this.setState({ currentWishlist: res.data })) //should send the updatedlist with newly added product
      .catch(err => console.log(err));
  };

  removeFromWishlist = e => {
    //to be updated
    let pId = this.state.detailedproducts.pid;
    let currentListId = this.state.currentWishlist._id;
    axios
      .post(
        `/api/user/${this.state.currentUser._id}/wishlists/${currentListId}/update`,

        { productId: pId }
      )
      .then(res => this.setState({ currentWishlist: res.data }))
      .catch(err => console.log(err));
  };

  // ====================== CART PAGE =======================//
  loadCart = () => {
    axios
      .get(`/api/user/${this.state.currentUser._id}/cart`)
      .then(res => {
        if (res.data[0].selectedCount) {
          this.setState({ cart: res.data }, () => {
            this.addTotal();
          });
          console.log("the current cart of this user");
          console.log(res.data);
        }
      })
      .catch(err => console.log(err));
  };

  //find the product, attach temp specs, and push into the cart of the user
  //send back the updated user.cart

  //send all relevant data to api to update server: selectedSpecs, selectedPrice, selectedCount, selectedTotal???
  addToCart = pid => {
    let id = this.getItem(pid)._id;
    //check if selected product is already in cart
    // console.log(this.state.tempSelected);

    if (this.state.cart.find(p => p._id === id)) {
      console.log("this item already in cart");
      toast("This Item is Already In Cart");
    } else {
      //find it in temp Selected

      let foundProduct = this.state.tempSelected.find(s => s.pid === pid);
      let updatedProduct = _.clone(foundProduct);

      if (foundProduct) {
        //increase and decrease at detail will update this updatedProduct.count = foundProduct.selectedCount;
        //showPricing will update this updatedProduct.selectedPrice = foundProduct.selectedPrice;
        //specs have already been updated

        if (foundProduct.selectedCount === 0) {
          updatedProduct.selectedCount = 1;
          updatedProduct.selectedTotal = updatedProduct.selectedPrice;
        } else {
          updatedProduct.selectedTotal =
            updatedProduct.selectedPrice * updatedProduct.selectedCount;
        }
      }

      axios
        .post(`/api/user/${this.state.currentUser._id}/cart`, updatedProduct)
        //update the cart with response from db
        .then(res => {
          this.setState({ cart: res.data }, () => {
            this.addTotal();
          }); //setState does not update state imediatly. use es6 callback to ensure state updated before calling funciton
        }) //this.addTotal()

        .catch(err => console.log(err));
    }
  };

  // remove it in db, and set cart to res
  removeItem = id => {
    let p_id = this.getItem(id)._id;
    console.log("removing item");
    if (p_id) {
      axios
        .delete(`/api/user/${this.state.currentUser._id}/cart/${p_id}`)
        .then(res => {
          this.setState({ cart: res.data }, () => this.addTotal());
        })
        .catch(err => console.log(err));
    }
  };
  //store temp data in tempSelected. If item added to cart, then move temp data to cart

  increment = id => {
    //need to update selectedCount of the product in cart
    let tempCart = [...this.state.cart];
    //update the count of the product in the
    const selectedProduct = tempCart.find(i => i.pid === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    if (product.selectedCount < 20) {
      product.selectedCount++;
      product.selectedTotal = product.selectedCount * product.selectedPrice;
    }

    axios
      .put(`/api/user/${this.state.currentUser._id}/cart`, tempCart)
      .then(res => {
        this.setState({ cart: res.data }, () => {
          console.log("updated cart in state is");
          console.log(res.data);
          this.addTotal();
        });
      });
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    //update the count of the product in the
    const selectedProduct = tempCart.find(i => i.pid === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    if (product.selectedCount > 0) {
      product.selectedCount--;
      product.selectedTotal = product.selectedCount * product.selectedPrice;
    }

    axios
      .put(`/api/user/${this.state.currentUser._id}/cart`, tempCart)
      .then(res => {
        this.setState({ cart: res.data }, () => {
          console.log("updated cart in state is");
          console.log(res.data);
          this.addTotal();
        });
      });
  };

  addTotal = () => {
    let subTotal = 0;
    console.log("calculating total of cart, cart:");

    console.log(this.state.cart);
    this.state.cart.forEach(i => {
      subTotal = subTotal + i.selectedTotal;
    });
    console.log("total price of all planters in cart (pre-tax)  " + subTotal);
    const tempTax = subTotal * 0.08;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState({
      cartSubtotal: subTotal,
      cartTax: tax,
      cartTotal: total
    });
  };

  clearCart = () => {
    //clear everything in tempSelected and cart
    //clear everything in
    console.log("clearing cart");
    axios
      .delete(`/api/user/${this.state.currentUser._id}/cart/9`)
      .then(res =>
        this.setState({ cart: [], tempSelected: [] }, () => {
          this.addTotal();
        })
      )
      .catch(err => console.log(err));
  };

  // ======================USER PAGE FUNCTIONS =======================//

  render() {
    return (
      //context take all the props of a component and pass it on through value, what is the consumer and provider?
      //ProductContext is a context, which has Provider component, just like react has component
      <ProductContext.Provider
        value={{
          ...this.state,

          addToCart: this.addToCart,
          addToDimension: this.addToDimension,
          addToFinish: this.addToFinish, //get everything from the state
          addtoWishlist: this.addtoWishlist,
          changeCurrentList: this.changeCurrentList,
          addTotal: this.addTotal,
          closeModal: this.closeModal,
          clearCart: this.clearCart,
          createNewList: this.createNewList,
          decrement: this.decrement,
          decrementAtDetail: this.decrementAtDetail,
          handleSelection: this.handleSelection,
          handleDetail: this.handleDetail,
          handleNewList: this.handleNewList,
          increment: this.increment,
          incrementAtDetail: this.incrementAtDetail,
          loadDetailList: this.loadDetailList,
          loadWishlist: this.loadWishlist,
          logout: this.logout,
          loadCart: this.loadCart,
          onLoginName: this.onLoginName,
          onLoginPassword: this.onLoginPassword,
          onLoginSubmit: this.onLoginSubmit,
          openModal: this.openModal,
          removeItem: this.removeItem,
          removeFromWishlist: this.removeFromWishlist,
          showPricing: this.showPricing
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
//by calling productprovider, will have access to the value
//context has two component: Provider and Consumer
//by calling consumer, will have access to these values
//Dont need productContext.Provider

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
