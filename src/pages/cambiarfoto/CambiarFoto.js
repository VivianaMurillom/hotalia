import TextPerfil from "../../components/textperfil/TextPerfil";
import Footer from "../../components/footer/Footer";
import "./Cambiarfoto.css";
import cambiarImagen from "../perfil/img/cambiar-imagen.svg";
import Swal from "sweetalert2";
import {useState} from "react";

let CambiarFoto=()=>{

  const [image, setImage] = useState({
    imgFile: ""
  });

  let changeimg=(e)=>{
    const {target}=e;
    const {name,value}=target;

    const newValues = {
      ...image,
      [name]: value,
    };
      
    setImage(newValues);
  
  }

  let cargarFoto=(e)=>{
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

            <p>Solo se aceptan imágenes en formato jpg o png.</p>

            <form>
              <div className="container-image-file">
                <input 
                type="file" 
                id="imgFile"
                name="imgFile"
                value={image.imgFile}
                accept="image/jpeg,image/jpg,image/png"
                onChange={changeimg}/>
                <div className="mensaje-error-imgFile">
                  <p><i class="fa-solid fa-triangle-exclamation"></i> Recuerde subir la imagen en formato jpg o png.</p>
                </div>
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