import logo from './cart.png';
import "./CartWidget.css";
import { Link } from 'react-router-dom';
import { UseCart } from "../../context/CartContext";

const CartWidget = (props) => {
    const {getCart} = UseCart();

    return(
        <Link to={'/cart'} className='cartWidget'>
            <img src={logo} style={{width:70, marginRight: 20, padding:10}} />
            {getCart()}
        </Link>
    )
}

export default CartWidget;