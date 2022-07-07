import TextPerfil from "../../components/textperfil/TextPerfil";
import Footer from "../../components/footer/Footer";
import "./Editarcontraseña.css";
import Swal from "sweetalert2";

let EditarContrasena=()=>{

    const changePassword=(e)=>{
        e.preventDefault();

        Swal.fire(
            'Contraseña actualizada',
            'Su contraseña ha sido actualizada correctamente!',
            'success'
        )
    }

    return(
        <>
        <TextPerfil/>

        <section className="password-section">
            <h2>Cambiar contraseña</h2>

            <form>
                <div className="form-divisions passw">
                    <label>Contraseña actual</label>
                    <input
                    type="password"/>
                </div>
                <div className="form-divisions passw">
                    <label>Contraseña nueva</label>
                    <input
                    type="password"/>
                </div>
                <div className="form-divisions passw">
                    <label>Confirmar nueva contraseña</label>
                    <input
                    type="password"/>
                </div>
                <div className="form-password-button">
                    <button type="submit" className="general-button" onClick={changePassword}>Guardar cambios</button>
                </div>
            </form>
        </section>

        <Footer/>
        </>
    )
}

export default EditarContrasena;