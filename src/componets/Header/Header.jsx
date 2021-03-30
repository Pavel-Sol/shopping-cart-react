import './Header.css'

function Header (props) {
   return (
      <div className='header__body'>
         <button className="cart-wd" onClick={() => props.toogleModalCart(true)}>
             модальное окно
         </button>
      </div>
   )
}

export default Header