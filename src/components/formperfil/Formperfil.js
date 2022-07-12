import "./Formperfil.css";
import Swal from "sweetalert2";

let Formperfil=()=>{

    const sendFormProfile=(e)=>{
      e.preventDefault();  

      Swal.fire(
        'Información actualizada',
        'Su información de perfil ha sido actualizada correctamente!',
        'success'
      )
    }

    return(
        <>
        <section className="form-modify-profile">
            <h3>Editar datos de contacto</h3>

            <form>
                <div className="form-sections-profile">
                    <div className="form-divisions">
                        <label>Correo</label>
                        <input
                        className=""
                        type="mail"/>
                        <i class="fa-solid fa-circle-exclamation input-i"></i>
                        <div className="mensaje-error-contact">
                            <p><i class="fa-solid fa-triangle-exclamation"></i> Por favor ingresar un correo válido, e.j: usuario@mail.com</p>
                        </div>
                    </div>
                    <div className="form-divisions">
                        <label>Telefono de contacto</label>
                        <input
                        className=""
                        type="number"/>
                        <i class="fa-solid fa-circle-exclamation input-i"></i>
                        <div className="mensaje-error-contact">
                            <p><i class="fa-solid fa-triangle-exclamation"></i> El teléfono solo puede contener numeros y mínimo 7 y máximo 14 dígitos</p>
                        </div>
                    </div>
                </div>
                <div className="form-profile-button">
                    <button type="submit" className="general-button" onClick={sendFormProfile}>Guardar cambios</button>
                </div>
            </form>
        </section>
        </>
    )
}

export default Formperfil;