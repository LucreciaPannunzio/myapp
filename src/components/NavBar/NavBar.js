import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom';
import productos from '../../products';
import Logo from './Logo.png';
import { useContext } from 'react';
import Context, { UseCart } from '../../context/CartContext';

const NavBar = () => {
    //const {cart, cantidadTotal} = useCart();
    
    return (
        <nav className="navBar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <Link to={'/'} className="nav-link"><img src={Logo} className="logo"/></Link>
                        <div className="navbar-nav categories">
                            {/*<a className="nav-link active" aria-current="page" href="/#">PIPPERS</a>
                            <a className="nav-link active" aria-current="page" href="/#">Pippers Comida Vegana</a>
                            <a className="nav-link active" aria-current="page" href="/#">CowyPippers</a>
                            <a className="nav-link active" aria-current="page" href="/#">Contacto</a>*/}
                            <Link to={'/category/comida-vegana'} className="nav-link">Pippers Comida Vegana</Link>
                            <Link to={'/category/comida-no-vegana'} className="nav-link">CowyPippers</Link>
                            <Link to={'/contact'} className="nav-link">Contacto</Link>
                        </div>
                    </div>
                </div>
                <CartWidget />
            </nav>  
        </nav>
    )
}

export default NavBar