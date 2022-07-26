import React from 'react';
import '../dashuser/dashuser.css';
import logo from '../../img/LogoSolo.png';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const DashUser = () => {

  const cookies = new Cookies();

  const cerrarSesion=()=>{
    cookies.remove('id', {path: "/login"});
    cookies.remove('apellido_paterno', {path: "/login"});
    cookies.remove('apellido_materno', {path: "/login"});
    cookies.remove('nombre', {path: "/login"});
    cookies.remove('username', {path: "/login"});
    window.location.href='../../pages/login';
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
        <ul class="nav_menu-items">
          <li><Link to='/perfil'><i class="fa-solid fa-user"></i>Perfil</Link></li>
          <li><Link to='/prueba'><i class="fa-solid fa-address-book"></i>Reservaciones</Link></li>
          <li><Link to='/prueba'><i class="fa-solid fa-door-closed"></i>Habitaciones</Link></li>
          <li><button className='signup' onClick={cerrarSesion}>Cerrar sesión</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default DashUser;