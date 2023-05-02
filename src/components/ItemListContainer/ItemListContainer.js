import { useEffect, useState } from "react"
import { getProductById } from '../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductById()
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer