"use client"
import React, { createContext, useState, useEffect } from 'react';
import muzarella from "./images/muzzarella.jpg"
import napolitana from "./images/napolitana.jpg"
import jamonymorron from "./images/jamonymorron.jpg"
import empanadacarne from "./images/empanada_carne.jpg"
import empanadajyq from "./images/empanada_jamonyqueso.jpg"
import empanadaatun from "./images/empanada_atun.jpg"
import almendrado from "./images/almendrado.jpg"
import bombones from "./images/bombones.jpg"
import helado from "./images/helado.jpg"
import agua from "./images/agua.jpg"
import gaseosa from "./images/gaseosa.jpg"
import cerveza from "./images/cerveza.jpg"
// Crea el contexto y proporciona un valor inicial (puede ser cualquier tipo de dato)
const MiContexto = createContext();
const MiContextoProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [data, setData] = useState()
    const [counter, setCounter] = useState(0)
const [total, setTotal] = useState()
    useEffect(() => {
        setData(db);
    }, [])
    useEffect(() => {
        const getTotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
setTotal(getTotal)
    }, [cart])
    

    const db = [
    {
    name:"Muzarella",
    price:1000, 
    quantity:1,
    image:muzarella,
    id:1,
    },
    {
    name:"Napolitana",
    price:1250,
    quantity:1,
    image:napolitana,
    id:2,
    },
    {
    name:"Jamón y Morrón",
    price:1250,
    quantity:1,
    image:jamonymorron,
    id:3,
    },
    {
    name:"Empanada de Carne",
    price:300,
    quantity:1,
    image:empanadacarne,
    id:4,
    },
    {
    name:"Empanada de Jamón y Queso",
    price:300,
    quantity:1,
    image:empanadajyq,
    id:5,
    },
    {
    name:"Empanada de Atún",
    price:300,
    quantity:1,
    image:empanadaatun,
    id:6,
    },
    {
    name:"Almendrado",
    price:450,
    quantity:1,
    image:almendrado,
    id:7,
    },
    {
    name:"Bombones",
    price:450,
    quantity:1,
    image:bombones,
    id:8,
    },
    {
    name:"Helado",
    price:250,
    quantity:1,
    image:helado,
    id:9,
    },
    {
    name:"Agua",
    price:350,
    quantity:1,
    image:agua,
    id:10,
    },
    {
    name:"Gaseosa",
    price:450,
    quantity:1,
    image:gaseosa,
    id:11,
    },
    {
    name:"Cerveza",
    price:500,
    quantity:1,
    image:cerveza,
    id:12,
    }
    ]
    
    function addToCart(product){
const existingProductIndex = cart.findIndex(item => item.id === product.id);
if (existingProductIndex !== -1) {
  cart[existingProductIndex].quantity += 1;
} else {
  setCart([...cart, product ]);
}

    }
    function removeCart(id) {
   const filtered = cart.filter(item => item.id !== id);
   setCart(filtered)
 
    }
    return (
      <MiContexto.Provider value={{data, setData, addToCart, cart, total, removeCart}}>
        {children}
      </MiContexto.Provider>
    );
  };
  export { MiContexto, MiContextoProvider };