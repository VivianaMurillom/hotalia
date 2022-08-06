import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './registroH/Input';
import "./estilos.css"

const App = () => {
	
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [numero, cambiarNumero] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [cantcamas, cambiarCantcamas] = useState({campo: '', valido: null});
	const [precio, cambiarPrecio] = useState({campo: '', valido: null});
	const [adultos, cambiarAdultos] = useState({campo: '', valido: null});
	const [ninos, cambiarNinos] = useState({campo: '', valido: null});
	const [img, cambiarImg] = useState({campo: '', valido: null});
	const [wifi, cambiarWifi] = useState(false);
	const [tv, cambiarTv] = useState(false);
	const [bano, cambiarBano] = useState(false);
	const [caja, cambiarCaja] = useState(false);
	const [nevera, cambiarNevera] = useState(false);

	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		numero: /^\d{1,5}$/, // 1 a 5 numeros.
		descripcion: /^[a-zA-ZÀ-ÿ\s]{1,200}$/, // Letras y espacios, pueden llevar acentos.
		cantcamas: /^\d{1}$/, // 1 numeros.
		precio: /^\d{1,7}$/, // 1 a 7 numeros.
		adultos: /^\d{1}$/, // 1 numeros.
		ninos: /^\d{1}$/, // 1 numeros.

	}

	const onChangeWifi = (e) => {
		cambiarWifi(e.target.checked);
	}

	const onChangeTv = (e) => {
		cambiarTv(e.target.checked);
	}
	
	const onChangeBano = (e) => {
		cambiarBano(e.target.checked);
	}

	const onChangeCaja = (e) => {
		cambiarCaja(e.target.checked);
	}

	const onChangeNevera = (e) => {
		cambiarNevera(e.target.checked);
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			nombre.valido === 'true' &&
			numero.valido === 'true' &&
			descripcion.valido === 'true' &&
			cantcamas.valido === 'true' &&
			precio.valido === 'true' &&
			adultos.valido === 'true' &&
			ninos.valido === 'true' &&
			wifi
			
		){
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: null});
			cambiarNumero({campo: '', valido: null});
			cambiarDescripcion({campo: '', valido: null});
			cambiarCantcamas({campo: '', valido: null});
			cambiarPrecio({campo: '', valido: null});
			cambiarAdultos({campo: '', valido: null});
			cambiarNinos({campo: '', valido: null});


		} else {
			cambiarFormularioValido(false);
		}
	}

	return (
		<main>
      <h1>Registro de Habitaciones</h1>
			<Formulario action="" onSubmit={onSubmit}>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre de la Habitación"
					placeholder=""
					name="nombre"
					leyendaError="El nombre tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={numero}
					cambiarEstado={cambiarNumero}
					tipo="number"
					label="Número de la Habitación"
					placeholder=""
					name="**"
					leyendaError="El número solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.numero}
				/>
				<Input
					estado={descripcion}
					cambiarEstado={cambiarDescripcion}
					tipo="text"
					label="Descripción de la Habitación"
					placeholder=""
					name="descripcion"
					leyendaError="La descripción tiene que ser de 10 a 40 dígitos y solo puede contener numeros y letras."
					expresionRegular={expresiones.descripcion}
				/>
				<Input
					estado={cantcamas}
					cambiarEstado={cambiarCantcamas}
					tipo="number"
					label="Cantidad de camas"
					name="**"
					leyendaError="El número solo puede contener numeros y el maximo es 1 dígito."
					expresionRegular={expresiones.cantcamas}
				/>
				<Input
					estado={precio}
					cambiarEstado={cambiarPrecio}
					tipo="number"
					label="Precio por noche"
					name="**"
					leyendaError="El valor solo puede contener numeros y el maximo son 7 dígitos."
					expresionRegular={expresiones.precio}
				/>
				<Input
					estado={adultos}
					cambiarEstado={cambiarAdultos}
					tipo="number"
          			label="Adultos"
					placeholder=""
					name="**"
					leyendaError="El número solo puede contener números y el maximo es 1 dígito."
					expresionRegular={expresiones.adultos}
				/>
        		<Input
					estado={ninos}
					cambiarEstado={cambiarNinos}
					tipo="number"
          			label="Niños"
					placeholder=""
					name="**"
					leyendaError="El número solo puede contener números y el maximo es 1 dígito."
					expresionRegular={expresiones.ninos}
				/>
				<Input
					estado={img}
					className="Imagenes"
					cambiarEstado={cambiarImg}
					tipo="file"
          			label="Vista previa"
					placeholder=""
					name="img"
					leyendaError="La imagén debe estar adjunta"
				/>

			<select className='estado'>
				<option>Disponible</option>
				<option>No Disponible</option>
				<option>En Mantenimiento</option>
			</select>

			<div className='opcional'>
				<ContenedorTerminos>  
					<Label>WiFi
					<input 
						className='check'
						type="checkbox"
						name="wifi"
						id="**"
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
						id="**"
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
						id="**"
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
						id="**"
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
						id="**"
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
	);
}
 
export default App;
