import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link  } from "react-router-dom"
const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
    
            <div className='categories'>
                <NavLink to={`/category/remera`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Remeras</NavLink>
                <NavLink to={`/category/pantalon`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Pantalones</NavLink>
                <NavLink to={`/category/buzo`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Buzos</NavLink>
                <NavLink to={`/category/short`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Shorts</NavLink>
                <NavLink to={`/category/media`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Medias</NavLink>
                <NavLink to={`/category/campera`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Camperas</NavLink> 
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar