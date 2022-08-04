import './Reservaciones.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import ListReservas from '../ListReservas';
import DashUser from '../../components/dashuser/DashUser'
import Footer from '../../components/footer/Footer';



let Reservaciones = () => {




    return (
        <>
            <DashUser></DashUser>
            <Container>
                <div className='reservations-text'>
                    <h1>Reservaciones</h1>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                </div>
                <ListReservas></ListReservas>
            </Container>
            <Footer></Footer>

        </>
    )
}

export default Reservaciones;