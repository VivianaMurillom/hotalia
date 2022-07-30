import TextPerfil from "../../components/textperfil/TextPerfil";
import Footer from "../../components/footer/Footer";
import "./Editarcontraseña.css";
import Swal from "sweetalert2";
import Input from "../../components/inputsforms/Input";
import {useState, useEffect} from "react";
import {MensajeError} from "../../elements/Formularios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Cookies from 'universal-cookie';
import axios from "axios";

let EditarContrasena=(userId,userPassword)=>{

    const url="https://hoteliakuepa.herokuapp.com/users";

    const cookies = new Cookies();

    userId = cookies.get('_id');
    userPassword= cookies.get('password');

    console.log(userPassword);

    const getData=async()=>{
        const response=axios.get(`${url}/${userId}`);
        return response;
    }

    const [contraseniaActual, cambiarContraseniaActual] = useState({campo: '', valido: null});
	const [contrasenianueva, cambiarContraseniaNueva] = useState({campo: '', valido: null});
    const [contraseniaNueva2, cambiarContraseniaNueva2] = useState({campo: '', valido: null});
    const [formularioValido,cambiarFormularioValido]= useState(null);
    const [list,setList]=useState([]);
    const [upList, setUpList]=useState(false);

    const expresion = {
		password: /^.{4,12}$/, // 4 a 12 digitos.
	}

    const validarContrasenia2=()=>{
        if(contrasenianueva.campo.length>0){
          if(contrasenianueva.campo!==contraseniaNueva2.campo){
            cambiarContraseniaNueva2((prevState)=>{
            return{...prevState,valido:'false'}
            });
          }else{
            cambiarContraseniaNueva2((prevState)=>{
              return{...prevState,valido:'true'}
              });
          }
        }
    }

    const changePassword=async(e)=>{
        e.preventDefault();

        if (
            userPassword===contraseniaActual.campo &&
            contraseniaActual.valido === 'true' &&
            contrasenianueva.valido === 'true' &&
            contraseniaNueva2.valido === 'true') {

                const response=await axios.put(`${url}/${userId}`,{
                    id: userId,
                    tipodoc: cookies.get('tipodoc'),
                    numdoc: cookies.get('numdoc'),
                    nombre: cookies.get('nombre'),
                    apellido: cookies.get('apellido'),
                    fnacimiento: cookies.get('fnacimiento'),
                    genero: cookies.get('genero'),
                    email:cookies.get('email'),
                    telefono:cookies.get('telefono'),
                    paisorigen: cookies.get('paisorigen'),
                    password: contrasenianueva.campo,
                    tipouser: cookies.get('tipouser'),
                    img:cookies.get('img')
                });

                if (response.status===200) {

                    cambiarContraseniaActual({campo: '', valido: null});
                    cambiarContraseniaNueva({campo: '', valido: null});
                    cambiarContraseniaNueva2({campo: '', valido: 'null'});
                    cambiarFormularioValido(true);

                    setUpList(!upList);

                    Swal.fire(
                        'Contraseña actualizada',
                        'Su contraseña ha sido actualizada correctamente!',
                        'success'
                    )
                }
        } else{
            cambiarFormularioValido(false);
        }
            
        
    }

    useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);
        })
    },[upList]);

    console.log(list);

    return(
        <>
        <TextPerfil/>

        <section className="password-section">
            <h3>Cambiar contraseña</h3>

            <form action="" onSubmit={changePassword} className="form-change-password">
                <div className="passw">
                    <Input
                    label="Contraseña actual"
                    tipo="password"
                    name="contraseniaActual"
                    estado={contraseniaActual}
                    cambiarEstado={cambiarContraseniaActual}
                    expresionRegular={expresion.password}
                    leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."/>
                </div>
                <div className="passw">
                    <Input
                    label="Contraseña nueva"
                    tipo="password"
                    name="contrasenianueva"
                    estado={contrasenianueva}
                    cambiarEstado={cambiarContraseniaNueva}
                    expresionRegular={expresion.password}
                    leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."/>
                </div>
                <div className="passw">
                    <Input
                    label="Confirmar contraseña nueva"
                    tipo="password"
                    name="contraseniaNueva2"
                    estado={contraseniaNueva2}
                    cambiarEstado={cambiarContraseniaNueva2}
                    funcion={validarContrasenia2}
                    leyendaError="Ambas contraseñas deben ser iguales."/>
                </div>

                {formularioValido===false && <MensajeError>
                <p>
                <FontAwesomeIcon icon={faExclamationTriangle}/>
                <b>Error:</b> Por favor diligenciar el formulario correctamente o validar la digitación de su contraseña actual.</p>
                </MensajeError>}


                <div className="form-password-button">
                    <button type="submit" className="general-button">Guardar cambios</button>
                </div>
            </form>
        </section>

        <Footer/>
        </>
    )
}

export default EditarContrasena;