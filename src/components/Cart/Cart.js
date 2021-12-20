import React from 'react';
import { useContext } from 'react';
import Context from '../../context/CartContext';
import { useState, useEffect } from 'react';
import { UseCart } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart, removeItem, getTotalCart} = UseCart();
    
    if (cart?.length === 0) {
        return (
            <>
                <h4 className='carritoVacio'>Carrito vacío!</h4>
                <Link to={'/'} className='cartButton'>Ir a la tienda</Link>
            </>
        );
    }

    const handleDeleteItem = (id) => {
        removeItem(id);
    }
       
    return (
        <div>
            <h1 className="cartTitle">Mi carrito</h1>
            <h3 className='montoTotal'>Monto total: $ {getTotalCart()}</h3>
            <div className='divCart'>
                {cart.map( product => {
                    return (
                        <div className="row d-flex justify-content-center divCart">
                            <div className="card m-5 divCartContainer">
                                <div>
                                    <button
                                      onClick={() => handleDeleteItem(product.id)} 
                                      className='buttonEliminar'>
                                        X
                                    </button>
                                </div>
                                <div className="card-body divCartBody">
                                    <img src={product.img} className="imgCart"/>
                                    <h5 className="card-title cartTitle">{product.name}</h5>
                                    <p className="card-text">$ {product.price}</p>
                                    <p>Cantidad: {product.amount}</p> 
                                </div>
                                <div className='total'>
                                    <span>Total: $ {product.price * product.amount}</span>
                                </div>    
                            </div>
                        </div>
                    )    
                })}
            </div>
        </div>
    )
}

export default Cart
