import { addToCart, deleteFromCart } from './../store/cartReducer';

export const addItemToCart = (item, size, cartItems) => {
  return (dispatch) => {
    const cartItemsClon = cartItems.slice();
    let productAlreadyInCart = false;

    cartItemsClon.forEach((cp) => {
      if (cp.id === item.id && cp.size === size) {
        cp.count += 1;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartItemsClon.push({ ...item, size });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItemsClon));
    dispatch(addToCart(cartItemsClon));
  };
};

export const deleteItemFromCart = (item, cartItems) => {
  return (dispatch) => {
    let cartItemsClon = cartItems.filter((a) => !(a.id === item.id && a.size === item.size));

    localStorage.setItem('cartItems', JSON.stringify(cartItemsClon));
    dispatch(deleteFromCart(cartItemsClon));
  };
};
