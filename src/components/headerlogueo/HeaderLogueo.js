import { Link } from 'react-router-dom';
import Logo2 from '../../img/logo2.png';
import Cookies from 'universal-cookie';

const HeaderLogueo =()=>{

    const cookies = new Cookies();

    return (
        <>
        <header className='header-home'>
            <section className='logo-home'>
                <Link to='/inicio-sugerido'>
                    <img src={Logo2} alt=''/></Link>
            </section>
            <section className='logueo-index'>
                <div className='espacio-imagen'>
                    <img src={cookies.get('img')} class="rounded-circle" alt="imagen perfil" />
                </div>
                <div className='espacio-datos'>
                    <p>{cookies.get('nombre')}</p><p>{cookies.get('apellido')}</p>
                    <p>{cookies.get('tipouser')}</p>
                </div>
            </section>
        </header>
        </>
    )
}

export default HeaderLogueo;