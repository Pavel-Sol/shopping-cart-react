import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {getAllGoods} from './../asyncActions/asyncActions'

function Goods () {
   const dispatch = useDispatch();
   const mainGoods = useSelector((state) => state.reducer);

   useEffect(() => {
      dispatch(getAllGoods());
    }, []);


   
      return(
         <div>
            <h1>GOODS</h1>
            <ul>
               {
                  mainGoods.map(item => {
                     return <li>
                        {item.title}
                     </li>
                  })
               }
            </ul>
         </div>
      )
   }



export default Goods