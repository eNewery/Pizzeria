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
    useEffect(() => {
        setData(db);
    }, [])
    
    useEffect(() => {

    }, [])
    

    const db = [
    {
    name:"Muzzarella",
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
    
    function addToCart(item){
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
          const updatedCart = cart.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
          );
          setCart(updatedCart);
        } else {
          setCart([...cart, { ...item, quantity: 1 }]);
        }
    }
    const totalc = cart.reduce((accumulator, currentItem) => {
        const { price, quantity } = currentItem;
        return accumulator + price * quantity;
      }, 0);
    function removeCart(id) {
   const filtered = cart.filter(item => item.id !== id);
   setCart(filtered)
 
    }
    return (
      <MiContexto.Provider value={{data, setData, addToCart, cart, removeCart, totalc}}>
        {children}
      </MiContexto.Provider>
    );
  };
  export { MiContexto, MiContextoProvider };