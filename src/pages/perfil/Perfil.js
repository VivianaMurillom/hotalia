import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import TextPerfil from "../../components/textperfil/TextPerfil";
import "./Perfil.css";
import cambiarImagen from "./img/cambiar-imagen.svg";

let Perfil=()=>{
    return(
        <>
        <main>

            <TextPerfil/>

            <div className="all-content-profile">
                
                <section className="image-profile">
                    <img src={cambiarImagen} alt="imagen perfil"/>
                    <Link to="/cambiar-foto">Cambiar foto</Link>
                </section>

            
                <section className="user-data-profile">
                    <div className="user-data-section">
                        <div className="data-content nombres">
                            <h6>Datos de</h6>
                            <p>Pepito Andrés Perez Valvuena</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h6>Tipo de documento de identidad</h6>
                            <p>Cédula de ciudadanía</p>
                        </div>
                        <div className="data-content">
                            <h6>Número de documento de identidad</h6>
                            <p>1234567890</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h6>Fecha de nacimiento</h6>
                            <p>24/06/1996</p>
                        </div>
                        <div className="data-content">
                            <h6>Género</h6>
                            <p>Masculino</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h6>Correo</h6>
                            <p>pepito@mail.com</p>
                        </div>
                        <div className="data-content">
                            <h6>Teléfono de contacto</h6>
                            <p>315 369 3659</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h6>País de origen</h6>
                            <p>Colombia</p>
                        </div>
                    </div>
                    <div className="container-button">
                        <button className="general-button"><Link to="/editar-perfil">Realizar cambios de contacto</Link></button>
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
        <Footer/>
        </>
    )
}

export default Perfil;