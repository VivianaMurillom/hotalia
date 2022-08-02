import "./FBhabitacion.css";
import Input from '../inputsforms/Input';
import {useState} from "react";
// import ModalHabitaciones from '../modalhabitaciones/ModalHabitaciones';

let FBHabitacion=()=>{

    const [fechaEntrada, cambiarFechaEntrada] = useState({campo: ''});
    const [fechaSalida, cambiarFechaSalida] = useState({campo: ''});
    const [personasAdultas, cambiarPersonasAdultas] = useState('Cantidad');
    const [personasNinios, cambiarPersonasNinios] = useState('Cantidad');

    const capturaDatosAdultos = (e) => {
        cambiarPersonasAdultas(e.target.value);
    }

    const capturaDatosNinios = (e) => {
        cambiarPersonasNinios(e.target.value);
    }

    let fechaInicial=fechaEntrada.campo;
    console.log(fechaInicial);
    let fechaFinal=fechaSalida.campo;
    console.log(fechaFinal);
    let adultos=personasAdultas;
    console.log(adultos);
    let ninios=personasNinios;
    console.log(ninios);

    return(
        <>
            <form className="form-search-room">
                <div className="form-room-search">
                    <div className="form-sections-room">
                        <div className="form-divisions">
                            <Input 
                            label="Fecha de entrada"
                            tipo="date"
                            name="fechaEntrada"
                            estado={fechaEntrada}
                            cambiarEstado={cambiarFechaEntrada}/>
                        </div>
                        <div className="form-divisions">
                            <Input 
                            label="Fecha de salida"
                            tipo="date"
                            name="fechaSalida"
                            estado={fechaSalida}
                            cambiarEstado={cambiarFechaSalida}/>
                        </div>
                    </div>
                    <div className="form-sections-room">
                        <div className="form-divisions">
                            <label>Cantidad de personas adultas</label>
                            <select
                            name="personasAdultas"
                            estado={personasAdultas}
                            cambiarEstado={cambiarPersonasAdultas}
                            onChange={capturaDatosAdultos}>
                            <option value="" selected>Elija la cantidad</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                            </select>
                        </div>
                        <div className="form-divisions">
                            <label>Cantidad de personas niños</label>
                            <select
                            name="personasNinios"
                            estado={personasNinios}
                            cambiarEstado={cambiarPersonasNinios}
                            onChange={capturaDatosNinios}>
                            <option value="" selected>Elija la cantidad</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                            </select>
                        </div>
                    </div>
                    <div className="section-button-form-room">
                        <button className="general-button" disabled>Búsqueda</button>
                    </div>
                </div>
            </form>
            {/* {
                <ModalHabitaciones
                    let fechaI={fechaInicial}
                    let fechaF={fechaFinal}
                    let nAdultos={adultos}
                    let nNinios={ninios}
                />
            } */}
        </>
    )
}

export default FBHabitacion;