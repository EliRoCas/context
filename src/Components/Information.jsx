// Se importa la librería de react 
import React from "react";

// Se importan los hooks 
import UseUser from "../Hooks/UseUser";

export default function Information() {
    const { name, age, email, gender } = UseUser();

    return (
        <div>
            <h2>Información de usuario </h2>
            <p >Nombre: {name}</p>
            <p >Edad: {age}</p>
            <p >Correo: {email}</p>
            <p >Género: {gender}</p>
        </div>
    )
}