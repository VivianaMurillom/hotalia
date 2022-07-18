import "./ModalHabitaciones.css";

let ModalHabitaciones=(props)=>{

    const cargarImgModal= require.context("../cardhabitacion/img/", true);

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
                        <img src={cargarImgModal(`./${props.roomImg}.jpg`)} alt={props.roomNombre}/>
                        <h5>Descripción de la habitación</h5>
                        <p className="text-start">{props.roomDescripcion}</p>
                        <h5>Número de habitación</h5>
                        <p className="text-start">{props.roomNumero}</p>
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
                            <p>{props.roomPrecioNoche}</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="secundary-button" data-bs-dismiss="modal">Reservar Ahora</button>
                        <button type="button" className="general-button">Contactar asesor</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModalHabitaciones;