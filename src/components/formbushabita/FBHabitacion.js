import "./FBhabitacion.css";

let FBHabitacion=()=>{
    return(
        <>
            <form className="form-search-room">
                <div className="form-room-search">
                    <div className="form-sections-room">
                        <div className="form-divisions">
                            <label>Fecha de entrada</label>
                            <input type="date"/>
                        </div>
                        <div className="form-divisions">
                            <label>Fecha de salida</label>
                            <input type="date"/>
                        </div>
                    </div>
                    <div className="form-sections-room">
                        <div className="form-divisions">
                            <label>Cantidad de personas adultas</label>
                            <select>
                            <option value="" selected>Elija la cantidad</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                            </select>
                        </div>
                        <div className="form-divisions">
                            <label>Cantidad de personas niños</label>
                            <select>
                            <option value="" selected>Elija la cantidad</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                            </select>
                        </div>
                    </div>
                    <div className="section-button-form-room">
                        <button type="submit" className="general-button">Búsqueda</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FBHabitacion;