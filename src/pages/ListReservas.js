import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Form, Modal, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import CardReservas from './CardReservas';
import 'bootstrap/dist/css/bootstrap.min.css';


function ListReservas() { 



    const url = "http://localhost:4000/reservaciones";

    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    const [list, setList] = useState([]);
    const [upList, setUplist] = useState([false]);
    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false); }
    const handleOpen = () => { setShow(true); }
    const [dataModal, setDataModal] = useState({})



    const handleChangeModal = ({ target }) => {
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${url}/${dataModal.id}`, dataModal);
        console.log(response);
        if (response.status === 200) {
            Swal.fire(
                '¡Cambio Guardado!'
            )
            handleClose();
            setUplist(!upList);
        }
        else {
            Swal.fire(
                '¡Error!'
            )
        }
    }


    


    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        })
    }, [upList])




    return (

        <Container>
            <Row>
                {
                    list.map((est, index, ) => (

                        <CardReservas
                            key={index}
                            reservacion={est}
                            setUplist={setUplist}
                            upList={upList}
                            handleClose={handleClose}
                            handleOpen={handleOpen}
                            setDataModal={setDataModal}
                        />

                    ))
                }
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar reserva</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>

                        <Form.Group className="mb-3">
                            <Form.Label>Fecha de Entrada:</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder=""
                                name="fechaen"
                                value={dataModal.fechaen}
                                onChange={handleChangeModal} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Fecha de Salida:</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder=""
                                name="fechasal"
                                value={dataModal.fechasal}
                                onChange={handleChangeModal} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Cantidad de Adultos:</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder=""
                                name="adultos"
                                value={dataModal.adultos}
                                onChange={handleChangeModal} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Cantidad de niños:</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder=""
                                name="ninos"
                                value={dataModal.ninos}
                                onChange={handleChangeModal} />
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={handleClose}>
                            Close
                        </button>
                        <button className="btn btn-primary" type="submit">
                            Guardar Cambios
                        </button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </Container>
    );
}
export default ListReservas;