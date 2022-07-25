import React from 'react'
import '../login/login.css'
import Icono from '../../img/login-icono.png'
import Logo from '../../img/logo2.png'
import { Formik} from 'formik'


const Login = () => {
  return (
    <>
    <body className='body-login'>
        <section className='info-login'>
            <h1>¡Bienvenidos a Hotelia!</h1>
            <img src={Logo}></img>
        </section>
        <section className='login'>
            <div className='login-data'>
                <img src={Icono}></img>



                <Formik 
                initialValues={{
                    correo: '',
                    password: ''
                }}

                validate={(valores) =>{
                    const errores ={}

                    if(!valores.password){
                       errores.password = 'Por favor ingrese su contraseña'
                    } else if(! /^.{4,18}$/.test(valores.password)){
                        errores.password = 'La contraseña tiene que ser de 4 a 18 dígitos.'
                    }

                    if(!valores.correo){
                        errores.correo = 'Por favor ingrese un correo'
                     } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                         errores.correo = 'El correo sólo puede contener letras, números, puntos, guiones y guion bajo'
                     }

                    return errores;
                }}


                onSubmit={(valores, {resetForm}) =>{
                    resetForm();
                    console.log(valores);
                    console.log("Formu enviado");
                }}>
                    {({values, errors, touched,  handleChange, handleBlur, handleSubmit}) =>(

                        <form onSubmit={handleSubmit}>

                            <div className='input-grup'>
                                <label htmlFor='correo'>Correo</label>
                                <input  
                                     className="input-fili" 
                                    type='text' 
                                    id='correo'
                                    name='correo'  
                                    value={values.correo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                                 </input>

                                 { touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
                            </div>

                            <div className='input-grup'>
                                <label htmlFor='password'>Contraseña</label>
                                <input
                                    className="input-fili" 
                                    type='password' 
                                    id='password' 
                                    name='password' 
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}>
                                 </input>
                                 {touched.password && errors.password && <div className="error">{errors.password}</div>}
                            </div>

                            <button className="btn-login" type='submit'>Ingresar</button>
                        </form>
                    )}
                </Formik>
            </div>
        </section>
    </body>
    </>
  )
}

export default Login;