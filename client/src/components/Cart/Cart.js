import React from "react";

import { CartColumn } from "./CartColumn";
import { EmptyCart } from "./EmptyCart";
import { ProductConsumer } from "../../context";
import { CartList } from "./CartList";
import { CartTotal } from "./CartTotal";
import LoginRedirect from "../User/LoginRedirect";

class CartElement extends React.Component {
  state = { isLoaded: false };
  componentDidMount = () => {
    this.props.navToWhite();
    this.props.setPathName();

    this.props.value.loadCart();
  };
  render() {
    const { cart, isLoggedIn } = this.props.value;

    if (!this.state.isLoaded) {
      this.setState({ isLoaded: true });
    }
    if (isLoggedIn) {
      return cart.length > 0 ? (
        <React.Fragment>
          <CartColumn itemQuantity={cart.length} />
          <CartList value={this.props.value} />
          <CartTotal value={this.props.value} history={this.props.history} />
        </React.Fragment>
      ) : (
        <EmptyCart />
      );
    } else {
      return <LoginRedirect location="Cart" />;
    }
  }
}

const Cart = props => (
  <ProductConsumer>
    {value => (
      <CartElement
        value={value}
        navToWhite={props.navToWhite}
        setPathName={props.setPathName}
      />
    )}
  </ProductConsumer>
);

export default Cart;
