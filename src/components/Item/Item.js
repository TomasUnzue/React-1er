import './Item.css'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({id , name , img , price, stock }) => {
    return (
        <article className='CardItem'>
            <header className='header'>
                <h2 className='ItemHeader'>{name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible : {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <button className="Option">Ver detalle</button>
                <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log('cantidad agregada', id) } />
            </footer>
        </article>
    )
}
export default Item