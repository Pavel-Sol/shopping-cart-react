const defaultState = [];

const LOADING_ALL_GOODS = 'LOADING_ALL_GOODS';

export const goodsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_ALL_GOODS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export const loadingAllGoods = (payload) => {
  return {
    type: LOADING_ALL_GOODS,
    payload,
  };
};
