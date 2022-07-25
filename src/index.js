import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userregister from './pages/userregister/Userregister';
import Home from './pages/inicio/Home'
import Login from './pages/login/Login';
import Perfil from './pages/perfil/Perfil.js';
import Reservaciones from './pages/reservaciones/Reservaciones';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/registro' element={<Userregister/>}/>
        <Route path ='/login' element ={<Login/>}/>
        <Route path='/perfil' element ={<Perfil/>}/>
        <Route path='/reservaciones' element ={<Reservaciones></Reservaciones>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);