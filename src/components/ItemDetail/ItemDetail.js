import React from 'react'
import "./ItemDetail.css";

const ItemDetail = ({products}) => {
    return(
        <div>
           <img src= "../../assets/empanadas.jpg" className="imgCard"/>
           <p>Info: Masa casera vegana, con relleno de soja texturizada.</p>
           <p>Precio: $600 la docena</p>
           <button className="buttonCarrito">Agregar al carrito</button>
        </div>
    )
}



export default ItemDetail
