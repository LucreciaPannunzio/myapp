import React from 'react'
import "./ItemDetail.css";
import productos from '../../products';
import { Link } from 'react-router-dom';

const ItemDetail = ({productos}) => {
    return(
        <div className="cardDetail">
           <img src={productos.img} className="imgCard"/>
           <p>Info: {productos.description}</p>
           <p>Precio: $ {productos.price}</p>
           <Link to={`/detail/${productos.id}`}>
                <button className="buttonCarrito">Agregar al carrito</button>
           </Link>
        </div>

        
    )
}



export default ItemDetail
