import TextPerfil from "../../components/textperfil/TextPerfil";
import Footer from "../../components/footer/Footer";
import "./Cambiarfoto.css";
import Swal from "sweetalert2";
import {useState} from "react";
import Cookies from 'universal-cookie';
import axios from "axios";


let CambiarFoto=(userId)=>{

  const url="http://localhost:4000/huespedes";

  const cookies = new Cookies();

  userId = 1

  const [img, setImg] = useState(null);

  const tomarImagen=e=>{
    setImg(e);
    console.log(e);
    // $("input[name='img']").files[0];
  }

    console.log('_id: '+ cookies.get('_id'));
    console.log('nombre: '+cookies.get('nombre'));
    console.log('apellido: '+cookies.get('apellido'));

  const subirImagen=async(e)=>{
    e.preventDefault();

    let imgs = document.querySelector('[name="img"]').files[0];

    var reader = new FileReader();
    reader.readAsDataURL(imgs);
    reader.onload = function(event) {
      // The file's text will be printed here
      console.log(event.target.result)
      setImg(event.target.result)
    };
  
    // reader.readAsText(imgs);
  

    // const formato = new FormData();
    // formato.append('file', imgs);
    // console.log(imgs);
    // console.log(formato);


    await axios.put(`${url}/${userId}`,{
      id: userId,
      tipodoc: cookies.get('tipodoc'),
      numdoc: cookies.get('numdoc'),
      nombre: cookies.get('nombre'),
      apellido: cookies.get('apellido'),
      fnacimiento: cookies.get('fnacimiento'),
      genero: cookies.get('genero'),
      email:cookies.get('email'),
      telefono:cookies.get('telefono'),
      paisorigen: cookies.get('paisorigen'),
      password: cookies.get('password'),
      tipouser: cookies.get('tipouser'),
      img: document.querySelector('#img').getAttribute('src')})
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
  }

    return(

      <>
      <TextPerfil/>

      <section className="change-picture">
          <h2>Cambiar foto</h2>

          <img id='img' src={img} class="rounded-circle w-100 col-12 height-100" alt="imagen perfil" />

          <p>Solo se aceptan imágenes en formato jpg, jpeg o png.</p>

          <form action="" onSubmit={subirImagen}>
            <div className="container-image-file">
              <input 
              type="file" 
              name="img"
              accept="image/jpeg,image/jpg,image/png"
              onChange={(e)=>tomarImagen(e.target.files)}/>
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