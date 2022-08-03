import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userregister from './pages/userregister/Userregister';
import Userregisterval from './pages/userregister/Userregisterval';
import Home from './pages/inicio/Home'
import Login from './pages/login/Login';
import Perfil from './pages/perfil/Perfil.js';
import Reservaciones from './pages/reservaciones/Reservaciones';
import Prueba from './pages/Prueba';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/registro' element={<Userregister/>}/>
        <Route path='/registro-validacion' element={<Userregisterval/>}/>
        <Route path ='/login' element ={<Login/>}/>
        <Route path='/perfil' element ={<Perfil/>}/>
        <Route path='/prueba' element ={<Prueba/>}/>
        <Route path='/reservaciones' element ={<Reservaciones></Reservaciones>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);