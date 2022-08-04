import React from 'react'
import '../userregister/userregister.css'
import Logo from '../../img/logo2.png'

import { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import Input from '../../components/inputsforms/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../../elements/Formularios';



const Userregisterval = () => {

const [data, setData] = useState({
    id: "", nombre: "", apellido: "", tipodoc: "", numdoc: "", fnacimiento: "", genero: "",
    email: "", imagen: "", telefono: "", paisorigen: "", password: ""
});

const handleChange = ({ target }) => {

    setData({
        ...data,
        [target.name]: target.value
    })
}

const url = "http://localhost:4000/huespedes";


const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(url, data);
    if (response.status === 201) {
        Swal.fire(
            '¡Registrado exitoso!',
            'success'
        )
    } else {
        Swal.fire(
            '¡Error!',
            'Hubo un problema al registrarse',
            'error'
        )
    }
}
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [apellido, cambiarApellido] = useState({ campo: '', valido: null });
    const [tipodoc, cambiarTipoDoc] = useState({ campo: '', valido: null });
    const [numdoc, cambiarNumDoc] = useState({ campo: '', valido: null });
    const [imagen, cambiarImagen] = useState({ campo: '', valido: null });
    const [fnacimiento, cambiarFNacimiento] = useState({ campo: '', valido: null });
    const [genero, cambiarGenero] = useState({ campo: '', valido: null });
    const [paisorigen, cambiarPaisOrigen] = useState({ campo: '', valido: null });
    const [password, cambiarPassword] = useState({ campo: '', valido: null });
    const [password2, cambiarPassword2] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [telefono, cambiarTelefono] = useState({ campo: '', valido: null });
    const [terminos, cambiarTerminos] = useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.

    }

    const validarPassword2 = () => {
        if (password.campo.length > 0) {
            if (password.campo !== password2.campo) {
                cambiarPassword2((prevState) => {
                    return { ...prevState, valido: 'false' }
                });
            } else {
                cambiarPassword2((prevState) => {
                    return { ...prevState, valido: 'true' }
                });
            }
        }
    }

    const onChangeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (
            nombre.valido === 'true' &&
            apellido.valido === 'true' &&
            tipodoc.valido === 'true' &&
            numdoc.valido === 'true' &&
            genero.valido === 'true' &&
            paisorigen.valido === 'true' &&
            password.valido === 'true' &&
            password2.valido === 'true' &&
            correo.valido === 'true' &&
            telefono.valido === 'true' &&
            terminos
        ) {
            cambiarFormularioValido(true);
            cambiarNombre({ campo: '', valido: null });
            cambiarApellido({ campo: '', valido: null });
            cambiarTipoDoc({ campo: '', valido: null });
            cambiarNumDoc({ campo: '', valido: null });
            cambiarPaisOrigen({ campo: '', valido: null });
            cambiarGenero({ campo: '', valido: null });
            cambiarPassword({ campo: '', valido: null });
            cambiarPassword2({ campo: '', valido: 'null' });
            cambiarCorreo({ campo: '', valido: null });
            cambiarTelefono({ campo: '', valido: null });

            // ... 
        } else {
            cambiarFormularioValido(false);
        }
    }

    return (
        <>
            <body className='body-registre'>
                <section className='info-registre'>

                    <h1>¡Regístrate en Hotelia! <br></br>
                        Obtendrás muchos beneficios
                    </h1>
                    <img src={Logo}></img>
                </section>
                <section className='registeru'>
                    <div className='login-data'>






                        <Formulario action="" onSubmit={onSubmit}>
                            <Input
                                estado={nombre}
                                cambiarEstado={cambiarNombre}
                                tipo="text"
                                label="Nombre"
                                placeholder=""
                                name="usuario"
                                leyendaError="El nombre solo puede contener letras y espacios."
                                expresionRegular={expresiones.nombre}
                            />
                            <Input
                                estado={apellido}
                                cambiarEstado={cambiarApellido}
                                tipo="text"
                                label="Apellido"
                                placeholder=""
                                name="apellido"
                                leyendaError="El apellido solo puede contener letras y espacios."
                                expresionRegular={expresiones.nombre}
                            />
                            <Input
                                estado={tipodoc}
                                cambiarEstado={cambiarTipoDoc}
                                tipo="text"
                                label="Tipo de Documento"
                                placeholder="4491234567"
                                name="tipodoc"
                                leyendaError="El tipo de documento solo puede contener letras y espacios."
                                expresionRegular={expresiones.nombre}
                            />
                            <Input
                                estado={numdoc}
                                cambiarEstado={cambiarNumDoc}
                                tipo="text"
                                label="Número de Documento"
                                placeholder="4491234567"
                                name="numdoc"
                                leyendaError="El número de documento solo puede contener números."
                                expresionRegular={expresiones.telefono}
                            />
                            <Input
                                estado={fnacimiento}
                                cambiarEstado={cambiarFNacimiento}
                                tipo="date"
                                label="Fecha de Nacimiento"
                                placeholder="20-07-1980"
                                name="numdoc"

                            />
                            <Input
                                estado={genero}
                                cambiarEstado={cambiarGenero}
                                tipo="text"
                                label="Genero"
                                placeholder=""
                                name="genero"
                                leyendaError="El género sólo puede contener letras."
                                expresionRegular={expresiones.nombre}

                            />
                            <Input
                                estado={imagen}
                                cambiarEstado={cambiarImagen}
                                tipo="file"
                                label="Foto (opcional)"
                                placeholder=""
                                name="foto"
                            />
                            <Input
                                estado={paisorigen}
                                cambiarEstado={cambiarPaisOrigen}
                                tipo="text"
                                label="País de origen"
                                placeholder=""
                                name="paisorigen"
                                leyendaError="El país de origen sólo puede tener letras"
                                expresionRegular={expresiones.nombre}

                            />
                            <Input
                                estado={password}
                                cambiarEstado={cambiarPassword}
                                tipo="password"
                                label="Contraseña"
                                name="password1"
                                leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                                expresionRegular={expresiones.password}
                            />
                            <Input
                                estado={password2}
                                cambiarEstado={cambiarPassword2}
                                tipo="password"
                                label="Repetir Contraseña"
                                name="password2"
                                leyendaError="Ambas contraseñas deben ser iguales."
                                funcion={validarPassword2}
                            />
                            <Input
                                estado={correo}
                                cambiarEstado={cambiarCorreo}
                                tipo="email"
                                label="Correo Electrónico"
                                placeholder="john@correo.com"
                                name="correo"
                                leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                                expresionRegular={expresiones.correo}
                            />
                            <Input
                                estado={telefono}
                                cambiarEstado={cambiarTelefono}
                                tipo="text"
                                label="Teléfono"
                                placeholder="4491234567"
                                name="telefono"
                                leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
                                expresionRegular={expresiones.telefono}
                            />



                            <ContenedorTerminos>
                                <Label>
                                    <input
                                        type="checkbox"
                                        name="terminos"
                                        id="terminos"
                                        checked={terminos}
                                        onChange={onChangeTerminos}
                                    />
                                    Acepto los Terminos y Condiciones
                                </Label>
                            </ContenedorTerminos>
                            {formularioValido === false && <MensajeError>
                                <p>
                                    <FontAwesomeIcon icon={faExclamationTriangle} />
                                    <b>Error:</b> Por favor rellena el formulario correctamente.
                                </p>
                            </MensajeError>}
                            <ContenedorBotonCentrado>
                                <Boton type="submit">Enviar</Boton>
                                {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
                            </ContenedorBotonCentrado>
                        </Formulario>
                    </div>
                </section>
            </body>
        </>
    )
}

export default Userregisterval;