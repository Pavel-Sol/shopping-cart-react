import { addToCart } from './../store/cartReducer';
import { increaseCounter } from './../store/cartReducer';

export const addItemToCart = (item, size, cartItems) => {
  return (dispatch) => {
    const clonedCartItems = cartItems.slice();
    let productAlreadyInCart = false;

    clonedCartItems.forEach((el) => {
      if (size === el.size) {
        el.count += 1;
        productAlreadyInCart = true;
      }
    });

    if (productAlreadyInCart) {
      localStorage.setItem('cartItems', JSON.stringify(clonedCartItems));
      dispatch(increaseCounter(clonedCartItems));
    } else {
      localStorage.setItem('cartItems', JSON.stringify([...clonedCartItems, { ...item, size }]));
      dispatch(addToCart({ ...item, size }));
    }
  };
};
