import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from 'react-router-dom';
import './inicioSugerido.css';

const Inicio =()=>{
    return(
        <>
        <Header/>
        <section className="fondo-imagen">
            <div className="contenido-texto-boton">
                <h1>Calidez,<br></br>elegancia<br></br>Y<br></br>comodidad.</h1>
                <div className="espacio-boton">
                    <Link to='/buscar-habitacion' className="general-button">Buscar habitación</Link>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Inicio;