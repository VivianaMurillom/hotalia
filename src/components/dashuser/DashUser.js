import React from 'react'
import '../dashuser/dashuser.css'

import logo from '../../img/LogoSolo.png'
import { Link } from 'react-router-dom'

const DashUser = () => {
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
                        <li><Link to='/' className='signup'>Cerrar sesión</Link></li>


        </ul>
      </nav>
    </header>
  )
}

export default DashUser;