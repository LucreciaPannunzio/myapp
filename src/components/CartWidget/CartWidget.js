import logo from './cart.png';

const CartWidget = (props) => {
    return(
        <img src={logo} style={{width:90, marginRight: 20, padding:10}} />
    )
}

export default CartWidget;