import './Reservaciones.css';
import {Card} from 'react-bootstrap';
import Footer from '../../components/footer/Footer';
import room1 from './img/room1.jpg';
import Swal from "sweetalert2";

let Reservaciones=()=>{

    let alertaCancelacion=()=>{
         
        Swal.fire({
            title: '¿Desea cancelar su reservación?',
            text: "Recuerde que la cancelación no se puede revertir.",
            icon: 'warning',
            iconColor: '#FF820D',
            showCancelButton: true,
            confirmButtonColor: '#FF820D',
            cancelButtonColor: '#337AB7',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire(
                'Cancelado!',
                'Su reservación ha sido cancelada correctamente.',
                'success'
            )
            }
        })
    }

    return(
        <>
        <section className='section-reservations'>

            <div className='reservations-text'>
                <h1>Reservaciones</h1>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
            </div>

            <div className='reservations-cards'>
                <Card className="card-reservation-content">
                    <Card.Img variant="top" src={room1} />
                    <Card.Body>
                        <Card.Title className='title-card-reserv'>Reservación 1</Card.Title>
                        <Card.Text>
                            <div className='card-division'>
                                <div className='card-division-part'>
                                    <div>
                                        <p className='card-subtitle-reserv'>Fecha de entrada</p>
                                        <p className='card-text-reserv'>01/07/2022</p>
                                    </div>
                                    <div>
                                        <p className='card-subtitle-reserv'>Fecha de salida</p>
                                        <p className='card-text-reserv'>03/07/2022</p>
                                    </div>
                                </div>
                                <div className='card-division-part'>
                                    <div>
                                        <p className='card-subtitle-reserv'>Cantidad de personas adultas</p>
                                        <p className='card-text-reserv'>2</p>
                                    </div>
                                    <div>
                                        <p className='card-subtitle-reserv'>Cantidad de niños</p>
                                        <p className='card-text-reserv'>2</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='card-subtitle-reserv'>Nombre de la habitación</p>
                                <p className='card-text-reserv'>Habitación 1A</p>
                            </div>
                            <div>
                                <p className='card-subtitle-reserv'>Descripción de habitación</p>
                                <p className='card-text-reserv'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <div>
                                <p className='card-subtitle-price'>Valor total con impuestos:</p>
                                <p className='card-text-price'>$324.999 </p>
                            </div>
                        </Card.Text>
                        <div className='button-card-reserva'>
                            <button className="secundary-button" onClick={alertaCancelacion}>Cancelar</button>
                        </div>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img src={room1} />
                        <Card.Body>
                            <Card.Title className='title-card-reserv'>Reservación 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                </Card>
            </div>

            <div className='contact-reservations-button'>
                <button className="general-button">Contactar un asesor</button>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Reservaciones;