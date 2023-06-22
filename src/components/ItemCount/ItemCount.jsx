import './ItemCount.css'
import { useState } from 'react' 

const ItemCount = ({stock, onAdd, increment, decrement,quantity})=> {

    return(
        <div className='Counter'>
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>  
            </div>
        </div>
    )
}
export default ItemCount