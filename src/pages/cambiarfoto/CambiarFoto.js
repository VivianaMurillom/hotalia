import TextPerfil from "../../components/textperfil/TextPerfil";
import Footer from "../../components/footer/Footer";
import "./Cambiarfoto.css";
import Swal from "sweetalert2";
import {useState, useEffect} from "react";
import Cookies from 'universal-cookie';
import axios from "axios";
import Input from '../../components/inputsforms/Input';

let CambiarFoto=(userId)=>{

  const url="https://hoteliakuepa.herokuapp.com/users";

  const cookies = new Cookies();

  userId = cookies.get('_id');

  const getData=async()=>{
    const response=axios.get(`${url}/${userId}`);
    return response;
  }

  const [image, setImage] = useState({});
  const [list,setList]=useState([]);
  const [upList, setUpList]=useState(false);

  let changeimg=(e)=>{
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  }

  let cargarFoto=async(e)=>{
    e.preventDefault();

    if (!image) {
      console.log('No se ha cargado la imagen');
      return
    }

    const formdata = new FormData();
    formdata.append('file', image)

    const response = await axios.put(`${url}/${userId}`,{
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
      img:formdata
    })
    .then(res=>res.text())
    .then(res=>console.log(res))
    .catch(error=>{
      console.error(error);
    })

    if (response.status===200) {
        Swal.fire(
          'Foto actualizada',
          'Ha cambiado su foto de perfil correctamente!',
          'success'
        )
        
        setImage(null)
        setUpList(!upList);
    }
  }

  useEffect(()=>{
    getData().then((response)=>{
        setList(response.data);
    })
},[upList]);

console.log(list);

    return(

      <>
      <TextPerfil/>

      <section className="change-picture">
          <h2>Cambiar foto</h2>

          <img src={cookies.get('img')} class="rounded-circle" alt="imagen perfil" />

          <p>Solo se aceptan imágenes en formato jpg, jpeg o png.</p>

          <form>
            <div className="container-image-file">
              <Input 
              tipo="file" 
              name="imgFile"
              estado={image}
              cambiarEstado={setImage}
              accept="image/jpeg,image/jpg,image/png"
              funcion={changeimg}
              leyendaError="Recuerde subir la imagen en formato jpg, jpeg o png."/>
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