import React, { Component } from 'react';
import { connect, bindActions } from 'redux';
import * as CheckoutActions from '../actions/CheckoutActions';
import Checkout from '../components/Checkout';

@connect(state => ({
  cart: state.cart,
  products: state.products
}))
export default class CheckoutApp extends Component {
  render() {
    const { cart, products, dispatcher } = this.props;

    return (
      <Checkout cart={cart} products={products} {...bindActions(CheckoutActions, dispatcher)} />
    );
  }
}
