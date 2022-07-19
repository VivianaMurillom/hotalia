import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Perfil from './pages/perfil/Perfil';
import EditarPerfil from './pages/editarperfil/EditarPerfil';
import EditarContrasena from './pages/editarcont/EditarContrasena';
import CambiarFoto from './pages/cambiarfoto/CambiarFoto';
import 'bootstrap/dist/css/bootstrap.min.css';
import BuscarHabitacion from './pages/buscarhabita/BuscarHabitacion';
import Reservaciones from './pages/reservaciones/Reservaciones';
import TemporalLogin from './pages/temporalLogin/TemporalLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/editar-perfil" element={<EditarPerfil />} />
        <Route path="/editar-contrasena" element={<EditarContrasena />} />
        <Route path="/cambiar-foto" element={<CambiarFoto />} />
        <Route path="/reservaciones" element={<Reservaciones />} />
        <Route path="/buscar-habitacion" element={<BuscarHabitacion />} />
        <Route path="/Login-pruebas" element={<TemporalLogin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);