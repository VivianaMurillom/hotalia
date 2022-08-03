import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, ListGroup } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Prueba = ({ reservacion, setUplist, upList, handleClose, handleOpen, setDataModal }) => {

  const url = "http://localhost:4000/reservaciones";

  const handleDelete = async () => {

    Swal.fire({
      title: 'Está seguro que desea eliminar este registro?',
      text: "No puedes revertir está acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Sí, Bórralo!'
    }).then((result) => {

      if (result.isConfirmed) {

        axios.delete(`${url}/${reservacion.id}`).then((response) => {
          console.log(response);


          if (response.status === 200) {
            Swal.fire(
              'Eliminado!'
            )
            setUplist(!upList);
          } else {
            Swal.fire(
              'Error!'
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





  const [reservas, setReservas] = useState([]);
  const [cardReservas, setCardReservas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async () => {
    await axios.get("http://localhost:4000/reservaciones")
      .then(response => {
        setReservas(response.data);
        setCardReservas(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = cardReservas.filter((elemento) => {
      if (elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setReservas(resultadosBusqueda);
  }

  useEffect(() => {
    peticionGet();
  }, [])

  return (
    <div className="App">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por número de habitación"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="reservations-cards">
        <div className='reservations-cards'>
          {
            reservas.map((reservacion) => (
              <Card className="horizontal card-reservations d-flex">
                <Card.Img variant="top" src={reservacion.image} />
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


            ))}

        </div>
      </div>

    </div>
  );
}
export default Prueba