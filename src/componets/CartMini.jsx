import './CartMini.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import {loadingFromLS} from './../store/cartReducer'
import {deleteItemFromCart} from './../actions/cartActions'
 
function CartMini() {
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
      <div className='cart-mini__wrap'>
            {
              (cartItems.length > 0) &&
                  cartItems.map(item => {
                     return <li>
                        {item.title} size: {item.size} count: {item.count}
                        <button onClick={() => onDeleteItem(item)} >удалить</button>
                     </li>
                  })
               }
         <hr/>
      </div>
   )
}

export default CartMini