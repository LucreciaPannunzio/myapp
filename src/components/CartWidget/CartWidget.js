import logo from './cart.png';
import "./CartWidget.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UseCart } from "../../context/CartContext";

const CartWidget = (props) => {
    const {cart} = UseCart();

    return(
        <Link to={'/cart'} className='cartWidget'>
            <img src={logo} style={{width:70, marginRight: 20, padding:10}} />
            {cart?.length}
        </Link>
    )
}

export default CartWidget;