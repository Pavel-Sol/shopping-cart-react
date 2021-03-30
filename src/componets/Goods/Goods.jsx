import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';
import {getAllGoods} from '../../actions/goodsActions'
import {addItemToCart} from './../../actions/cartActions'
import Product from './../Product/Product'
import './Goods.css'

function Goods () {
   const dispatch = useDispatch();
   const goods = useSelector((state) => state.goodsReducer);
   const cartItems = useSelector((state) => state.cartReducer.items);
   

   useEffect(() => {
      dispatch(getAllGoods());
    }, []);

    const addItem = (item, size) => { 
      dispatch(addItemToCart(item, size, cartItems))  
    }
   
     return (
      <div>
         {
          goods.map(item => {
             return <Product item={item} addItem={addItem}/>
          })
         }
      </div>
     )
   }



export default Goods