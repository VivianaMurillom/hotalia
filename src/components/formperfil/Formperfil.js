import "./Formperfil.css";
import Swal from "sweetalert2";
import {Formik, Form, Field, ErrorMessage} from "formik";

let Formperfil=()=>{

    return(
        <>
        <section className="form-modify-profile">
            <h3>Editar datos de contacto</h3>

            <Formik
            
            initialValues={{correo:'', telefono:''}}
            
            validate={(valores)=>{
                let errores={}

                // Validación de errores input correo
                if (!valores.correo) {
                    errores.correo = 'Por favor ingresar su correo electrónico'
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                    errores.correo = 'Por favor ingresar un correo válido, e.j: usuario@mail.com'
                }

                // Validación de errores input telefono
                if (!valores.telefono) {
                    errores.telefono = 'Por favor ingresar su número telefónico de contacto'
                } else if (!/^\d{7,14}$/.test(valores.telefono)){
                    errores.telefono = 'El teléfono solo puede contener numeros y mínimo 7 y máximo 14 dígitos'
                }

                return errores;
            }}

            onSubmit={(valores,{resetForm})=>{
                    
                resetForm();

                Swal.fire(
                    'Información actualizada',
                    'Su información de perfil ha sido actualizada correctamente!',
                    'success'
                  )
            }}
            >

            {({errors})=>(
                <Form>
                <div className="form-sections-profile">
                    <div className="form-divisions">
                        <label>Correo</label>
                        <Field
                        className=""
                        type="email"
                        name="correo"
                        id="correo"/>
                        <i class="fa-solid fa-circle-exclamation input-i"></i>
                        <ErrorMessage name='correo' component={()=>(
                            <div className='mensaje-error-contact'><i class="fa-solid fa-triangle-exclamation"></i> {errors.correo}</div>
                        )}/>
                    </div>
                    <div className="form-divisions">
                        <label>Telefono de contacto</label>
                        <Field
                        className=""
                        type="number"
                        name="telefono"
                        id="telefono"/>
                        <i class="fa-solid fa-circle-exclamation input-i"></i>
                        <ErrorMessage name='telefono' component={()=>(
                            <div className='mensaje-error-contact'><i class="fa-solid fa-triangle-exclamation"></i> {errors.telefono}</div>
                        )}/>
                    </div>
                </div>
                <div className="form-profile-button">
                    <button type="submit" className="general-button">Guardar cambios</button>
                </div>
            </Form>
            )}

            

            </Formik>
        </section>
        </>
    )
}

export default Formperfil;