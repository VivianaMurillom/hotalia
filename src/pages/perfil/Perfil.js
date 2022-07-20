import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import TextPerfil from "../../components/textperfil/TextPerfil";
import "./Perfil.css";
import cambiarImagen from "./img/cambiar-imagen.svg";
import Cookies from 'universal-cookie';
import axios from "axios";

let Perfil=()=>{

    const cookies = new Cookies();

    userId=cookies.get('id');
    
    // const usuarioLoggeado = window.localStorage.getItem(cookies.get('id'));
    
    const url="http://localhost:4000/huespedes/id";

    const getData=async()=>{
        const response=axios.get(`${url}/${userId}`);
        return response
    }

    // const [list,setList]=useState([]);
    // const [upList, setUpList]=useState(false);

    // useEffect(()=>{
    //     getData().then((response)=>{
    //         setList(response.data);
    //     })
    // },[upList]);

    // console.log(list);

    console.log('id: '+ cookies.get('id'));
    console.log('nombre: '+cookies.get('nombre'));
    console.log('apellido: '+cookies.get('apellido'));

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
                            <p>{cookies.get('apellido')}</p><p>{cookies.get('apellido')}</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h6>Tipo de documento de identidad</h6>
                            <p>{cookies.get('tipodoc')}</p>
                        </div>
                        <div className="data-content">
                            <h6>Número de documento de identidad</h6>
                            <p>{cookies.get('numdoc')}</p>
                        </div>
                    </div>
                    <div className="user-data-section">
                        <div className="data-content">
                            <h6>Fecha de nacimiento</h6>
                            <p>{cookies.get('fnacimiento')}</p>
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