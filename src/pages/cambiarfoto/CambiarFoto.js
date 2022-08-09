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

  userId = cookies.get('id');

  const [img, setImg] = useState(null);

  const tomarImagen=()=>{
    
    // const [file]=e.target.files; 

    const isNameOfOneImageRegEx = /.(jpe?g|png)$/i;

    const reader = new FileReader();

    let imgs = document.querySelector('[name="img"]').files[0];

    const isValidType = isNameOfOneImageRegEx.test(imgs.name);

    if(!isValidType) {
      alert("Sólo puedes subir imágenes en los formatos indicados.");
    }

		reader.onloadend = () => {
			setImg(reader.result)
		}
		reader.readAsDataURL(imgs)

    console.log(imgs)
  }

    console.log('id: '+ cookies.get('id'));
    console.log('nombre: '+cookies.get('nombre'));
    console.log('apellido: '+cookies.get('apellido'));

  const subirImagen=async(e)=>{
    e.preventDefault();

    if(!img) return alert('Debes seleccionar una nueva imagen');

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
      img: img})
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

          <div className="w-100 col-12 height-100">
            <img id='img' src={img} className="img-fluid mt-2 rounded-circle" alt="imagen perfil" />
          </div>

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