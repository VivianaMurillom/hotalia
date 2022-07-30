import CardsHabitaciones from "../../components/cardhabitacion/CardsHabitaciones";
import Footer from "../../components/footer/Footer";
import FBHabitacion from "../../components/formbushabita/FBHabitacion";
import "./BuscarHabitacion.css";
import DashUser from '../../components/dashuser/DashUser';
import {useState, useEffect} from "react";
import axios from "axios";

let BuscarHabitacion=()=>{

    const url="https://hoteliakuepa.herokuapp.com/habitaciones";

    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }

    const [list,setList]=useState([]);
    const [upList, setUpList]=useState(false);

    useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);
        })
    },[upList]);

    console.log(list);

    return(
        <>
        <DashUser/>
        <section className="section-search-room">
            <h1>Búsqueda de habitación</h1>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
            <FBHabitacion/>
            <div className="section-container-rooms">
                {
                    list.map(habi=>(
                        <CardsHabitaciones
                        room1={habi.id}
                        room2={habi.nombrehab}
                        room3={habi.capacidad}
                        room4={habi.camas}
                        room5={habi.descripcion}
                        room6={habi.wifi}
                        room7={habi.tv}
                        room8={habi.banio}
                        room9={habi.cajafuerte}
                        room10={habi.nevera}
                        room11={habi.valornoche}
                        room12={habi.img}
                        room13={habi.estado}
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