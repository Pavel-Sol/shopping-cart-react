import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import {loadingFromLS} from '../../store/cartReducer'
import {deleteItemFromCart} from '../../actions/cartActions'
 
function Cart(props) {
   // console.log(props)
   const cartItems = useSelector((state) => state.cartReducer.items);
   const dispatch = useDispatch();


   

   useEffect(() => {
      const itemsLS = localStorage.getItem('cartItems');
      // console.log(JSON.parse(itemsLS))

      if(JSON.parse(itemsLS) !== null) {
         dispatch(loadingFromLS(JSON.parse(itemsLS)))
      }
    }, []);

    const onDeleteItem = (item) => {
      dispatch(deleteItemFromCart(item, cartItems))
    } 

   return (
      <div className={props.active ? "cart-modal active" :  "cart-modal"}  onClick={() => props.toogleModalCart(false)}>
         <div className={props.active ? "cart-modal__content active" :  "cart-modal__content"}onClick={e => e.stopPropagation()} >
         {
              (cartItems.length > 0) &&
                  cartItems.map(item => {
                     return <li>
                        {item.title} size: {item.size} count: {item.count} ЦЕНА:{item.price * item.count}
                        <button onClick={() => onDeleteItem(item)} >удалить</button>
                     </li>
                  })
               }
               <h2>
                  итого: {props.check}
               </h2>
         </div>
      </div>
   )
}

export default Cart