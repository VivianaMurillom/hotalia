let Formperfil=()=>{
    return(
        <>
        <section>
            <h2>Editar datos</h2>

            <form>
                <div>
                    <label>Nombres</label>
                    <input
                    type="text"/>
                </div>
                <div>
                    <label>Apellidos</label>
                    <input
                    type="text"/>
                </div>
                <div>
                    <label>Tipo de documento de identidad</label>
                    <select>
                        <option value="" selected>Elija su documento</option>
                        <option value="Registro Civil">Registro Civil</option>
                        <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                        <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                        <option value="Cédula de extranjería">Cédula de extranjería</option>
                    </select>
                </div>
                <div>
                    <label>Número de documento de identidad</label>
                    <input
                    type="number"/>
                </div>
                <div>
                    <label>Fecha de nacimiento</label>
                    <input
                    type="date"/>
                </div>
                <div>
                    <label>Genero</label>
                    <input
                    type="text"/>
                </div>
                <div>
                    <label>Correo</label>
                    <input
                    type="mail"/>
                </div>
                <div>
                    <label>Telefono de contacto</label>
                    <input
                    type="number"/>
                </div>
                <div>
                    <label>País de origen</label>
                    <input
                    type="text"/>
                </div>
                <div>
                    <button type="submit">Guardar cambios</button>
                </div>
            </form>
        </section>
        </>
    )
}

export default Formperfil;