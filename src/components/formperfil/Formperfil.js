import "./Formperfil.css";
import Swal from "sweetalert2";
import Input from "../../components/inputsforms/Input";
import {useState} from "react";
import {MensajeError} from "../../elements/Formularios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

let Formperfil=()=>{

    const [correo, cambiarCorreo] = useState({campo: '', valido: null});
    const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
    const [formularioValido,cambiarFormularioValido]= useState(null);

    const expresiones = {
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

    const actualizarDatos=(e)=>{
        e.preventDefault();

        if (
            correo.valido === 'true' &&
		    telefono.valido === 'true') {

            cambiarCorreo({campo: '', valido: null});
            cambiarTelefono({campo: '', valido: null});
            cambiarFormularioValido(true);

            Swal.fire(
            'Información actualizada',
            'Su información de perfil ha sido actualizada correctamente!',
            'success'
            )

        } else{
            cambiarFormularioValido(false);
        }
    }
    
    return(
        <>
        <section className="form-modify-profile">
            <h3>Editar datos de contacto</h3>

                <form action="" onSubmit={actualizarDatos}>
                <div className="form-sections-profile">
                    <div className="form-sections-profile">
                        <Input
                        label="Correo electrónico"
                        tipo="email"
                        name="correo"
                        estado={correo}
                        cambiarEstado={cambiarCorreo}
                        expresionRegular={expresiones.correo}
                        leyendaError="El correo debe cumplir las características requeridas, ej: mail@mail.com"/>
                    </div>
                    <div className="form-sections-profile">
                        <Input
                        label="Télefono de contacto"
                        tipo="number"
                        name="telefono"
                        estado={telefono}
                        cambiarEstado={cambiarTelefono}
                        expresionRegular={expresiones.telefono}
                        leyendaError="El telefono solo puede contener numeros entre 7 y 14 dígitos."
                        />

                    </div>
                </div>
                {formularioValido===false && <MensajeError>
                <p>
                <FontAwesomeIcon icon={faExclamationTriangle}/>
                <b>Error:</b> Por favor diligenciar el formulario correctamente.</p>
                </MensajeError>}
                <div className="form-profile-button">
                    <button type="submit" className="general-button">Guardar cambios</button>
                </div>
            </form>
        
        </section>
        </>
    )
}

export default Formperfil;