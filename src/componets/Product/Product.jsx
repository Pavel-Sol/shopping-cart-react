import {useState} from 'react';
import './Product.css'

function Product (props) {
   let item = props.item
   const [size, setSize] = useState('не выбран размер')

   return(
      <div className='product__wrap'>
         <div className='product__img__wrap'>
            <img src={item.imgLink} alt=""/> 
         </div>
         <div className='product__info'>
            <h3 className='product__title'>{item.title}</h3>

            <div className='product__size'>
               <div className='product__size__selected'>{size}</div>
                  {
                     item.availableSizes.map(item => <button className='product__size__selected__btn' onClick={() => setSize(item)}>{item}</button>)
                  }
            </div>
            <div className='product__price'>цена: <span>{item.price} $</span></div>
         </div>
         <div className='product__order__wrap'>
            <button className='product__order' onClick={() => props.addItem(item, size)}
               disabled={size === 'не выбран размер'} >в корзину</button>
            </div>
         
      </div>
   )

}

export default Product