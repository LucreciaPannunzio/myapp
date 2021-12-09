import React from 'react'
import Item from '../Item/Item'
import './itemList.css'


const ItemList = ({productos}) => {
    return (
        <div className="ItemList">
            {productos.map(product => {
                return <Item key={product.id} product={product} /> 
            })}
        </div>
    )
}

export default ItemList
