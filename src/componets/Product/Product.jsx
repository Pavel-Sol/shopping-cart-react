import {useState} from 'react';
import './Product.css'

function Product (props) {
   let item = props.item
   const [size, setSize] = useState('не выбран размер')

   return(
      <div className='product'>
         <h3>{item.title}</h3>
         <div className='img__wrap'>
            <img src={item.imgLink} alt=""/> 
         </div>
         <button onClick={() => props.addItem(item, size)}
         disabled={size === 'не выбран размер'} >add product</button>

         <div className='choice-size'>
            <div>{size}</div>
               {
                  item.availableSizes.map(item => <button onClick={() => setSize(item)}>{item}</button>)
               }
         </div>
         <div>$: {item.price}</div>
         <hr/>
      </div>
   )

}

export default Product