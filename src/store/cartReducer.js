const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const LOADING_FROM_LS = 'LOADING_FROM_LS';

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_FROM_LS:
      return [...state, ...action.payload];

    case ADD_TO_CART:
      return [...state, action.payload];

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
