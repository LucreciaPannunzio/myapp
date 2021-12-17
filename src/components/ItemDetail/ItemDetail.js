import React from 'react'
import "./ItemDetail.css";
import productos from '../../products';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item';


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
