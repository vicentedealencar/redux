import { CONFIRM_PAYMENT } from '../constants/ActionTypes';

export default function orderStore(orders = [], action) {
  switch (action.type) {
  case CONFIRM_PAYMENT:
    const order = action.cart;
    return orders.concat([order]);
  default:
    return orders;
  }
}
