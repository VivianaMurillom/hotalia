import TextPerfil from "../../components/textperfil/TextPerfil";
import Footer from "../../components/footer/Footer";
import "./Editarcontraseña.css";

let EditarContrasena=()=>{
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
                    <button type="submit" className="general-button">Guardar cambios</button>
                </div>
            </form>
        </section>

        <Footer/>
        </>
    )
}

export default EditarContrasena;