import logo from './cart.png';
import "./CartWidget.css";

const CartWidget = (props) => {
    return(
        <button className="cartWidget">
            <img src={logo} style={{width:70, marginRight: 20, padding:10}} />
            0
        </button>
    )
}

export default CartWidget;