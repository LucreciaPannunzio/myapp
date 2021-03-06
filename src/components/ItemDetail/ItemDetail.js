import React from 'react'
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({productos}) => { 
    
    return(
        <div className="cardDetail">
           <img src={productos.img} className="imgCard"/>
           <p>Info: {productos.description}</p>
           <p>Precio: $ {productos.price}</p>
           <ItemCount product={productos} initial={0} />
        </div>
    )
   
}


export default ItemDetail
