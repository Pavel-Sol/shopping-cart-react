import './Header.css'


function Header (props) {
      
   return (
      <div className='header__body'>
         <button className="cart-wd" onClick={() => props.toogleModalCart(true)}>
            кол-во:{props.quantity}  $:{props.check}
         </button>
      </div>
   )
}

export default Header