import React from 'react';
import { Card} from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
// import ListGroup from 'react-bootstrap/ListGroup';


function CardReservas({ reservacion, setUplist, upList, handleClose, handleOpen, setDataModal }) {

    const url = "http://localhost:4000/reservaciones";

    const handleDelete = async () => {

        Swal.fire({
            title: '¿Deseas confirmar el registro?',
            showCancelButton: true,
            confirmButtonColor: '#157A8A',
            cancelButtonColor: '#FF820D',
            cancelButtonText: "Cancelar",
            confirmButtonText: 'Sí, confirmar'
        }).then((result) => {

            if (result.isConfirmed) {

                axios.delete(`${url}/${reservacion.id}`).then((response) => {
                    console.log(response);


                    if (response.status === 200) {
                        Swal.fire(
                            '¡Confirmado!'
                        )
                        setUplist(!upList);
                    } else {
                        Swal.fire(
                            '¡Error!'
                        )
                    }
                });
            }

        })


    }


    const handleEdit = () => {
        handleOpen();
        setDataModal(reservacion);
    }
    return (

        <div className='reservations-cards'>
            <Card className="horizontal-card-reservations d-flex" style={{ maxWidth: '540px' }}>
                <Card.Img position="top" src={reservacion.image} />
                <Card.Body>
                    <Card.Title className='title-card-reserv'>{reservacion.nombre} </Card.Title>
                    <Card.Title className='title-card-reserv'>Reservación: {reservacion.id}</Card.Title>

                    <Card.Text>
                    
                        <div className='card-division'>
                            <div className='card-division-part'>
                                <div>
                                    <p className='card-subtitle-reserv'>Fecha de entrada</p>
                                    <p className='card-text-reserv'>{reservacion.fechaen}</p>
                                </div>
                                <div>
                                    <p className='card-subtitle-reserv'>Fecha de salida</p>
                                    <p className='card-text-reserv'>{reservacion.fechasal}</p>
                                </div>
                            </div>
                            <div className='card-division-part'>
                                <div>
                                    <p className='card-subtitle-reserv'>Cantidad de personas adultas</p>
                                    <p className='card-text-reserv'>{reservacion.adultos}</p>
                                </div>
                                <div>
                                    <p className='card-subtitle-reserv'>Cantidad de niños</p>
                                    <p className='card-text-reserv'>{reservacion.ninos}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='card-subtitle-price'>Valor total con impuestos:</p>
                            <p className='card-text-price'>{reservacion.valor} </p>
                        </div>
                    </Card.Text>
                    <div className='buttons-cards-reservations'>
                    <button className="button-editar" onClick={handleEdit}>Editar</button>
                    <button className="button-confirmar" onClick={handleDelete}>Confirmar</button>
                    </div>
                </Card.Body>
            </Card>
        </div>


    )
}

export default CardReservas;


/* 

        <div className="reservations-cards">
            <div className='reservations-cards'>
                <Card className="horizontal-card-reservations d-flex" style={{ maxWidth: '540px' }}>
                    <Card.Img position="top" src={reservacion.image} />
                    <Card.Body>
                        <Card.Title className='title-card-reserv'>Reservación: {reservacion.id}</Card.Title>
                        <Card.Text>
                        
                            <div className='card-division'>
                                <div className='card-division-part'>
                                    <div>
                                        <p className='card-subtitle-reserv'>Fecha de entrada</p>
                                        <p className='card-text-reserv'>{reservacion.fechaen}</p>
                                    </div>
                                    <div>
                                        <p className='card-subtitle-reserv'>Fecha de salida</p>
                                        <p className='card-text-reserv'>{reservacion.fechasal}</p>
                                    </div>
                                </div>
                                <div className='card-division-part'>
                                    <div>
                                        <p className='card-subtitle-reserv'>Cantidad de personas adultas</p>
                                        <p className='card-text-reserv'>{reservacion.adultos}</p>
                                    </div>
                                    <div>
                                        <p className='card-subtitle-reserv'>Cantidad de niños</p>
                                        <p className='card-text-reserv'>{reservacion.ninos}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='card-subtitle-reserv'>Nombre de la habitación</p>
                                <p className='card-text-reserv'>{reservacion.nombre}</p>
                            </div>
                            <div>
                                <p className='card-subtitle-reserv'>Descripción de habitación</p>
                                <p className='card-text-reserv'>{reservacion.descripcion} </p>
                            </div>
                            <div>
                                <p className='card-subtitle-price'>Valor total con impuestos:</p>
                                <p className='card-text-price'>{reservacion.valor} </p>
                            </div>
                        </Card.Text>
                        <button className="btn btn-warning me-2" onClick={handleEdit}>Editar</button>
                        <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                    </Card.Body>
                </Card>
            </div>
        </div>



*/