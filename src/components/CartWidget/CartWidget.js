import logo from './cart.png';
import "./CartWidget.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const CartWidget = (props) => {

    /*const {cart, cantidadTotal} = UseCart();*/

    return(
        <Link to={'/cart'} className='cartWidget'>
            <img src={logo} style={{width:70, marginRight: 20, padding:10}} />
            {/*{cantidadTotal};*/}
        </Link>
        
    )
}

export default CartWidget;