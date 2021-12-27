import React, {useState, useContext} from "react";

const Context = React.createContext();

export const UseCart = () => {
    return useContext(Context);
}

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    const setNotification = (severity, message) => {
        setMessage(message);
        setSeverity(severity);
        setTimeout( () => {
            setMessage('');
        }, 2000);
    }

    const addItem = (item) => {
        if(!isInCart(item.id)) {
            setCart([...cart,item]);
        } else {
            cart.forEach((product, index) => {
                cart[index].amount = product.amount + item.amount;
                setCart([...cart]);
            }) 
        }
    }

    const isInCart = (id) => {
        const itemInCart = cart.find((product) => product.id === id);
        return itemInCart === undefined ? false : true;
    }

    const removeItem = (id) => {
        const removeProduct = cart.filter((product) => product.id !== id);
        setCart(removeProduct);
    }

    const clear = () => {
        setCart([]);
    }   

    const getTotalCart = () => {
        let total = 0;
        cart.forEach(({amount, price}) => {
            total = total + (amount*price);
        })
        return total;
    }

    return (
        <Context.Provider 
            value={{
                notification: {
                    message,
                    severity
                },
                setNotification,
                cart,
                addItem,
                removeItem,
                isInCart,
                clear,
                getTotalCart,
                
            }}>
            {children}
        </Context.Provider>

    );
}

export default Context;