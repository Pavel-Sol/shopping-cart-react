const defaultState = [];

const LOADING_FROM_LS = 'LOADING_FROM_LS';
const ADD_TO_CART = 'ADD_TO_CART';
const INCREASE_COUNTER_CART_ITEM = 'INCREASE_COUNTER_CART_ITEM';

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_FROM_LS:
      return [...state, ...action.payload];

    case ADD_TO_CART:
      return [...state, action.payload];

    case INCREASE_COUNTER_CART_ITEM:
      return [...action.payload];

    default:
      return state;
  }
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const loadingFromLS = (payload) => {
  return {
    type: LOADING_FROM_LS,
    payload,
  };
};

export const increaseCounter = (payload) => {
  return {
    type: INCREASE_COUNTER_CART_ITEM,
    payload,
  };
};
