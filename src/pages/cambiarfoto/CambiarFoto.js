import TextPerfil from "../../components/textperfil/TextPerfil";
import Footer from "../../components/footer/Footer";
import "./Cambiarfoto.css";
import Swal from "sweetalert2";
import {useState} from "react";
import Cookies from 'universal-cookie';
import axios from "axios";
import noImagen from '../../img/Foto-sin-imagen.jpg';


let CambiarFoto=(userId)=>{

  const url="http://localhost:4000/users";

  const cookies = new Cookies();

  userId = cookies.get('_id');

  const [file, setFile] = useState(null);

  const tomarImagen=(e)=>{
    setFile(e.target.files[0]);
  }

  console.log(file)

    console.log('_id: '+ cookies.get('_id'));
    console.log('nombre: '+cookies.get('nombre'));
    console.log('apellido: '+cookies.get('apellido'));


  const subirImagen=async(e)=>{
    e.preventDefault();

    if(!file) return alert('Debes seleccionar una nueva imagen');

    let imgs = { 'lastModified': file.lastModified, 'name': file.name, 'originalname': file.name, 'filename': file.name, 'size': file.size, 'type': file.type, 'webkitRelativePath': file.webkitRelativePath};
    console.log(imgs);
    
    await axios.put(`${url}/${userId}`,{img:imgs})
    .then(response=>{
      console.log(response.data);
      Swal.fire(
        'Foto actualizada',
        'Ha cambiado su foto de perfil correctamente!',
        'success'
        )
    }).catch(error=>{
      console.log(error);
    })

    document.getElementById('img').value= null;
    setFile(null)
  }

    return(

      <>
      <TextPerfil/>

      <section className="change-picture">
          <h2>Cambiar foto</h2>

          {/* id='img' src={img}  */}

          <div className="w-100 col-12 height-100">
            <img src={noImagen} className="img-fluid mt-2 rounded-circle" alt="imagen perfil" />
          </div>

          <p>Solo se aceptan imágenes en formato jpg, jpeg o png.</p>

          {/* action={`/${url}`} */}

          <form encType="multipart/form-data" method="post" onSubmit={subirImagen}>
            <div className="container-image-file">
              <input 
              type="file" 
              id="img"
              name="img"
              accept="image/jpeg,image/jpg,image/png"
              onChange={tomarImagen}
              />
            </div>
            <div className="container-button">
              <button className="general-button" type="submit">Subir foto</button>
            </div>
          </form>

      </section>

      <Footer/>
      </>
    )
}

export default CambiarFoto;