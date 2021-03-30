const defaultState = { items: [] };

const LOADING_FROM_LS = 'LOADING_FROM_LS';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_FROM_LS:
      return { ...state, items: [...action.payload] };

    case ADD_TO_CART:
      return { ...state, items: [...action.payload] };

    case DELETE_FROM_CART:
      return { ...state, items: [...action.payload] };

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

export const deleteFromCart = (payload) => {
  return {
    type: DELETE_FROM_CART,
    payload,
  };
};

export const loadingFromLS = (payload) => {
  return {
    type: LOADING_FROM_LS,
    payload,
  };
};
