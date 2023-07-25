"use client"
import { useContext } from "react"
import React from 'react'
import { MiContexto } from "@/app/components/CartContext"
const productDetail = ({params}) => {
    const data = useContext(MiContexto)
    const filtered = data.data ? data.data.filter(item => item.id == params.id) : console.assert("Puede que algo en el filtrado haya fallado")
           
        filtered ? filtered.map(item => document.title = `Pizzeria | ${item.name}`) : console.assert("Puede que algo en el filtrado haya fallado")
    return (
    <div className="containerDetail">{filtered ? filtered.map(item => (
        <div key={item.id} class="containerDetailCard">
        <img class="productDetailImage" src={item.image.src} alt="Pizza de pepperoni"/>
        <h2 class="productDetailTitle">{item.name}</h2>
        <p class="productDetailPrice">${item.price}</p>
        <button onClick={() => data.addToCart(item)} class="orderButton">¡Ordenar ahora!</button></div>
    )) : console.assert("Puede que algo en el mapeo haya fallado")}</div>
  )
}

export default productDetail;