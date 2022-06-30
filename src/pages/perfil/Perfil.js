import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import TextPerfil from "../../components/textperfil/TextPerfil";
import "./Perfil.css";
import noImagen from "./img/Foto-sin-imagen.svg";

let Perfil=()=>{
    return(
        <>
        <main>

            <TextPerfil/>

            <div className="all-content-profile">
                
                <section className="image-profile">
                    <img src={noImagen} alt="imagen perfil"/>
                    <Link to="#">Cambiar foto</Link>
                </section>

            
                <section className="user-data-profile">
                    <div className="user-data-section">
                        <div className="data-content">
                            <h3>Nombres</h3>
                            <p>Pepito Andres</p>
                        </div>
                        <div className="data-content">
                            <h3>Apellido</h3>
                            <p>Perez Valvuena</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h3>Tipo de documento de identidad</h3>
                            <p>Cédula de ciudadanía</p>
                        </div>
                        <div className="data-content">
                            <h3>Número de documento de identidad</h3>
                            <p>1234567890</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h3>Fecha de nacimiento</h3>
                            <p>24/06/1996</p>
                        </div>
                        <div className="data-content">
                            <h3>Género</h3>
                            <p>Masculino</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h3>Correo</h3>
                            <p>pepito@mail.com</p>
                        </div>
                        <div className="data-content">
                            <h3>Teléfono de contacto</h3>
                            <p>315 369 3659</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h3>País de origen</h3>
                            <p>Colombia</p>
                        </div>
                    </div>
                    <div className="container-button">
                        <button className="general-button"><Link to="/editar-perfil">Realizar cambios</Link></button>
                    </div>
                </section>

                <section className="profile-password">
                    <div>
                        <h3>Contraseña</h3>
                        <p>*****************</p>
                    </div>
                    <div>
                        <button className="general-button"><Link to="/editar-contrasena">Cambiar contraseña</Link></button>
                    </div>
                </section>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export default Perfil;