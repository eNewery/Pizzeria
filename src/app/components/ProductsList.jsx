"use client"
import React, { useState, useEffect, useContext } from 'react'
import Loading from './Loading'
import { MiContexto } from './CartContext'
import Link from 'next/link'
const ProductsList = () => {
const data = useContext(MiContexto)


  return (
<div className='productListContainer'>{data.data ? data.data.map(item => (
<div  className="productItemCard">
<h1>{item.name}</h1>
<Link href={`/ProductDetail/${item.id}`}><img className='productImage' src={item.image.src} alt="" /></Link>
<button className='productBtn' onClick={() => data.addToCart(item)}>Añadir al Carrito</button>
</div>
)): <Loading/>}</div>
  )
}

export default ProductsList