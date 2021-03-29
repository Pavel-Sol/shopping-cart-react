import { addToCart } from './../store/cartReducer';

export const addItemToCart = (item, size, cartItems) => {
  return (dispatch) => {
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...item, size }]));
    dispatch(addToCart({ ...item, size }));
  };
};
