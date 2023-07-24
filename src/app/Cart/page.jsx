"use client"
import React, { useContext, useState } from 'react'
import { MiContexto } from '../components/CartContext'
import Link from 'next/link'
const Cart = () => {
    const data = useContext(MiContexto)

    return (
    <div class="cart-container">
        {data.cart.map(item => (
            <div class="cart-item">
        <Link href={`/ProductDetail/${item.id}`}>
        <img class="product-image" src={item.image.src} alt="Producto 1"/>
        </Link>
        <div class="product-details">
            <p class="product-name">{item.name}</p>
            <p class="product-price">{item.price}$</p>
            <p class="product-quantity">{item.quantity}</p>
            <button onClick={() => data.removeCart(item.id)}>borrar</button>
        </div>
    </div>
    ))}

    
    
{data.cart.length > 0 ? <div><div class="cart-total">Total: ${data.total}</div><button class="checkout-button">Finalizar Compra</button></div> : <div>No hay elementos en el carrito.</div> }
    
</div>
  )
}

export default Cart