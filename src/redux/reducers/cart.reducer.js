import { INITIAL_STATE } from '../data/cart.data';
import {
  ADD_TO_CART,
  EMPTY_CART,
} from '../actions/types';

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, price: payload + state.price, items: state.items + 1 };
    case EMPTY_CART:
      return { ...INITIAL_STATE };
    default: return state;
  }
};
