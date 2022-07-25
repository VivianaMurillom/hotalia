import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import  {Container, Form, Modal, Row} from 'react-bootstrap'
import Swal from 'sweetalert2';
import Perfil from './Perfil';


const ListHuesped = () => {
    
    const url = "http//localhost2000/huespedes/1"

    const getData = async()=>{
        const response = axios.get(url);
        return response
    }

    const [list, setList] = useState([]);

    const [upList, setUplist] = useState([false]);

    const [show, setShow] = useState(false);

    const handleClose=()=>{setShow(false);}
    const handleOpen =()=>{setShow(true);}


    const [dataModal, setDataModal] =useState({})

    const handleChangeModal =({target})=>{
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response=await axios.put(`${url}/${dataModal.id}`, dataModal)
        console.log(response);
        if (response.status===200){
            Swal.fire(
                'Cambio guardado con exito',
                'success'
            )

            handleClose();
            setUplist(!upList);
        }
        else{
            Swal.fire(
                'Error',
                'Hubo un problema en cambiar los datos',
                'error'
            )
        }
    }

        /*2. useEffect para ejecutar funciones desde el inicio del renderizado*/ 
        useEffect(()=>{
            getData().then((response)=>{
                setList(response.data);
            })
        },[upList])//Se actualiza el listado cada vez que cambie el estado up List

  return (
    <Container>
        <Row>
            {
                list.map((est,index)=>(
                    <Perfil 
                    key={index}
                    huesped={est}
                    setUplist={setUplist}
                    upList={upList}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    setDataModal={setDataModal}>

                    </Perfil>
                ))
            }
        </Row>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
                    <Modal.Title>Editar Datos</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className='mb-3'>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Ingrese su nombre'
                        name='nombre'
                        value={dataModal.nombre}
                        onChange={handleChangeModal}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className= 'mb-3'> 
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Ingrese su apellido'
                        name='apellido'
                        value={dataModal.apellido}
                        onChange={handleChangeModal}>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group className= 'mb-3'> 
                        <Form.Label>Tipo de Documento</Form.Label>
                        <Form.Select 
                        name="tipodoc"
                        onChange={handleChangeModal}>
                            <option value={dataModal.tipodoc}>{dataModal.tipodoc}</option>
                            <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                            <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                            <option value="Cédula de extranjería">Cédula de extranjería</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className= 'mb-3'> 
                        <Form.Label>N° de Documento</Form.Label>
                        <Form.Control
                        type='number'
                        placeholder='Ingrese su número de documento'
                        name='numdoc'
                        value={dataModal.numdoc}
                        onChange={handleChangeModal}>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group className= 'mb-3'> 
                        <Form.Label>Fecha de Nacimiento</Form.Label>
                        <Form.Control
                        type='date'
                        placeholder='Ingrese su número fecha de nacimiento'
                        name='fnacimiento'
                        value={dataModal.fnacimiento}
                        onChange={handleChangeModal}>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group className= 'mb-3'> 
                        <Form.Label>Genero</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Ingrese su género'
                        name='genero'
                        value={dataModal.genero}
                        onChange={handleChangeModal}>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group className= 'mb-3'> 
                        <Form.Label>Genero</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Ingrese su correo'
                        name='email'
                        value={dataModal.email}
                        onChange={handleChangeModal}>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group className= 'mb-3'> 
                        <Form.Label>Telefono de Contacto</Form.Label>
                        <Form.Control
                        type='number'
                        placeholder='Ingrese su telefono'
                        name='telefono'
                        value={dataModal.telefono}
                        onChange={handleChangeModal}>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group className= 'mb-3'> 
                        <Form.Label>País de Origen</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Ingrese su Pais de Origen'
                        name='pais'
                        value={dataModal.pais}
                        onChange={handleChangeModal}>
                    </Form.Control>
                    </Form.Group>



                </Modal.Body>
                </Form>
        </Modal>
    </Container>
  )
}

export default ListHuesped