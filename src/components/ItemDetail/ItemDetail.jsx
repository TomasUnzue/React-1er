import './ItemDetail.css'

import ItemCount from '../ItemCount/ItemCount'

import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, name, img , category, description, price, stock}) => {
    
    const [quantityAdded, setQuantityAdded] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const increment = () => {
        if (quantity < stock){
            setQuantity(quantity +1)
        }
        }
    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1)
        }
    }


    const { addItem } = useContext(CartContext)
    useEffect(() => {
        setQuantity(1)
    }, [ id ]  )
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        setQuantity(1)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    categoria: {category}
                </p>
                <p className="Info">
                    descripcion: {description}
                </p>
                <p className="Info">
                    precio: $ {price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart'
                        className='Option'>Finalizar compra ! </Link>
                    ) : (
                        <ItemCount quantity={quantity} stock={stock} onAdd={handleOnAdd} decrement={decrement} increment={increment}/>
                    )
                }
                
            </footer>
        </article>
    )
}
export default ItemDetail
