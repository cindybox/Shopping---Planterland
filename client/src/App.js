import React from "react";
import { Switch, Route } from "react-router-dom";

import "./css/App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import Wishlist from "./components/Wishlist";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import Default from "./components/Default";
import SearchResult from "./components/Search/SearchResult";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { withRouter } from "react-router-dom";
const Modal = React.lazy(() => import("./components/Modal"));
class AppPage extends React.Component {
  state = { pathname: "", productList: [], searchTerm: "" };

  componentDidMount = () => {
    //the first time the page loads, setPathName
    this.setPathName();
  };
  setPathName = () => {
    this.setState({ pathname: this.props.location.pathname.slice(1) });
  };

  updateTerm = e => {
    this.setState({
      searchTerm: e.target.value.toLowerCase()
    });
  };

  submitSearch = async e => {
    e.preventDefault();
    let term = this.state.searchTerm.toLowerCase();
    let products = await axios.get("/api");
    let foundProducts = [];
    products.data.forEach(product => {
      if (
        product.title.toLowerCase().includes(term) ||
        product.company.toLowerCase().includes(term) ||
        product.material.toLowerCase().includes(term)
      ) {
        foundProducts.push(product);
      }
    });

    if (foundProducts.length > 0) {
      this.setState({ productList: foundProducts });
      this.props.history.push("/searchResult");
    } else {
      toast("There is no product that matches this search criteria");
    }
  };
  //get all the products

  navToWhite = () => {
    document.getElementById("navwrapper").style.cssText =
      "background:var(--mainWhite) !important;";
  };
  render() {
    if (process.env) {
      console.log(process.env.PORT);
    }

    return (
      <React.Fragment>
        <Navbar pathname={this.state.pathname} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ProductList
                setPathName={this.setPathName}
                submitSearch={this.submitSearch}
                updateTerm={this.updateTerm}
                searchTerm={this.state.searchTerm}
              />
            )}
          />
          <Route
            exact
            path="/searchResult"
            render={() => (
              <SearchResult
                productList={this.state.productList}
                searchTerm={this.state.searchTerm}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            ren
            render={() => <Signup setPathName={this.setPathName} />}
          />
          <Route
            exact
            path="/details"
            render={() => (
              <Details
                navToWhite={this.navToWhite}
                setPathName={this.setPathName}
              />
            )}
          />
          <Route
            exact
            path="/cart"
            render={() => (
              <Cart
                navToWhite={this.navToWhite}
                setPathName={this.setPathName}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={() => <Login setPathName={this.setPathName} />}
          />
          <Route
            path="/wishlist"
            render={() => (
              <Wishlist
                navToWhite={this.navToWhite}
                setPathName={this.setPathName}
              />
            )}
          />
          <Route
            render={() => (
              <Default
                navToWhite={this.navToWhite}
                setPathName={this.setPathName}
              />
            )}
          />
        </Switch>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Modal setPathName={this.setPathName} />
        </React.Suspense>
      </React.Fragment>
    );
  }
}

const App = withRouter(AppPage);
export default App;
