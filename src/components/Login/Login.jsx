import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css";

export default function Login() {
  
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate(); 
  console.log(nombre, contraseña);

  function validacion() {
    if (nombre === 'admin' && contraseña === '123') {
      navigate('/home');
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  }
 
  return (
    <>
      <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: "100vh" }}>      
        <div className="card form-signin w-100 m-auto">
        <img className='px-4 py-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png" alt="" style={{width:'auto'}}/>
          <form className='d-flex flex-column align-items-center'>
            <img className="my-4" src="https://custom-doodle.com/wp-content/uploads/doodle/pokemon-snorlax-pixel/pokemon-snorlax-pixel-doodle.gif" alt="" width="80" />
            <h1 className="h3 mb-3 fw-normal">Iniciar Sesión</h1>
            <div className="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
              <label for="floatingInput">Usuario</label>
            </div>
            <div className="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={contraseña} onChange={(e)=> setContraseña(e.target.value)}/>
              <label for="floatingPassword">Contraseña</label>
            </div>
            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">Recordarme</label>
            </div>
            <button onClick={validacion} class="btn btn-danger w-25 py-2" type="submit">Ingresar</button>
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
          </form>
          <section className='card w-100'>
            <ul className="list-group list-group-flush text-start">
              <li className="list-group-item">Usuario: {nombre}</li>
              <li className="list-group-item">Contraseña: {contraseña}</li>   
            </ul>
          </section> 
        </div>
      </div>
    </>
  )
}
