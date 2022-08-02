import "./ModalHabitaciones.css";
import Cookies from 'universal-cookie';
import Swal from "sweetalert2";

let ModalHabitaciones=(props)=>{

    const cookies = new Cookies();

    console.log('_id: '+ cookies.get('_id'));
    console.log('nombre: '+cookies.get('nombre'));
    console.log('apellido: '+cookies.get('apellido'));
    console.log('correo '+ cookies.get('email'));

    const urlImg="https://hoteliakuepa.herokuapp.com";

    const reservarAhora= ()=>{
        Swal.fire({
            title: "Por favor, confirma los datos:",
            html:
                '<b>Fecha de entrada: </b>'+
                '01/07/2022'+
                '<br><b>Fecha de salida: </b>'+
                '03/07/2022'+
                '<br><b>Cantidad de adultos: </b>'+
                '2'+
                '<br><b>Cantidad de niños: </b>'+
                '2'+
                '<br><b>Nombre de la habitación: </b>'+
                'Habitación 1A'+
                '<br><b>Valor total: </b>'+
                '$ 324.999 COP',
            confirmButtonText: "Aceptar"
        })
    }

    return(
        <>
        <div className="modal fade modal-card-rooms" id={props.roomId} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLabel">{props.roomNombre}</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={urlImg+props.roomImg} alt={props.roomNombre}/>
                        <h5>Descripción de la habitación</h5>
                        <p className="text-start">{props.roomDescripcion}</p>
                        <h5>Cantidad de camas</h5>
                        <p className="text-start">{props.roomCantidadCamas}</p>
                        <h5>Capacidad de personas</h5>
                        <p className="text-start">{props.roomCapacidadPersonas}</p>
                        <div className="modal-aditionals-container">
                            <h5>En esta habitación usted tiene la posibilidad de solicitar:</h5>
                            <div className="aditionals-options">
                                <i class="fa-solid fa-wifi fa-3x"></i>
                                <p>Wifi</p>
                                <i class="fa-solid fa-toggle-on fa-3x"></i>
                            </div>
                            <div className="aditionals-options">
                                <i class="fa-solid fa-tv fa-3x"></i>
                                <p>Tv</p>
                                <i class="fa-solid fa-toggle-on fa-3x"></i>
                            </div>
                            <div className="aditionals-options">
                                <i class="fa-solid fa-toilet fa-3x"></i>
                                <p>Baño</p>
                                <i class="fa-solid fa-toggle-on fa-3x"></i>
                            </div>
                            <div className="aditionals-options">
                                <i class="fa-solid fa-martini-glass-citrus fa-3x"></i>
                                <p>Refrigerador</p>
                                <i class="fa-solid fa-toggle-off fa-3x"></i>
                            </div>
                            <div className="aditionals-options">
                                <i class="fa-solid fa-key fa-3x"></i>
                                <p>Caja fuerte</p>
                                <i class="fa-solid fa-toggle-off fa-3x"></i>
                            </div>
                        </div>
                        <div className="modal-price-content">
                            <h5>Precio noche</h5>
                            <p>{`$ ${props.roomPrecioNoche} COP`}</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="secundary-button" 
                            data-bs-dismiss="modal"
                            onClick={reservarAhora}>
                                Reservar Ahora
                        </button>
                        <button type="button" className="general-button">Contactar asesor</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModalHabitaciones;