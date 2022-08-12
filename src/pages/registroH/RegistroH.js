import React, { useState, useEffect} from 'react';
import {Formulario, 
	Label, 
	ContenedorTerminos, 
	ContenedorBotonCentrado, 
	Boton, MensajeExito, 
	MensajeError} from '../../elements/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/inputsforms/Input';
import "./RegistroH.css";
import DashUser from '../../components/dashuser/DashUser';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';

const RegistroH = () => {

	const url = "http://localhost:4000/habitaciones";

	const getData=async()=>{
		const response=axios.get(url);
		return response;
		}
	
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [numero, cambiarNumero] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [cantcamas, cambiarCantcamas] = useState({campo: '', valido: null});
	const [precio, cambiarPrecio] = useState({campo: '', valido: null});
	const [adultos, cambiarAdultos] = useState({campo: '', valido: null});
	const [ninos, cambiarNinos] = useState({campo: '', valido: null});
	// const [img, cambiarImg] = useState({campo: '', valido: null});
	const [wifi, cambiarWifi] = useState(false, {campo: ''});
	const [tv, cambiarTv] = useState(false, {campo: ''});
	const [bano, cambiarBano] = useState(false, {campo: ''});
	const [caja, cambiarCaja] = useState(false, {campo: ''});
	const [nevera, cambiarNevera] = useState(false, {campo: ''});
	const [estado, cambiarEstado] = useState('Cantidad');
	const [list,setList]=useState([]);
	const [upList, setUpList]=useState(false);

	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		numero: /^\d{1,3}$/, // 1 a 3 numeros.
		descripcion: /^[a-zA-ZÀ-ÿ\s]{1,200}$/, // Letras y espacios, pueden llevar acentos.
		cantcamas: /^\d{1}$/, // 1 numeros.
		precio: /^\d{1,7}$/, // 1 a 7 numeros.
		adultos: /^\d{1}$/, // 1 numeros.
		ninos: /^\d{1}$/, // 1 numeros.
	}

	const capturaDatosEstado = (e) => {
        cambiarEstado(e.target.value);
    }

	const onChangeWifi = (e) => {
		cambiarWifi(e.target.checked);
	}

	let wifiEstado='';
	if (wifi) {
		wifiEstado='Si';
	} else {
		wifiEstado='No';
	}

	const onChangeTv = (e) => {
		cambiarTv(e.target.checked);
	}

	let estadoTv='';
	if (tv) {
		estadoTv='Si';
	} else {
		estadoTv='No';
	}
	
	const onChangeBano = (e) => {
		cambiarBano(e.target.checked);
	}

	let estadoBano='';
	if (bano) {
		estadoBano='Si';
	} else {
		estadoBano='No';
	}

	const onChangeCaja = (e) => {
		cambiarCaja(e.target.checked);
	}

	let estadoCaja='';
	if (caja) {
		estadoCaja='Si';
	} else {
		estadoCaja='No';
	}

	const onChangeNevera = (e) => {
		cambiarNevera(e.target.checked);
	}

	let estadoNevera='';
	if (nevera) {
		estadoNevera='Si';
	} else {
		estadoNevera='No';
	}

	let suma=(adultosN, ninosN)=>{

		adultosN=parseInt(adultos.campo);
		ninosN=parseInt(ninos.campo);

		let capacidad = adultosN+ninosN;
		return capacidad;
	}

	const onSubmit = async(e) => {
		e.preventDefault();

		if(
			nombre.valido === 'true' &&
			numero.valido === 'true' &&
			descripcion.valido === 'true' &&
			cantcamas.valido === 'true' &&
			precio.valido === 'true' &&
			adultos.valido === 'true' &&
			ninos.valido === 'true'
			
		){
			const response=await axios.post(url,{
				'_id':Number(numero.campo),
                'nombrehab': nombre.campo,
                'capacidad': Number(suma()),
				'camas': cantcamas.campo,
				'descripcion': descripcion.campo,
				'wifi': wifiEstado,
				'tv': estadoTv,
				'banio': estadoBano,
				'cajafuerte': estadoCaja,
				'nevera': estadoNevera,
				'valornoche': Number(precio.campo),
				'img': '',
				'estado': '',
				'reservas': []
            });

			if(response.status===201){
				cambiarFormularioValido(true);
				cambiarNombre({campo: '', valido: null});
				cambiarNumero({campo: '', valido: null});
				cambiarDescripcion({campo: '', valido: null});
				cambiarCantcamas({campo: '', valido: null});
				cambiarPrecio({campo: '', valido: null});
				cambiarAdultos({campo: '', valido: null});
				cambiarNinos({campo: '', valido: null});

				setUpList(!upList); 

				Swal.fire(
                    '¡La habitación se ha registrado correctamente!',
                    'A continuación se dirigirá al listado de habitaciones',
                    'success'
                )

				setUpList(!upList); 
			}


		} else {
			cambiarFormularioValido(false);

			Swal.fire(
                '¡Error!',
                'Hubo un problema al registrar la habitación',
                'error'
            )
		}
	}

	useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);
        })
    },[upList]);

	console.log(numero.campo);
	console.log(nombre.campo);
	console.log(suma());
	console.log(cantcamas.campo);
	console.log(descripcion.campo);
	console.log(wifiEstado);
	console.log(estadoTv);
	console.log(estadoBano);
	console.log(estadoCaja);
	console.log(estadoNevera);
	console.log(precio.campo);
	console.log(estado);

	return (
		<>
		<DashUser/>
		
	<main>
      <h1>Registro de Habitaciones</h1>
			<Formulario action="" onSubmit={onSubmit}>
				<Input
					label="Nombre de la habitación"
					tipo="text"
					name="nombre"
					estado={nombre}
					cambiarEstado={cambiarNombre}
					expresionRegular={expresiones.nombre}
					leyendaError="El nombre tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
				/>
				<Input
					estado={numero}
					cambiarEstado={cambiarNumero}
					tipo="number"
					label="Número de la habitación"
					placeholder=""
					name="numero"
					leyendaError="El número solo puede contener numeros y el maximo son 3 dígitos."
					expresionRegular={expresiones.numero}
				/>
				<Input
					label="Descripción de la habitación"
					tipo="text"
					name="descripcion"
					estado={descripcion}
					cambiarEstado={cambiarDescripcion}
					leyendaError="La descripción tiene que ser de 10 a 40 dígitos y solo puede contener numeros y letras."
					expresionRegular={expresiones.descripcion}
				/>
				<Input
					label="Cantidad de camas"
					tipo="text"
					name="cantcamas"
					estado={cantcamas}
					cambiarEstado={cambiarCantcamas}
					leyendaError="El número solo puede contener numeros y el maximo es 1 dígito."
					expresionRegular={expresiones.cantcamas}
				/>
				<Input
					label="Precio por noche"
					tipo="number"
					name="precio"
					estado={precio}
					cambiarEstado={cambiarPrecio}
					leyendaError="El valor solo puede contener numeros y el maximo son 7 dígitos."
					expresionRegular={expresiones.precio}
				/>
				<Input
					label="Cantidad de adultos"
					tipo="number"
					name="adultos"
					estado={adultos}
					cambiarEstado={cambiarAdultos}
					leyendaError="El número solo puede contener números y el maximo es 1 dígito."
					expresionRegular={expresiones.adultos}
				/>
        		<Input
					label="Cantidad de niños"
					tipo="number"
					name="ninos"
					estado={ninos}
					cambiarEstado={cambiarNinos}
					leyendaError="El número solo puede contener números y el maximo es 1 dígito."
					expresionRegular={expresiones.ninos}
				/>
				{/* <Input
					estado={img}
					className="Imagenes"
					cambiarEstado={cambiarImg}
					tipo="file"
          			label="Vista previa"
					placeholder=""
					name="img"
					leyendaError="La imagén debe estar adjunta"
				/> */}

			<Label htmlFor='estado'>Estado de la habitación</Label>
			<select 
			className='estado'
			id='estado'
			name="estado"
			estado={estado}
			cambiarEstado={cambiarEstado}
			onChange={capturaDatosEstado}>
				<option value="" selected>Estado</option>
				<option value="Disponible">Disponible</option>
				<option value="No disponible">No Disponible</option>
				<option value="En mantenimiento">En Mantenimiento</option>
			</select>

			<div className='opcional'>
				<ContenedorTerminos>  
					<Label>WiFi
					<input 
						className='check'
						type="checkbox"
						name="wifi"
						id="wifi"
						checked={wifi} 
						onChange={onChangeWifi}
					/>
					</Label>
				</ContenedorTerminos>

				<ContenedorTerminos>  
					<Label>TV
					<input 
						className='check'
						type="checkbox"
						name="tv"
						id="tv"
						checked={tv} 
						onChange={onChangeTv}
					/>
					</Label>
				</ContenedorTerminos>

				<ContenedorTerminos>  
					<Label>Baño
					<input 
						className='check'
						type="checkbox"
						name="bano"
						id="bano"
						checked={bano} 
						onChange={onChangeBano}
					/>
					</Label>
				</ContenedorTerminos>

				<ContenedorTerminos>  
					<Label>Caja Fuerte
					<input 
						className='check'
						type="checkbox"
						name="caja"
						id="caja"
						checked={caja} 
						onChange={onChangeCaja}
					/>
					</Label>
				</ContenedorTerminos>

				<ContenedorTerminos>  
					<Label>Nevera
					<input 
						className='check'
						type="checkbox"
						name="nevera"
						id="nevera"
						checked={nevera} 
						onChange={onChangeNevera}
					/>
					</Label>
				</ContenedorTerminos>
			</div>

				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}      
				
				<ContenedorBotonCentrado>
					<Boton type="submit">Guardar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
		<Footer/>
		</>
	);
}
 
export default RegistroH;
