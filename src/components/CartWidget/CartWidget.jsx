
import './CartWidget.css'
import cart from './assets/carro-de-la-carretilla.png'

const CartWidget = () => {
    return(
        <div className='carrito'>
            <img src={cart} alt="cart-Widget" width="40px"/>
            0
        </div>
    )
}
export default CartWidget
