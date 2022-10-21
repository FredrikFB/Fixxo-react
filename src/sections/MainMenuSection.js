import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  return (
    <nav className="main-menu">
        <div className="container">
            <NavLink className="logo" to="/" end>Fixxo.</NavLink>            
            <div className="menu-links">
                <NavLink className="menu-link" to="/" end>Home</NavLink>
                <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
                <NavLink className="menu-link" to="/products" end>Products</NavLink>
                <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>
            </div>
            <div className="menu-icons">
                <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass"/>
                <MenuIcon link="/compare" icon="fa-regular fa-code-compare fa-flip-horizontal"/>
                <MenuIcon link="/wishlist" icon="fa-regular fa-heart" quantity="3"/>
                <MenuIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping" quantity="4"/>
            </div>
        </div>
    </nav>
  )
}

export default MainMenuSection