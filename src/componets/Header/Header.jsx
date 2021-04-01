import './Header.css'
import cartIcon from './../../assets/images/cart.png'


function Header (props) {
      
   return (
      <div className='header__body'>
         <button className="cart-wiget" onClick={() => props.toogleModalCart(true)}>
            <div className="cart-wiget__icon">
               <img src={cartIcon} alt=""/>
            </div>
            <div className="cart-wiget__data">
               <div className="cart-wiget__data__quantity">
                  кол-во: {props.quantity}
               </div>
               <div className="cart-wiget__data__check">
                   $: {props.check}
               </div>
            </div>
         </button>
      </div>
   )
}

export default Header
