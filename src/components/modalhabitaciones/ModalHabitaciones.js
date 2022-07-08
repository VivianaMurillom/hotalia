import "./ModalHabitaciones.css";

let ModalHabitaciones=(props)=>{

    const cargarImgModal= require.context("../cardhabitacion/img/", true);

    return(
        <>
        <div className="modal fade modal-card-rooms" id={props.roomId} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.roomNombre}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={cargarImgModal(`./${props.roomImg}.jpg`)} alt={props.roomNombre}/>
                        <h3>Descripción de la habitación</h3>
                        <p>{props.roomDescripcion}</p>
                        <h3>Número de habitación</h3>
                        <p>{props.roomNumero}</p>
                        <h3>Cantidad de camas</h3>
                        <p>{props.roomCantidadCamas}</p>
                        <h3>Capacidad de personas</h3>
                        <p>{props.roomCapacidadPersonas}</p>
                        <div className="modal-aditionals-container">
                            <h3>En esta habitación usted tiene la posibilidad de solicitar:</h3>
                            <div className="aditionals-options">
                                <i class="fa-solid fa-wifi"></i>
                                <p>Wifi</p>
                                <i class="fa-solid fa-toggle-on"></i>
                            </div>
                            <div className="aditionals-options">
                                <i class="fa-solid fa-tv"></i>
                                <p>Tv</p>
                                <i class="fa-solid fa-toggle-on"></i>
                            </div>
                            <div className="aditionals-options">
                                <i class="fa-solid fa-toilet"></i>
                                <p>Baño</p>
                                <i class="fa-solid fa-toggle-on"></i>
                            </div>
                            <div className="aditionals-options">
                                <i class="fa-solid fa-martini-glass-citrus"></i>
                                <p>Refrigerador</p>
                                <i class="fa-solid fa-toggle-off"></i>
                            </div>
                            <div className="aditionals-options">
                                <i class="fa-solid fa-key"></i>
                                <p>Caja fuerte</p>
                                <i class="fa-solid fa-toggle-off"></i>
                            </div>
                        </div>
                        <div className="modal-price-content">
                            <h3>Precio noche</h3>
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