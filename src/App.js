import './App.css';
import Goods from './componets/Goods/Goods';
import Cart from './componets/Cart/Cart';
import Header from './componets/Header/Header';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { amountItemsCounter, amountMoneyCounter } from './helpers/helpers';

function App() {
  const cartItems = useSelector((state) => state.cartReducer.items);
  const [modalCartActive, setModalCartActive] = useState(false);
  const [quantity, setQuantity] = useState(cartItems.length);
  const [check, setCheck] = useState(0);

  useEffect(() => {
    let amountMoney = amountMoneyCounter(cartItems);
    let amountItems = amountItemsCounter(cartItems);
    setQuantity(amountItems);
    setCheck(amountMoney);
  }, [cartItems]);

  const toogleModalCart = (isActive) => {
    setModalCartActive(isActive);
  };
  return (
    <div className="container">
      <Header toogleModalCart={toogleModalCart} quantity={quantity} check={check} />
      <Cart active={modalCartActive} toogleModalCart={toogleModalCart} check={check} />
      <Goods />
    </div>
  );
}

export default App;
