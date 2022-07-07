import {getAllHabitaciones} from "./HabitacionesDB.js";
import {Card} from "react-bootstrap";
import "./CardsHabitaciones.css";

let CardsHabitaciones=()=>{

    const allHabitaciones=getAllHabitaciones();
    const cargarImagen = require.context("./img/", true);

    return(
        <>
            <div class="cards-rooms-container">
                {
                    allHabitaciones.map(habi=>(
                        <Card style={{ width: '18rem' }} className="cards-rooms-general">
                            <Card.Img variant="top" src={cargarImagen(`./${habi.img}.jpg`)} className="cards-img-rooms"/>
                            <Card.Body>
                                <Card.Title className="cards-room-general-title">{habi.nombre}</Card.Title>
                                <Card.Text>
                                    {habi.descripcion}
                                </Card.Text>
                                <div className="buttons-cards-rooms">
                                    <button className="general-button">Ver más</button>
                                    <button className="secundary-button">Reservar ahora</button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </>
    )
}

export default CardsHabitaciones;