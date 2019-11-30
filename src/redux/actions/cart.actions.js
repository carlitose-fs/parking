import { ADD_TO_CART, EMPTY_CART } from './types';

export const addToCart = price => ({ type: ADD_TO_CART, payload: price });
export const emptyCart = () => ({ type: EMPTY_CART });
