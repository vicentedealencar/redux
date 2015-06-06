import React, { Component } from 'react';
import { dispatch, Injector } from 'redux';
import { addToCart, closeOrder, confirmPayment } from './actions/CheckoutActions';
import * as stores from './stores/index';
import Checkout from './Checkout';

@dispatch(stores)
export default class CheckoutApp extends Component {
  render() {
    return (
      <Injector stores={{ products: stores.productStore, cart: stores.cartStore }}
                actions={{ addToCart, closeOrder, confirmPayment }}>
        {({ state, actions }) => <Checkout {...state} {...actions} />}
      </Injector>
    );
  }
}
