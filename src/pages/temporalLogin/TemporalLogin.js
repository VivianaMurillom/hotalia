import Input from "../../components/inputsforms/Input";
import {useState, useEffect} from "react";
import Cookies from 'universal-cookie';
import {MensajeError} from "../../elements/Formularios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

let TemporalLogin=()=>{

    const url="http://localhost:4000/huespedes";

    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }

    const cookies = new Cookies();

    const [email, cambiarEmail] = useState({campo: '', valido: null});
    const [contrasenia, cambiarContrasenia] = useState({campo: '', valido: null});
    const [list,setList]=useState([]);
    const [upList, setUpList]=useState(false);
    const [formularioValido,cambiarFormularioValido]= useState(null);

    const expresiones = {
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		contrasenia: /^.{4,12}$/
	}

    let iniciarSesion = async(e)=>{
        e.preventDefault();

        await axios.get(url,{params: {email:email.campo, contrasenia: contrasenia.campo}})
        .then(response=>{
            return response.data;})

        .then(response=>{
            if( email.valido === 'true' &&
                contrasenia.valido === 'true'&&
                response.length>0){

                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/perfil"});
                cookies.set('tipodoc', respuesta.tipodoc, {path: "/perfil"});
                cookies.set('numdoc', respuesta.numdoc, {path: "/perfil"});
                cookies.set('nombre', respuesta.nombre, {path: "/perfil"});
                cookies.set('apellido', respuesta.apellido, {path: "/perfil"});
                cookies.set('fnacimiento', respuesta.fnacimiento, {path: "/perfil"});
                cookies.set('genero', respuesta.genero, {path: "/perfil"});
                cookies.set('email', respuesta.email, {path: "/perfil"});
                cookies.set('telefono', respuesta.telefono, {path: "/perfil"});
                cookies.set('paisorigen', respuesta.paisorigen, {path: "/perfil"});
                cookies.set('password', respuesta.password, {path: "/perfil"});
                cookies.set('tipouser', respuesta.tipouser, {path: "/perfil"});
                cookies.set('img', respuesta.img, {path: "/perfil"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);
                window.location.href="./perfil";

                cambiarEmail({campo: '', valido: null});
                cambiarContrasenia({campo: '', valido: null});
                cambiarFormularioValido(true);

                setUpList(!upList);
            } else{
                alert('El usuario o la contraseña no son correctos');
                cambiarFormularioValido(false);
            }})
    }

    useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);
        })
    },[upList]);

    console.log(list);
    
    return(
        <>
        <h1>Login Temporal de pruebas</h1>

        <section>
            <form action="" onSubmit={iniciarSesion}>
            <div className="form-sections-profile">
                        <Input
                        label="Correo electrónico"
                        tipo="email"
                        name="email"
                        estado={email}
                        cambiarEstado={cambiarEmail}
                        expresionRegular={expresiones.correo}
                        leyendaError="El correo debe cumplir las características requeridas, ej: mail@mail.com"/>
                    </div>
                    <div className="form-sections-profile">
                        <Input
                        label="Contraseña"
                        tipo="password"
                        name="contrasenia"
                        estado={contrasenia}
                        cambiarEstado={cambiarContrasenia}
                        expresionRegular={expresiones.contrasenia}
                        leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                        />
                    </div>
                    {formularioValido===false && <MensajeError>
                        <p>
                            <FontAwesomeIcon icon={faExclamationTriangle}/>
                            <b>Error:</b> El correo o la contraseña están incorrectos.
                        </p>
                    </MensajeError>}
                    <div className="form-profile-button">
                        <button type="submit" className="general-button">Ingresar</button>
                    </div>
            </form>
        </section>
        </>
    )
}

export default TemporalLogin;