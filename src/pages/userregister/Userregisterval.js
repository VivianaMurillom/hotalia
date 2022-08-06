import React from 'react'
import '../userregister/userregister.css'
import Logo from '../../img/logo2.png'
import { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Input from '../../components/inputsforms/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../../elements/Formularios';

const Userregisterval = () => {

    const url = "http://localhost:4000/huespedes";

    const getData=async()=>{
    const response=axios.get(url);
    return response;
    }

    const handleSubmit = async (e) => {
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
        
            const response=await axios.post(url,{
                'tipodoc': tipodoc.campo,
                'numdoc': numdoc.campo,
                'nombre': nombre.campo,
                'apellido': apellido.campo,
                'fnacimiento': fnacimiento.campo,
                'genero': genero.campo,
                'email': correo.campo,
                'telefono': telefono.campo,
                'paisorigen': paisorigen.campo,
                'password': password.campo,
                'tipouser': 'Huésped',
                'img':'',
                'reservas': []
            });
        
            if(response.status===201){
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

                setUpList(!upList); 

                Swal.fire(
                    '¡Usuario registrado correctamente!',
                    'Bienvenido/a, por favor inicie sesión.',
                    'success'
                )
            }
        } else {
            Swal.fire(
                '¡Error!',
                'Hubo un problema al registrarse',
                'error'
            )
            cambiarFormularioValido(false);
        }
}
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [apellido, cambiarApellido] = useState({ campo: '', valido: null });
    const [tipodoc, cambiarTipoDoc] = useState({ campo: '', valido: null });
    const [numdoc, cambiarNumDoc] = useState({ campo: '', valido: null });
    // const [imagen, cambiarImagen] = useState({ campo: '', valido: null });
    const [fnacimiento, cambiarFNacimiento] = useState({ campo: '', valido: null });
    const [genero, cambiarGenero] = useState({ campo: '', valido: null });
    const [paisorigen, cambiarPaisOrigen] = useState({ campo: '', valido: null });
    const [password, cambiarPassword] = useState({ campo: '', valido: null });
    const [password2, cambiarPassword2] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [telefono, cambiarTelefono] = useState({ campo: '', valido: null });
    const [terminos, cambiarTerminos] = useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const [upList, setUpList]=useState(false);
    const [list,setList]=useState([]);

    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.

    }

    const onChangeTerminos=(e)=>{
        cambiarTerminos(e.target.checked);
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

    useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);
        })
    },[upList]);


    return (
        <>
            <body className='body-registre'>
                <section className='info-registre'>

                    <h1>¡Regístrate en Hotelia! <br></br>
                        Obtendrás muchos beneficios
                    </h1>
                    <img src={Logo} alt='Logo de Hotelia'></img>
                </section>
                <section className='registeru'>
                    <div className='login-data'>

                        <Formulario action="" onSubmit={handleSubmit}>
                            <Input
                                label="Nombre"
                                tipo="text"
                                name="nombre"
                                estado={nombre}
                                cambiarEstado={cambiarNombre}
                                expresionRegular={expresiones.nombre}
                                leyendaError="El nombre solo puede contener letras y espacios."
                            />
                            <Input
                                label="Apellido"
                                tipo="text"
                                name="apellido"
                                estado={apellido}
                                cambiarEstado={cambiarApellido}
                                expresionRegular={expresiones.nombre}
                                leyendaError="El apellido solo puede contener letras y espacios."
                            />
                            <Input
                                label="Tipo de documento"
                                tipo="text"
                                name="tipodoc"
                                estado={tipodoc}
                                cambiarEstado={cambiarTipoDoc}
                                placeholder="Cédula de ciudadanía"
                                expresionRegular={expresiones.nombre}
                                leyendaError="El tipo de documento solo puede contener letras y espacios."
                            />
                            <Input
                                label="Número de documento"
                                tipo="text"
                                name="numdoc"
                                estado={numdoc}
                                cambiarEstado={cambiarNumDoc}
                                placeholder="4491234567"
                                expresionRegular={expresiones.telefono}
                                leyendaError="El número de documento solo puede contener números."
                            />
                            <Input
                                label="Fecha de nacimiento"
                                tipo="date"
                                name="fnacimiento"
                                estado={fnacimiento}
                                cambiarEstado={cambiarFNacimiento}
                                placeholder="20-07-1980"
                                requeried
                            />
                            <Input
                                label="Genero"
                                tipo="text"
                                name="genero"
                                estado={genero}
                                cambiarEstado={cambiarGenero}
                                expresionRegular={expresiones.nombre}
                                leyendaError="El género sólo puede contener letras."
                            />
                            {/* <Input
                                label="Foto (opcional)"
                                tipo="file"
                                name="imagen"
                                estado={imagen}
                                cambiarEstado={cambiarImagen}
                            /> */}
                            <Input
                                label="País de origen"
                                tipo="text"
                                name="paisorigen"
                                estado={paisorigen}
                                cambiarEstado={cambiarPaisOrigen}
                                expresionRegular={expresiones.nombre}
                                leyendaError="El país de origen sólo puede tener letras"
                            />
                            <Input
                                label="Contraseña"
                                tipo="password"
                                name="password"
                                estado={password}
                                cambiarEstado={cambiarPassword}
                                expresionRegular={expresiones.password}
                                leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                            />
                            <Input
                                label="Repetir Contraseña"
                                tipo="password"
                                name="password2"
                                estado={password2}
                                cambiarEstado={cambiarPassword2}
                                funcion={validarPassword2}
                                leyendaError="Ambas contraseñas deben ser iguales."
                            />
                            <Input
                                label="Correo electrónico"
                                tipo="email"
                                name="correo"
                                estado={correo}
                                cambiarEstado={cambiarCorreo}
                                placeholder="john@correo.com"
                                expresionRegular={expresiones.correo}
                                leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                            />
                            <Input
                                label="Teléfono"
                                tipo="text"
                                name="telefono"
                                estado={telefono}
                                cambiarEstado={cambiarTelefono}
                                placeholder="3169173694"
                                expresionRegular={expresiones.telefono}
                                leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
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