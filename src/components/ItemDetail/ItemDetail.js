import React from 'react'
import "./ItemDetail.css";
import productos from '../../products';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({productos}) => {

    const addToCart = () => {
        console.log('Producto agregado al carrito')
    }
    
    return(
        <div className="cardDetail">
           <img src={productos.img} className="imgCard"/>
           <p>Info: {productos.description}</p>
           <p>Precio: $ {productos.price}</p>
           <ItemCount stock={productos.stock} initial={0} onAdd={addToCart}/>
        </div>

        
    )
    
}


export default ItemDetail
