import { Link } from "react-router-dom";

let Perfil=()=>{
    return(
        <>
        <h1>Página de perfil de usuario</h1>
        <main>
            <h1>Perfil</h1>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>

            <section>
                <img src="none" alt="imagen perfil"/>
                <Link to="/editar-perfil">Cambiar foto</Link>
            </section>

            <section>
                <div>
                    <h3>Nombres</h3>
                    <p>Pepito Andres</p>
                </div>
                <div>
                    <h3>Apellido</h3>
                    <p>Perez Valvuena</p>
                </div>
                <div>
                    <h3>Tipo de documento de identidad</h3>
                    <p>Cédula de ciudadanía</p>
                </div>
                <div>
                    <h3>Número de documento de identidad</h3>
                    <p>1234567890</p>
                </div>
                <div>
                    <h3>Fecha de nacimiento</h3>
                    <p>24/06/1996</p>
                </div>
                <div>
                    <h3>Género</h3>
                    <p>Masculino</p>
                </div>
                <div>
                    <h3>Correo</h3>
                    <p>pepito@mail.com</p>
                </div>
                <div>
                    <h3>Teléfono de contacto</h3>
                    <p>315 369 3659</p>
                </div>
                <div>
                    <h3>País de origen</h3>
                    <p>Colombia</p>
                </div>
                <div>
                    <button>Realizar cambios</button>
                </div>
            </section>

            <section>
                <div>
                    <h3>Contraseña</h3>
                    <p>*****************</p>
                </div>
                <div>
                    <button>Cambiar contraseña</button>
                </div>
            </section>
        </main>
        </>
    )
}

export default Perfil;