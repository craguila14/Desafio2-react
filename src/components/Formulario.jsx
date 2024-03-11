import React from "react";
import Alerta from "./Alert";

const Formulario = (props) => {    

    return (
        <>
        <form onSubmit={props.validarDatos}>
            <div className="form-group">
                <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Nombre"
                onChange={(e) => props.setNombre(e.target.value)}
                value={props.nombre}
    
            />
            </div>
            <div className="form-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="tuemail@ejemplo.com"                
                onChange={(e) => props.setEmail(e.target.value)}
                value={props.email}
            />
            </div>
            <div className="form-group">
                <input
                type="password"
                name="contraseña"
                className="form-control" 
                placeholder="Contraseña" 
                onChange={(e) => props.setContraseña(e.target.value)}
                value={props.contraseña}  
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                name="Confirmar"
                className="form-control"
                placeholder="Confirma tu contraseña"
                onChange={(e) => props.setConfirmarContraseña(e.target.value)}
                value={props.confirmarContraseña}
                />
            </div>
            <button type="submit" className="btn
            btn-success">Registrarse</button>
             {props.error ? <Alerta color="danger" text="Formulario no válido"/> : null}
             {props.noError ? <Alerta color="success" text="Formulario enviado correctamente"/> : null}
             
           
        </form>
        </>
    )
}

export default Formulario


