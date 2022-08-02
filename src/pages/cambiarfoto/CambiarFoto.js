import TextPerfil from "../../components/textperfil/TextPerfil";
import Footer from "../../components/footer/Footer";
import "./Cambiarfoto.css";
import Swal from "sweetalert2";
import {useState} from "react";
import Cookies from 'universal-cookie';
import axios from "axios";


let CambiarFoto=(userId)=>{

  const url="https://hoteliakuepa.herokuapp.com/users/id";

  const cookies = new Cookies();

  userId = cookies.get('_id');

  const [img, setImg] = useState(null);

  const tomarImagen=e=>{
    setImg(e);
    console.log(e)
  }

    console.log('_id: '+ cookies.get('_id'));
    console.log('nombre: '+cookies.get('nombre'));
    console.log('apellido: '+cookies.get('apellido'));

  const subirImagen=async(e)=>{
    e.preventDefault();

    const formato = new FormData();
    formato.append('file', img);

    console.log(formato.data);

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
      img: formato}, 
      {headers: {
      'Content-Type':'multipart/form-data',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}})
    .then(response=>{
      console.log(response.data);
      Swal.fire(
        'Foto actualizada',
        'Ha cambiado su foto de perfil correctamente!',
        'success'
        )
      var http = new XMLHttpRequest();
      console.log(http.status);
    }).catch(error=>{
      console.log(error);
    })
  }

    return(

      <>
      <TextPerfil/>

      <section className="change-picture">
          <h2>Cambiar foto</h2>

          <img src={cookies.get('img')} class="rounded-circle" alt="imagen perfil" />

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