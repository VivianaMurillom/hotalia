import {Card} from "react-bootstrap";
import "./CardsHabitaciones.css";
import ModalHabitaciones from "../modalhabitaciones/ModalHabitaciones.js";

let CardsHabitaciones=(props)=>{

    const urlImg="https://hoteliakuepa.herokuapp.com";

    return(
        <>
            <div class="cards-rooms-container">
                <Card className="cards-rooms-general">
                    <Card.Img variant="top" src={urlImg+props.room12} className="cards-img-rooms"/>
                    <Card.Body>
                        <Card.Title className="cards-room-general-title">{props.room2}</Card.Title>
                        <Card.Text>
                            <div className="card-price-content">
                                <h6>Precio noche</h6>
                                <p>{`$ ${props.room11} COP`}</p>
                            </div>
                            {props.room5}
                        </Card.Text>
                        <div className="buttons-cards-rooms">
                            <button className="general-button" data-bs-toggle="modal" data-bs-target={`#id${props.room1}`}>Ver más</button>
                            {/* <button className="secundary-button">Reservar ahora</button> */}
                        </div>
                    </Card.Body>
                </Card>

                <ModalHabitaciones
                roomId={`id${props.room1}`}
                roomNombre={props.room2}
                roomCapacidadPersonas={props.room3}
                roomCantidadCamas={props.room4}
                roomDescripcion={props.room5}
                roomWifi={props.room6}
                roomTv={props.room7}
                roomBanio={props.room8}
                roomCajaFuerte={props.room9}
                roomNevera={props.room10}
                roomPrecioNoche={props.room11}
                roomImg={props.room12}
                roomEstado={props.room13}
                />
            </div>
        </>
    )
}

export default CardsHabitaciones;