import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";

function Registro(props){

    return (


        <div className="formulario">
            <h1>Crea una cuenta</h1>            
            <SocialButton btn="fa-brands fa-facebook fa-3x"/>
            <SocialButton btn="fa-brands fa-github fa-3x"/>
            <SocialButton btn="fa-brands fa-linkedin-in fa-3x"/>
            <h6>O usa tu email para registrarte</h6>           
            <Formulario 
                validarDatos={props.validarDatos}
                nombre={props.nombre}
                setNombre={props.setNombre}
                email={props.email}
                setEmail={props.setEmail}
                contraseña={props.contraseña}
                setContraseña={props.setContraseña}
                confirmarContraseña={props.confirmarContraseña}
                setConfirmarContraseña={props.setConfirmarContraseña}
                error={props.error}
                noError={props.noError}

                />         
        </div>
    )
}

export default Registro