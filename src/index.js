import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userregisterval from './pages/userregister/Userregisterval';
import Home from './pages/inicio/Home'
import Login from './pages/login/Login';
import Perfil from './pages/perfil/Perfil.js';
import Reservaciones from './pages/reservaciones/Reservaciones';
import EditarPerfil from './pages/editarperfil/EditarPerfil';
import EditarContrasena from './pages/editarcont/EditarContrasena';
import CambiarFoto from './pages/cambiarfoto/CambiarFoto';
import BuscarHabitacion from './pages/buscarhabita/BuscarHabitacion';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/editar-perfil" element={<EditarPerfil />} />
        <Route path="/editar-contrasena" element={<EditarContrasena />} />
        <Route path="/cambiar-foto" element={<CambiarFoto />} />
        <Route path="/buscar-habitacion" element={<BuscarHabitacion />} />
        <Route path='/' element ={<Home/>}/>
        <Route path='/registro-validacion' element={<Userregisterval/>}/>
        <Route path ='/login' element ={<Login/>}/>
        <Route path='/reservaciones' element ={<Reservaciones />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);