import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';
import {getAllGoods} from '../actions/asyncActions'
import {addItemToCart} from './../actions/cartActions'
import Product from './Product'

function Goods () {
   const dispatch = useDispatch();
   const mainGoods = useSelector((state) => state.reducer);
   const cartItems = useSelector((state) => state.cartReducer);
   
   

   useEffect(() => {
      dispatch(getAllGoods());
    }, []);

    const addItem = (item, size) => { 
      dispatch(addItemToCart(item, size, cartItems))  
    }
   
     return (
      <div>
         {
          mainGoods.map(item => {
             return <Product item={item} addItem={addItem}/>
          })
         }
      </div>
     )
   }



export default Goods