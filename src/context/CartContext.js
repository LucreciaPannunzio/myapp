import React, {useState, useContext} from "react";

const Context = React.createContext();

export const UseCart = () => {
    return useContext(Context);
}

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);

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
        let subtotal = 0;
        cart.forEach(product => {
            subtotal += product.amount;
        })
        setCantidadTotal(subtotal);
    }

    return (
        <Context.Provider 
            value={{
                cart,
                addItem,
                removeItem,
                isInCart,
                clear,
                getTotalCart
            }}>
            {children}
        </Context.Provider>

    );
}

export default Context;