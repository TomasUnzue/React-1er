import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
const { clearCart, totalQuantity, total, cart } = useContext(CartContext);
const navigate = useNavigate();

if (totalQuantity === 0) {
    return (
    <>
        <h1>No hay items en el carrito</h1>
        <Link to='/' className='Option'>Productos</Link>
    </>
    );
}

return (
    <>
    {cart.map((product) => (
        <h1 key={product.id}>
        {product.id} {product.name} {product.price} {product.stock}
        </h1>
    ))}
    <h3>Total ${total}</h3>
    <button onClick={() => {
        clearCart();
        navigate('/');
    }} className="Button">Eliminar carrito</button>
    <Link to='/checkout' className='Option'>Checkout</Link>
    </>
);
};

export default Cart;
