import TextPerfil from "../../components/textperfil/TextPerfil";
import Footer from "../../components/footer/Footer";
import "./Cambiarfoto.css";
import cambiarImagen from "../perfil/img/cambiar-imagen.svg";
import Swal from "sweetalert2";

let CambiarFoto=()=>{

    const cargarFoto=(e)=>{
      e.preventDefault();

      Swal.fire(
        'Foto actualizada',
        'Ha cambiado su foto de perfil correctamente!',
        'success'
      )
    }

    return(
        <>
        <TextPerfil/>

        <section className="change-picture">
            <h2>Cambiar foto</h2>

            <img src={cambiarImagen} alt="No imagen"/>

            <p>Recuerda solo subir archivos en formato jpg o png.</p>

            <form>
              <div className="container-image-file">
                <input type="file"/>
              </div>
              <div className="container-button">
                <button className="general-button" onClick={cargarFoto}>Subir foto</button>
              </div>
            </form>

        </section>

        <Footer/>
        </>
    )
}

export default CambiarFoto;