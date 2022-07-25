import React from 'react'
import '../userregister/userregister.css'
import Logo from '../../img/logo2.png'

import { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'



const Userregister = () => {

    const navigate=useNavigate();


    const [data,setData]=useState({id:"",nombre:"",apellido:"",tipodoc:"",numdoc:"",fnacimiento:"",genero:"",
    email:"", imagen:"", telefono:"", paisorigen:"", password:""});

    const handleChange=({target})=>{

        setData({
            ...data,
            [target.name]:target.value
        })
    }

    const url="http://localhost:2000/huespedes";


    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.post(url,data);
        if(response.status===201){
            Swal.fire(
                '¡Registrado exitoso!',
                'success'
            )
            navigate("/perfil");
        }else{
            Swal.fire(
            '¡Error!',
            'Hubo un problema al registrarse',
            'error'
            )
        }
    }

    return (
        <>
            <body className='body-login'>
                <section className='info-login'>

                    <h1>¡Regístrate en Hotelia! <br></br>
                        Obtendrás muchos beneficios
                    </h1>
                    <img src={Logo}></img>
                </section>
                <section className='registeru'>
                    <div className='login-data'>
                        <h1>Registro</h1>

 



                                <form onSubmit={ handleSubmit } className='form-register'>
                                    <div className='user-details'>
                                        <section className='input-box'>
                                            <span className='details'>Nombre</span>
                                            <input
                                                type='text'
                                                id='nombre'
                                                name='nombre'
                                                value={data.nombre}
                                                onChange={handleChange}
                                                 >
                                            </input>

                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Apellidos</span>
                                            <input
                                                type='text'
                                                id='apellido'
                                                name='apellido'
                                                value={data.apellido}
                                                onChange={handleChange}

                                            ></input>
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Tipo de documento</span>
                                            <input
                                                type='text'
                                                id='tipodoc'
                                                name='tipodoc'
                                                value={data.tipodoc}
                                                onChange={handleChange}

                                            ></input>


                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Número de documento</span>
                                            <input
                                                type='number'
                                                id='numdoc'
                                                name='numdoc'
                                                value={data.numdoc}
                                                onChange={handleChange}

                                            ></input>

                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Fecha de Nacimiento</span>
                                            <input
                                                type='date'
                                                id='fnacimiento'
                                                name='fnacimiento'
                                                value={data.fnacimiento}
                                                onChange={handleChange}

                                            ></input>
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Género</span>
                                            <input
                                                type='text'
                                                id='genero'
                                                name='genero'
                                                value={data.genero}
                                                onChange={handleChange}
 >
                                            </input>

                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Email</span>
                                            <input
                                                type='email'
                                                id='email'
                                                name='email'
                                                value={data.email}
                                                onChange={handleChange}
     
                                            ></input>

                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Foto (opcional)</span>
                                            <input
                                                type='file'
                                                className='imagen'
                                                id='imagen'
                                                name='imagen'
                                                value={data.imagen}
                                                onChange={handleChange}
   
                                            ></input>
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Télefono de contacto</span>
                                            <input
                                                type='number'
                                                id='telefono'
                                                name='telefono'
                                                value={data.telefono}
                                                onChange={handleChange}
 >
                                            </input>
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>País de origen</span>
                                            <input
                                                type='text'
                                                id='paisorigen'
                                                name='paisorigen'
                                                value={data.paisorigen}
                                                onChange={handleChange}
                                                 ></input>
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Contraseña</span>
                                            <input
                                                type='password'
                                                id='password'
                                                name='password'
                                                value={data.password}
                                                onChange={handleChange}
                                                ></input>
                                        
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Confirmar contraseña</span>
                                            <input
                                                type='password'
                                                id='password2'
                                                name='password2'
                                                value='password2'
                                                >
                                            </input>

                                        </section>
                                    </div>
                                    <section className='input-box2'>
                                        <input
                                            type='checkbox'
                                            id='confirm'
                                            name='confirm'
                                            value='confirm'

                                        ></input>
                                        <span className='details'>Aceptar terminos y condiciones</span>
                                    </section>
                                    <input type="submit" value="Registrar" class="btn-login" />

                                </form>
                    </div>
                </section>
            </body>
        </>
    )
}

export default Userregister