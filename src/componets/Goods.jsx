import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import {getAllGoods} from '../actions/asyncActions'
import {addItemToCart} from './../actions/cartActions'

function Goods () {
   const dispatch = useDispatch();
   const mainGoods = useSelector((state) => state.reducer);
   const cartItems = useSelector((state) => state.cartReducer);
   

   useEffect(() => {
      dispatch(getAllGoods());
    }, []);

    const addItem = (item) => {
      dispatch(addItemToCart(cartItems, item))
    }
   
      return(
         <div>
            <h1>GOODS</h1>
            <ul>
               {
                  mainGoods.map(item => {
                     return <li>
                        <h3>{item.title}</h3>
                        <div className='img__wrap'>
                           <img src={item.imgLink} alt=""/> 
                        </div>
                        <button onClick={() => addItem(item)}>add product</button>
                        <hr/>
                     </li>
                  })
               }
            </ul>
         </div>
      )
   }



export default Goods