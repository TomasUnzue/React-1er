import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../contex/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }
    return (
        <div>
            <h3>total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Eliminar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link> 
        </div>
    )
}
export default Cart