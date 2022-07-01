import Footer from "../../components/footer/Footer";
import FBHabitacion from "../../components/formbushabita/FBHabitacion";
import "./BuscarHabitacion.css";

let BuscarHabitacion=()=>{
    return(
        <>
        <section className="section-search-room">
            <h1>Búsqueda de habitación</h1>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
            <FBHabitacion/>
            <Footer/>
        </section>
        </>
    )
}

export default BuscarHabitacion;