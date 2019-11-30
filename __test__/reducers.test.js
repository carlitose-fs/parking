import reducer from '../src/redux/reducers/cart.reducer';

const {
  ADD_TO_CART,
  EMPTY_CART,
} = require('../src/redux/actions/types');

const { INITIAL_STATE } = require('../src/redux/data/cart.data');

describe('test reducers of cart', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  it('test add to cart', () => {
    const payload = 5;
    const newState = reducer(INITIAL_STATE, { type: ADD_TO_CART, payload });
    expect(newState).toEqual({ price: 5, items: 1 });
  });
  it('empty cart', () => {
    const state = { price: 20, items: 1000 };
    const newState = reducer(state, { type: EMPTY_CART });
    expect(newState).toEqual(INITIAL_STATE);
  });
});
