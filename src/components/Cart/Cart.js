import React from 'react';
import { useContext } from 'react';
import Context from '../../context/CartContext';
import { useState, useEffect } from 'react';
import { UseCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
    const {cart} = UseCart();
    
    const carritoVacio = [];
    if (cart === carritoVacio) {
        return (
            <h3>Carrito vacío</h3>
        )
    }

       
    return (
        <div>
            <h1 className="cartTitle">Mi carrito</h1>
            <h3 className='montoTotal'>Monto total: ${}</h3>
            <div className='divCart'>    
            {/*{cart === carritoVacio ? <h3>Carrito vacío</h3> : }*/}
                {cart.map( product => {
                    return (
                        <div className="row d-flex justify-content-center divCart">
                            <div className="card m-5 divCartContainer">
                                <div>
                                    <button className='buttonEliminar'>X</button>
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
        
    /*    <table className='table table-striped'>
            <thead>
                <tr>
                    <th scope='col'>Foto</th>
                    <th scope='col'>Descripción</th>
                    <th scope='col'>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {cart.map( producto => {
                        return <tr>
                            <td> {producto.item.img}</td>
                            <td> {producto.item.description} </td>
                            <td> {producto.amount} </td>
                        </tr>
                })}
            </tbody>
        </table>*/
    )
}

export default Cart
