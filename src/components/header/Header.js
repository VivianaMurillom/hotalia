import { Link } from 'react-router-dom';
import Logo2 from '../../img/logo2.png';

const Header =()=>{
    return (
        <>
        <header className='header-home'>
            <section className='logo-home'>
                <img src={Logo2} alt=''></img>
            </section>
            <section className='buttons-index'>
                <Link to ='/login' className='button-login'><i class="fa-solid fa-user"></i>Iniciar Sesión</Link>
                <Link to='/registro' className='button-login'><i class="fa-solid fa-user-pen"></i>Registrarse</Link>
            </section>
        </header>
        </>
    )
}

export default Header;
