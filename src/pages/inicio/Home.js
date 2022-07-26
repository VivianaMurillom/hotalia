import React from 'react';
import '../inicio/Home.css';
import { Link } from 'react-router-dom';
// import Rooms from '../../img/aver.png';
import Header from '../../components/header/Header';

const Home = () => {
  return (
      <>
      <Header/>
      <div className='homee'>
      <body className='body-home'>
        <div className='aiuda'>        <h1>Calidez, <br></br> elegancia <br></br>Y<br></br> comodidad </h1>
          <div className='button-search-room'>
            <Link to='/buscar-habitacion' className="general-button">Buscar habitación</Link>
          </div>
        </div>
      </body>
      </div>
      </>
  )
}

export default Home;