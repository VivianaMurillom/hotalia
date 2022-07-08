import {Card} from "react-bootstrap";
import "./CardsHabitaciones.css";
import ModalHabitaciones from "../modalhabitaciones/ModalHabitaciones.js";

let CardsHabitaciones=(props)=>{

    const cargarImagen = require.context("./img/", true);

    return(
        <>
            <div class="cards-rooms-container">
                <Card style={{ width: '18rem' }} className="cards-rooms-general">
                    <Card.Img variant="top" src={cargarImagen(`./${props.room8}.jpg`)} className="cards-img-rooms"/>
                    <Card.Body>
                        <Card.Title className="cards-room-general-title">{props.room2}</Card.Title>
                        <Card.Text>
                            {props.room4}
                        </Card.Text>
                        <div className="buttons-cards-rooms">
                            <button className="general-button" data-bs-toggle="modal" data-bs-target={`#id${props.room1}`}>Ver más</button>
                            <button className="secundary-button">Reservar ahora</button>
                        </div>
                    </Card.Body>
                </Card>

                <ModalHabitaciones
                roomId={`id${props.room1}`}
                roomNombre={props.room2}
                roomNumero={props.room3}
                roomDescripcion={props.room4}
                roomCantidadCamas={props.room5}
                roomPrecioNoche={props.room6}
                roomCapacidadPersonas={props.room7}
                roomImg={props.room8}
                roomWifi={props.room9}
                roomTv={props.room10}
                roomNevera={props.room11}
                roomCajaFuerte={props.room12}
                roomBanio={props.room13}
                />
            </div>
        </>
    )
}

export default CardsHabitaciones;