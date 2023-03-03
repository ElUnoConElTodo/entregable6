import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import "./styles/Navbar.css"

const Navbar = () => {

  const {products} = useSelector(store => store.cart)
  const {token} = useSelector(store => store.userInfo)

  return (
    <nav className='navbar'>
        <Link className='navbar__name' to="/"><h2>E-commerce</h2></Link>
        <div className='navbar__container-links'>
            <Link className='navbar__link' to="/Login"><i className='bx bx-user' ></i></Link>
            <Link className='navbar__link' to="/Purchases"><i className='bx bx-box'></i></Link>
            <Link className='navbar__link' to="/Cart"><i className='bx bx-cart' ></i><span>{token ? products.length : ""}</span></Link>
        </div>
    </nav>
  )
}

export default Navbar