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
                        type="mail"/>
                    </div>
                    <div className="form-divisions">
                        <label>Telefono de contacto</label>
                        <input
                        type="number"/>
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