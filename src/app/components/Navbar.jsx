"use client"
import React, { useContext } from 'react'
import { MiContexto } from './CartContext'
import Link from 'next/link'
const Navbar = () => {
    const data = useContext(MiContexto)
  return (
    <div className='navbarContainer'>
        <div className="navbarTitle"></div>
        <Link href="/" className="navbarLogo"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /></Link>
    <Link href="/Cart" className="cartContainer">
    <span className="material-symbols-outlined cartIcon">
    shopping_cart
    </span> <span className="cartCounter">{data.cart.length}</span>
    </Link>
    </div>
  )
}

export default Navbar