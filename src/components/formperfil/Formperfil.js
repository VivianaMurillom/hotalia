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
            <h2>Editar datos</h2>

            <form>
                <div className="form-sections">
                    <div className="form-divisions">
                        <label>Nombres</label>
                        <input
                        type="text"/>
                    </div>
                    <div className="form-divisions">
                        <label>Apellidos</label>
                        <input
                        type="text"/>
                    </div>
                </div>
                <div className="form-sections">
                    <div className="form-divisions">
                        <label>Tipo de documento de identidad</label>
                        <select>
                            <option value="" selected>Elija su documento</option>
                            <option value="Registro Civil">Registro Civil</option>
                            <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                            <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                            <option value="Cédula de extranjería">Cédula de extranjería</option>
                        </select>
                    </div>
                    <div className="form-divisions">
                        <label>Número de documento de identidad</label>
                        <input
                        type="number"/>
                    </div>
                </div>
                <div className="form-sections">
                    <div className="form-divisions">
                        <label>Fecha de nacimiento</label>
                        <input
                        type="date"/>
                    </div>
                    <div className="form-divisions">
                        <label>Genero</label>
                        <input
                        type="text"/>
                    </div>
                </div>
                <div className="form-sections">
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
                <div className="form-sections">
                    <div className="form-divisions">
                        <label>País de origen</label>
                        <input
                        type="text"/>
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