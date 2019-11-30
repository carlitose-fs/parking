const {
  ADD_TO_CART,
  EMPTY_CART,
  VENDOR_GET_SUCCESS,
  VENDOR_GET_FAIL,
  PARKING_GET_SUCCESS,
  PARKING_GET_FAIL,
} = require('../src/redux/actions/types');

const {
  addToCart,
  emptyCart,
  parkingGetFail,
  parkingGetSuccess,
  vendorGetFail,
  vendorGetSuccess,
} = require('../src/redux/actions');

describe('test actions of cart', () => {
  it('test add to cart', () => {
    const element = { price: 10 };
    const expectedAction = {
      type: ADD_TO_CART,
      payload: element.price,
    };
    expect(addToCart(element.price)).toEqual(expectedAction);
  });
  it('test empty cart', () => {
    const expectedAction = { type: EMPTY_CART };
    expect(emptyCart()).toEqual(expectedAction);
  });
});

describe('test actions of vendor', () => {
  it('vendors get success', () => {
    const element = ['list', 'of', 'elements'];
    const expectedAction = {
      type: VENDOR_GET_SUCCESS,
      payload: element,
    };
    expect(vendorGetSuccess(element)).toEqual(expectedAction);
  });
  it('vendor get fail', () => {
    const err = 'it doesn\'t work';
    const expectedAction = {
      type: VENDOR_GET_FAIL,
      payload: err,
    };
    expect(vendorGetFail(err)).toEqual(expectedAction);
  });
});

describe('test actions of parkings', () => {
  it('parkings get success', () => {
    const element = ['list', 'of', 'elements'];
    const expectedAction = {
      type: PARKING_GET_SUCCESS,
      payload: element,
    };
    expect(parkingGetSuccess(element)).toEqual(expectedAction);
  });
  it('parkings get fail', () => {
    const err = 'it doesn\'t work';
    const expectedAction = {
      type: PARKING_GET_FAIL,
      payload: err,
    };
    expect(parkingGetFail(err)).toEqual(expectedAction);
  });
});
