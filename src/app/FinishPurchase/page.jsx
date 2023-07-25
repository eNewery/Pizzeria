"use client"
import React, { useContext } from 'react'
import emailjs from "emailjs-com";
import { MiContexto } from '../components/CartContext';

const FinishPurchase = () => {
  const data = useContext(MiContexto)
  emailjs.init("uz5HLEJVRTHGeeoth");
  const enviarCorreo = (e) => {
    e.preventDefault();
    const emailValue = document.querySelector("#email").value;
    const templateParams = {
      to_email: emailValue, // Email del destinatario
      from_name: "Ulises", // Tu nombre como remitente
      message: `La orden es la siguiente${data.cart.map(item => " ( Nombre: " + item.name + ", Cantidad: " + item.quantity + " ) ")} Y el total de la orden serían ${data.totalc}$`, // Contenido del correo electrónico
    };

    emailjs
      .send("service_za07y5e", "template_89mftxq", templateParams)
      .then((response) => {
        console.log("Correo electrónico enviado con éxito:", response);
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
      })}
  return (
    <div class="containerPurchase">
        <h2 class="form-title">Formulario de Compra</h2>
        <form id='form' onSubmit={enviarCorreo}>
            <label class="form-label" for="nombre">Nombre</label>
            <input class="form-input" type="text" id="nombre" name="nombre" required/>

            <label class="form-label" for="email">Email</label>
            <input class="form-input" type="email" id="email" name="email" required/>

            <label class="form-label" for="telefono">Número de Teléfono</label>
            <input class="form-input" type="tel" id="telefono" name="telefono" required/>

            <input class="submit-btn" type="submit" value="Enviar Orden de Compra"/>
        </form>
    </div>
  )
}

export default FinishPurchase;