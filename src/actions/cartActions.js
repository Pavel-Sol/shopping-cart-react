import { addToCart } from './../store/cartReducer';

export const addItemToCart = (cartItems, item) => {
  return (dispatch) => {
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));
    dispatch(addToCart(item));
  };
};
