import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro';

function App() {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');    

  const [error, setError] = useState(false); 
  
  const [noError, setNoError] = useState(false)
  
  const validarDatos = (e) => {

    e.preventDefault()
    var pattern=/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9\-]+(\.[a-z0-9\-]+)*(\.[a-z]{2,15})$/
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if(nombre === '' || email === '' || contraseña === '' || confirmarContraseña === '') {
        alert("todos los campos son obligatorios")
        setError(true);
        return
    }
        
    if(!pattern.test(email)){
        alert("ingrese un correo valido")
        setError(true)
        return
            
    }
    if (contraseña !== confirmarContraseña){
        alert ("las contraseñas no coinciden")
        setError(true)
        return
    }   
    if (!regex.test(contraseña)){
        alert("La contraseña debe tener al menos 8 caracteres y contener al menos una letra y un número.")
        setError(true)
        return
    } 
    
    setError(false)
    setNoError(true)
    setNombre('');
    setEmail('');
    setContraseña('');
    setConfirmarContraseña('');
   

}


  return (    
    <>
      <Registro 
        noError={noError}
        error={error}
        validarDatos={validarDatos}
        nombre={nombre}
        setNombre={setNombre}
        email={email}
        setEmail={setEmail}
        contraseña={contraseña}
        setContraseña={setContraseña}
        confirmarContraseña={confirmarContraseña}
        setConfirmarContraseña={setConfirmarContraseña}
      />
   </>
  )
}

export default App
