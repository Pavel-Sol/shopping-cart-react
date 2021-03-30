export const amountItemsCounter = (cartItems) => {
  return cartItems.reduce((acum, item) => {
    return acum + item.count;
  }, 0);
};

export const amountMoneyCounter = (cartItems) => {
  return cartItems.reduce((acum, item) => {
    return acum + item.count * item.price;
  }, 0);
};
