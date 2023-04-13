
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>MUNRO SHOP</h1>
            <div>
                <button>Remeras</button>
                <button>Pantalones</button>
                <button>Buzos</button>
                <button>Short</button>
                <button>Medias</button>
                <button>Camperas</button>
            </div>
        <CartWidget/>
        </nav>
    )
}

export default NavBar