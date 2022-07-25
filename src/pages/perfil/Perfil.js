import { Link } from "react-router-dom";
<<<<<<< HEAD
import Footer from "../../components/footer/Footer";
import TextPerfil from "../../components/textperfil/TextPerfil";
import "./Perfil.css";
// import cambiarImagen from "./img/cambiar-imagen.svg";
import Cookies from 'universal-cookie';

let Perfil=()=>{

    const cookies = new Cookies();

    console.log('id: '+ cookies.get('id'));
    console.log('nombre: '+cookies.get('nombre'));
    console.log('apellido: '+cookies.get('apellido'));
    console.log('correo '+ cookies.get('email'));

=======


import "./Perfil.css";
import axios from 'axios';



const Perfil=({huesped,handleOpen,setDataModal})=>{

    const url="http://localhost:2000/huespedes/1";

    const handleEdit=()=>{
        handleOpen();
        setDataModal(huesped)
    }
>>>>>>> 421cb45a9ac0b33a0f387c0837bf1c93a4697af4
    return(
        <>
        <main>


                <div className="all-content-profile">

                <section className="image-profile">
<<<<<<< HEAD
                    <img src={cookies.get('img')} alt="imagen perfil" />
=======
                    <img  alt="imagen perfil"/>
>>>>>>> 421cb45a9ac0b33a0f387c0837bf1c93a4697af4
                    <Link to="/cambiar-foto">Cambiar foto</Link>
                </section>

                <section className="user-data-profile">

                    <div className="user-data-section">
                        <div className="data-content nombres">
                            <h6>Datos de</h6>
<<<<<<< HEAD
                            <p>{cookies.get('nombre')}</p><p>{cookies.get('apellido')}</p>
=======
                            <p>{huesped.nombre}</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content nombres">
                            <h6>Datos de</h6>
                            <p>{huesped.apellido}</p>
>>>>>>> 421cb45a9ac0b33a0f387c0837bf1c93a4697af4
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h6>Tipo de documento de identidad</h6>
<<<<<<< HEAD
                            <p>{cookies.get('tipodoc')}</p>
                        </div>
                        <div className="data-content">
                            <h6>Número de documento de identidad</h6>
                            <p>{cookies.get('numdoc')}</p>
=======
                            <p>{huesped.tipodoc}</p>
                        </div>
                        <div className="data-content">
                            <h6>Número de documento de identidad</h6>
                            <p>{huesped.numdoc}</p>
>>>>>>> 421cb45a9ac0b33a0f387c0837bf1c93a4697af4
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h6>Fecha de nacimiento</h6>
<<<<<<< HEAD
                            <p>{cookies.get('fnacimiento')}</p>
                        </div>
                        <div className="data-content">
                            <h6>Género</h6>
                            <p>{cookies.get('genero')}</p>
=======
                            <p>{huesped.fnacimiento}</p>
                        </div>
                        <div className="data-content">
                            <h6>Género</h6>
                            <p>{huesped.genero}</p>
>>>>>>> 421cb45a9ac0b33a0f387c0837bf1c93a4697af4
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h6>Correo</h6>
<<<<<<< HEAD
                            <p>{cookies.get('email')}</p>
                        </div>
                        <div className="data-content">
                            <h6>Teléfono de contacto</h6>
                            <p>{cookies.get('telefono')}</p>
=======
                            <p>{huesped.email}</p>
                        </div>
                        <div className="data-content">
                            <h6>Teléfono de contacto</h6>
                            <p>{huesped.telefono}</p>
>>>>>>> 421cb45a9ac0b33a0f387c0837bf1c93a4697af4
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h6>País de origen</h6>
<<<<<<< HEAD
                            <p>{cookies.get('paisorigen')}</p>
=======
                            <p>{huesped.pais}</p>
>>>>>>> 421cb45a9ac0b33a0f387c0837bf1c93a4697af4
                        </div>
                    </div>
                    <div className="container-button">
                        <button className="general-button" onClick={handleEdit}><Link to="/editar-perfil">Realizar cambios contacto</Link></button>
                    </div>
                </section>


                <section className="profile-password">
                    <div>
                        <h5>Contraseña</h5>
                        <p>*****************</p>
                    </div>
                    <div>
                        <button className="secundary-button"><Link to="/editar-contrasena">Cambiar contraseña</Link></button>
                    </div>
                </section>
            </div>
            
        </main>

        </>
    )
}

export default Perfil;