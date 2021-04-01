import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import {loadingFromLS} from '../../store/cartReducer'
import {deleteItemFromCart} from '../../actions/cartActions'
import close from './../../assets/images/close.png'
 
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
            <div onClick={() => props.toogleModalCart(false)} className='close-btn'>
               <img src={close} alt=""/>
            </div>
         {
              (cartItems.length > 0) &&
                  cartItems.map(item => {
                     return <div className='cart-modal__item'>
                        <div className='item__img'>
                           <img src={item.imgLink} alt=""/>
                        </div>
                        <div className='item__info-group'>
                           <div className='item__title'>{item.title}</div>
                           <div className='item__size'>размер: {item.size}</div>
                           <div className='item__count'>кол-во: {item.count}</div>
                        </div>
                        <div className='item__order-group'>
                           <div className='item__price'>ЦЕНА: <span>{item.price * item.count}</span> $</div>
                           <button className='item__order-btn' onClick={() => onDeleteItem(item)} >удалить</button>
                        </div>
                     </div>
                  })
               }
               <h2 className='cart-modal__check'>
                  итого: {props.check}
               </h2>
         </div>
      </div>
   )
}

export default Cart