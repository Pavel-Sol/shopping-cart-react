import './CartMini.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import {loadingFromLS} from './../store/cartReducer'
 
function CartMini() {
   const cartItems = useSelector((state) => state.cartReducer);
   const dispatch = useDispatch();

   useEffect(() => {
      const itemsLS = localStorage.getItem('cartItems');
      // console.log(JSON.parse(itemsLS))

      dispatch(loadingFromLS(JSON.parse(itemsLS)))
    }, []);

   return (
      <div className='cart-mini__wrap'>
            {
              (cartItems.length > 0) &&
                  cartItems.map(item => {
                     return <li>
                        {item.title}
                     </li>
                  })
               }
         <hr/>
      </div>
   )
}

export default CartMini