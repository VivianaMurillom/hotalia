import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import TextPerfil from "../../components/textperfil/TextPerfil";
import "./Perfil.css";
import Cookies from 'universal-cookie';
import DashUser from '../../components/dashuser/DashUser';
import noImagen from '../../img/Foto-sin-imagen.jpg';

let Perfil=()=>{

    const cookies = new Cookies();

    console.log('_id: '+ cookies.get('_id'));
    console.log('nombre: '+cookies.get('nombre'));
    console.log('apellido: '+cookies.get('apellido'));

    let fecha= new Date(cookies.get('fnacimiento'));

    let nacimientoFecha=fecha.toLocaleDateString();

    let imagenPerfil='/static/media/Foto-sin-imagen.94960487527507d8774f.jpg';

    console.log(cookies.get('img'));

    console.log(imagenPerfil==={});

    // if (imagenPerfil===null) {
    //     imagenPerfil='/static/media/Foto-sin-imagen.94960487527507d8774f.jpg';
    //     return
    // }

    console.log(imagenPerfil);
    console.log(noImagen)

    return(
        <>
        <DashUser/>
        <main>
        <TextPerfil/>

                <div className="all-content-profile">

                <section className="image-profile">
                    <img src={imagenPerfil} class="rounded-circle" alt="imagen de perfil" />
                    <Link to="/cambiar-foto">Cambiar foto</Link>
                </section>

                <section className="user-data-profile">

                    <div className="user-data-section">
                        <div className="data-content nombres">
                            <h6>Datos de</h6>
                            <p>{cookies.get('nombre')}</p><p>{cookies.get('apellido')}</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h6>Tipo de documento de identidad</h6>
                            <p>{cookies.get('tipodoc')}</p>
                        </div>
                        <div className="data-content">
                            <h6>Número de documento de identidad</h6>
                            <p>{cookies.get('_id')}</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h6>Fecha de nacimiento</h6>
                            <p>{nacimientoFecha}</p>
                        </div>
                        <div className="data-content">
                            <h6>Género</h6>
                            <p>{cookies.get('genero')}</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h6>Correo</h6>
                            <p>{cookies.get('email')}</p>
                        </div>
                        <div className="data-content">
                            <h6>Teléfono de contacto</h6>
                            <p>{cookies.get('telefono')}</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h6>País de origen</h6>
                            <p>{cookies.get('paisorigen')}</p>
                        </div>
                    </div>
                    <div className="container-button">
                        <button className="general-button"><Link to="/editar-perfil">Realizar cambios contacto</Link></button>
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