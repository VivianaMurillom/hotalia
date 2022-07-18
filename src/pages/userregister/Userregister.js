import React from 'react'
import '../userregister/userregister.css'
import Logo from '../../img/logo2.png'
import { Formik } from 'formik'


const Userregister = () => {
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

                        <Formik
                            initialValues={{
                                nombre: '',
                                apellido: '',
                                tipdocu: '',
                                numdocu: '',
                                fechanac: '',
                                genero: '',
                                email: '',
                                numconta: '',
                                pais: '',
                                password: '',
                                password2: '',
                                confirm: ''
                            }}
                            validate={(valores) => {
                                const errores = {}

                                if (!valores.nombre) {
                                    errores.nombre = 'Por favor ingrese su nombre'
                                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                                    errores.nombre = 'El nombre solo puede contener letras y espacios.'
                                }

                                if (!valores.apellido) {
                                    errores.apellido = 'Por favor ingrese su apellido'
                                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
                                    errores.apellido = 'El apellido solo puede contener letras y espacios.'
                                }

                                if (!valores.tipdocu) {
                                    errores.tipdocu = 'Por favor ingrese su tipo de documento'
                                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.tipdocu)) {
                                    errores.tipdocu = 'El tipo de documento sólo puede contener letras y  espacios.'
                                }

                                if (!valores.numdocu) {
                                    errores.numdocu = 'Por favor ingrese su número de documento'
                                } else if (! /^-?\d+$/.test(valores.numdocu)) {
                                    errores.numdocu = 'El número de documento sólo puede contener números.'
                                }


                                if (!valores.fechanac) {
                                    errores.fechanac = 'Por favor ingrese su fecha de nacimiento'
                                }

                                if (!valores.genero) {
                                    errores.genero = 'Por favor ingrese su género'
                                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.genero)) {
                                    errores.numdocu = 'El tipo de documento sólo puede contener letras y  espacios.'
                                }

                                if (!valores.email) {
                                    errores.email = 'Por favor ingrese su correo electronico'
                                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                                    errores.email = 'El correo sólo puede contener letras, números, puntos, guiones y guion bajo'
                                }

                                if (!valores.numconta) {
                                    errores.numconta = 'Por favor ingrese su número de contacto'
                                } else if (! /^-?\d+$/.test(valores.numconta)) {
                                    errores.numconta = 'El número de contacto sólo puede contener números.'
                                }

                                if (!valores.pais) {
                                    errores.pais = 'Por favor ingrese su país'
                                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.pais)) {
                                    errores.pais = 'El país sólo puede contener letras.'
                                }

                                if (!valores.password) {
                                    errores.password = 'Por favor ingrese su contraseña'
                                } else if (! /^.{4,18}$/.test(valores.password)) {
                                    errores.password = 'La contraseña tiene que ser de 4 a 18 dígitos.'
                                }

                                if (!valores.password2) {
                                    errores.password2 = 'Por favor ingrese su contraseña'
                                } else if (! /^.{4,18}$/.test(valores.password2)) {
                                    errores.password2 = 'La contraseña tiene que ser de 4 a 18 dígitos.'
                                }


                                if (!valores.confirm) {
                                    errores.confirm = 'Por favor acepte los terminos y condiciones'
                                }

                                return errores;

                            }}

                            onSubmit={(valores, { resetForm }) => {
                                resetForm();
                                console.log(valores);
                                console.log("Formu enviado")
                            }}>
                            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (


                                <form onSubmit={ handleSubmit } className='form-register'>
                                    <div className='user-details'>
                                        <section className='input-box'>
                                            <span className='details'>Nombre</span>
                                            <input
                                                type='text'
                                                id='nombre'
                                                name='nombre'
                                                value={values.nombre}
                                                onChange={handleChange}
                                                onBlur={handleBlur} >
                                            </input>
                                            {touched.nombre && errors.nombre && <div>{errors.nombre}</div>}
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Apellidos</span>
                                            <input
                                                type='text'
                                                id='apellido'
                                                name='apellido'
                                                value={values.apellido}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            ></input>
                                            {touched.apellido && errors.apellido && <div>{errors.apellido}</div>}
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Tipo de documento</span>
                                            <input
                                                type='text'
                                                id='tipdocu'
                                                name='tipdocu'
                                                value={values.tipdocu}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            ></input>
                                            {touched.tipdocu && errors.tipdocu && <div>{errors.tipdocu}</div>}

                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Número de documento</span>
                                            <input
                                                type='number'
                                                id='numdocu'
                                                name='numdocu'
                                                value={values.numdocu}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            ></input>
                                            {touched.numdocu && errors.numdocu && <div>{errors.numdocu}</div>}
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Fecha de Nacimiento</span>
                                            <input
                                                type='date'
                                                id='fechanac'
                                                name='fechanac'
                                                value={values.fechanac}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            ></input>
                                            {touched.fechanac && errors.fechanac && <div>{errors.fechanac}</div>}
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Género</span>
                                            <input
                                                type='text'
                                                id='genero'
                                                name='genero'
                                                value={values.genero}
                                                onChange={handleChange}
                                                onBlur={handleBlur} >
                                            </input>
                                            {touched.genero && errors.genero && <div>{errors.genero}</div>}
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Email</span>
                                            <input
                                                type='email'
                                                id='email'
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            ></input>
                                            {touched.email && errors.email && <div>{errors.email}</div>}
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Foto (opcional)</span>
                                            <input
                                                type='file'
                                                className='photo'
                                                id='foto'
                                                name='foto'
                                                value={values.foto}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            ></input>
                                            {touched.foto && errors.foto && <div>{errors.foto}</div>}
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Télefono de contacto</span>
                                            <input
                                                type='number'
                                                id='numconta'
                                                name='numconta'
                                                value={values.numconta}
                                                onChange={handleChange}
                                                onBlur={handleBlur} >
                                            </input>
                                            {touched.numconta && errors.numconta && <div>{errors.numconta}</div>}
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>País de origen</span>
                                            <input
                                                type='text'
                                                id='pais'
                                                name='pais'
                                                value={values.pais}
                                                onChange={handleChange}
                                                onBlur={handleBlur} ></input>
                                                {touched.pais && errors.pais && <div>{errors.pais}</div>}
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Contraseña</span>
                                            <input
                                                type='password'
                                                id='password'
                                                name='password'
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur} ></input>
                                            {touched.password && errors.password && <div>{errors.password}</div>}
                                        </section>
                                        <section className='input-box'>
                                            <span className='details'>Confirmar contraseña</span>
                                            <input
                                                type='password'
                                                id='password2'
                                                name='password2'
                                                value={values.password2}
                                                onChange={handleChange}
                                                onBlur={handleBlur}>
                                            </input>
                                            {touched.password2 && errors.password2 && <div>{errors.password2}</div>}
                                        </section>
                                    </div>
                                    <section className='input-box2'>
                                        <input
                                            type='checkbox'
                                            id='confirm'
                                            name='confirm'
                                            value={values.confirm}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        ></input>
                                        {touched.confirm && errors.confirm && <div>{errors.confirm}</div>}
                                        <span className='details'>Aceptar terminos y condiciones</span>
                                    </section>
                                    <input type="submit" value="Registrar" class="btn-login" />

                                </form>
                            )}
                        </Formik>
                    </div>
                </section>
            </body>
        </>
    )
}

export default Userregister