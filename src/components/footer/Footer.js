import logo from "../../img/logo.png";
import "./Footer.css";

let Footer=()=>{
    return(
        <>
        <footer>
            <div className="img-logo">
                <img src={logo} alt="Logo de Hotelia"/>
            </div>

            <div className="footer-data">
                <h3>¡Te esperamos!</h3>
                <div>
                    <p>Calle falsa # 123</p>
                    <p>300 000 0000</p>
                </div>
            </div>

            <div className="footer-social">
                <h3>Encuentranos tambien en: </h3>
                <div className="social-media">
                    <i class="fa-brands fa-facebook-square fa-3x"></i>
                    <i class="fa-brands fa-twitter-square fa-3x"></i>
                    <i class="fa-brands fa-instagram-square fa-3x"></i>
                </div>
            </div>

        </footer>
        </>
    )
}

export default Footer;