import CardsHabitaciones from "../../components/cardhabitacion/CardsHabitaciones";
import Footer from "../../components/footer/Footer";
import FBHabitacion from "../../components/formbushabita/FBHabitacion";
import "./BuscarHabitacion.css";
import {getAllHabitaciones} from "../../components/cardhabitacion/HabitacionesDB";

let BuscarHabitacion=()=>{

    const allHabitaciones=getAllHabitaciones();

    return(
        <>
        <section className="section-search-room">
            <h1>Búsqueda de habitación</h1>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
            <FBHabitacion/>
            <div className="section-container-rooms">
                {
                    allHabitaciones.map(habi=>(
                        <CardsHabitaciones
                        room1={habi.id}
                        room2={habi.nombre}
                        room3={habi.numero}
                        room4={habi.descripcion}
                        room5={habi.cantidadCamas}
                        room6={habi.precioNoche}
                        room7={habi.capacidadPersonas}
                        room8={habi.img}
                        room9={habi.wifi}
                        room10={habi.tv}
                        room11={habi.nevera}
                        room12={habi.cajaFuerte}
                        room13={habi.baño}
                        />
                    ))
                }
                
            </div>
            <Footer/>
        </section>
        </>
    )
}

export default BuscarHabitacion;