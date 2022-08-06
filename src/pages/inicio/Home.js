import React from 'react'
import Logo from '../../img/logo2.png'
import '../inicio/Home.css'
import { Link } from 'react-router-dom'
import Rooms from '../../img/aver.png'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='indeex'>
    <header className='header-home'>
        <section className='logo'>
            <img src={Logo} alt='Logo de Hotelia'></img>
        </section>
        <section className='buttons-index'>
            <Link to ='/login' className='button-login'><i class="fa-solid fa-user"></i>Iniciar Sesión</Link>
            <Link to='/registro-validacion' className='button-login'><i class="fa-solid fa-user-pen"></i>Registrarse</Link>
        </section>
    </header>
    <body className='body-index'>
        <section className='reservation-index'>
            <Link to="/" className='botton-start'></Link>
        </section>
        <section className='reservation-images'>
            <img src={Rooms} alt='Logo de Hotelia'></img>        
            </section>
        <section className='info-index'>
          <p className='info-c'>
            CALIDEZ, ELEGANCIA Y COMODIDAD 
          </p>
        </section>
        <Footer></Footer>
    </body>
    </div>
  )
}

export default Home;