import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3 className='title'>Ecommerce</h3>
            </Link>
            <div className='categories'>
                <NavLink to={`/item/1`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Remeras</NavLink>
                <NavLink to={`/item/2`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Pantalones</NavLink>
                <NavLink to={`/item/3`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Buzos</NavLink>
                <NavLink to={`/item/4`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Shorts</NavLink>
                <NavLink to={`/item/5`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Medias</NavLink>
                <NavLink to={`/item/6`} className={({ isActive }) => isActive ? 'activeOption' : 'Option'}>Camperas</NavLink> 
            </div>
            <CartWidget/>
        </nav>
        
    );
}
export default NavBar