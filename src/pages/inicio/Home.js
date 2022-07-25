import React from 'react'
import Logo from '../../img/logo2.png'
import '../inicio/Home.css'
import { Link } from 'react-router-dom'
import Rooms from '../../img/aver.png'

const Home = () => {
  return (
      <div className='homee'>
      <header className='header-home'>
        <section className='logo-home'>
                <img src={Logo}></img>
            </section>
            <section className='buttons-index'>
                <Link to ='/login' className='button-login'><i class="fa-solid fa-user"></i>Iniciar Sesión</Link>
                <Link to='/registro' className='button-login'><i class="fa-solid fa-user-pen"></i>Registrarse</Link>
            </section>
      </header>
      <body className='body-home'>
        <div className='aiuda'>        <h1>Calidez, <br></br> elegancia <br></br>Y<br></br> comodidad </h1></div>

      </body>
      </div>
  )
}

export default Home;