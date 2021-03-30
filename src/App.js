import './App.css';
import Goods from './componets/Goods/Goods';
import Cart from './componets/Cart/Cart';
import Header from './componets/Header/Header';
import { useState } from 'react';

function App() {
  const [modalCartActive, setModalCartActive] = useState(false);

  const toogleModalCart = (isActive) => {
    setModalCartActive(isActive);
  };
  return (
    <div className="App">
      <Header toogleModalCart={toogleModalCart} />
      <Cart active={modalCartActive} toogleModalCart={toogleModalCart} />
      <Goods />
    </div>
  );
}

export default App;
