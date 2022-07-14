import TextPerfil from "../../components/textperfil/TextPerfil";
import Footer from "../../components/footer/Footer";
import "./Editarcontraseña.css";
import Swal from "sweetalert2";
import Input from "../../components/inputsforms/Input";
import {useState} from "react";
import {MensajeError} from "../../elements/Formularios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

let EditarContrasena=()=>{

    const [contraseniaActual, cambiarContraseniaActual] = useState({campo: '', valido: null});
	const [contrasenianueva, cambiarContraseniaNueva] = useState({campo: '', valido: null});
    const [contraseniaNueva2, cambiarContraseniaNueva2] = useState({campo: '', valido: null});
    const [formularioValido,cambiarFormularioValido]= useState(null);

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

    const changePassword=(e)=>{
        e.preventDefault();

        if (
            contraseniaActual.valido === 'true' &&
		    contrasenianueva.valido === 'true' &&
            contraseniaNueva2.valido === 'true') {

            cambiarContraseniaActual({campo: '', valido: null});
            cambiarContraseniaNueva({campo: '', valido: null});
            cambiarContraseniaNueva2({campo: '', valido: 'null'});
            cambiarFormularioValido(true);

            Swal.fire(
                'Contraseña actualizada',
                'Su contraseña ha sido actualizada correctamente!',
                'success'
            )

        } else{
            cambiarFormularioValido(false);
        }
    }

    return(
        <>
        <TextPerfil/>

        <section className="password-section">
            <h3>Cambiar contraseña</h3>

            <form action="" onSubmit={changePassword}>
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