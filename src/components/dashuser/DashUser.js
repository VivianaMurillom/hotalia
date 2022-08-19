import React from 'react';
import '../dashuser/dashuser.css';
import logo from '../../img/LogoSolo.png';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const DashUser = (userId) => {

  const cookies = new Cookies();
  userId = cookies.get('id');

  const cerrarSesion=()=>{
    cookies.remove('id', {path: "/login"});
    cookies.remove('tipodoc', {path: "/login"});
    cookies.remove('numdoc', {path: "/login"});
    cookies.remove('nombre', {path: "/login"});
    cookies.remove('apellido', {path: "/login"});
    cookies.remove('fnacimiento', {path: "/login"});
    cookies.remove('genero', {path: "/login"});
    cookies.remove('email', {path: "/login"});
    cookies.remove('telefono', {path: "/login"});
    cookies.remove('paisorigen', {path: "/login"});
    cookies.remove('password', {path: "/login"});
    cookies.remove('tipouser', {path: "/login"});
    cookies.remove('img', {path: "/login"});
    window.location.href='../login';
    userId=null;
}

  return (
    <header className="header">
      <nav>
        <div className="nav_logo-text">
          <img src={logo} alt="" className="logo-nav" />
        </div>

        <input type="checkbox" id="check" />
        <label for="check" className="bar-btn">
          <i className="fa-solid fa-bars"></i>
        </label>
        <ul className="nav_menu-items">
          <li><Link to='/perfil'><i className="fa-solid fa-user"></i>Perfil</Link></li>
          <li><Link to='/reservaciones'><i className="fa-solid fa-address-book"></i>Reservaciones</Link></li>
          <li><Link to='/registro-habitacion'><i className="fa-solid fa-door-closed"></i>Habitaciones</Link></li>
          <li><button className='signup' onClick={cerrarSesion}>Cerrar sesión</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default DashUser;