import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css' 
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { getProducts, getProductByCategory } from '../../products'



 const ItemListContainer = () => {
    const [listProduct, setListProduct] = useState([]);
    
    useEffect( () => {
        const list = getProducts()
        list.then (list => {
            setListProduct(list)
        })

        return ( () => {
            setListProduct([])
        })
    }, [])

    return(
        <div className="itemListContainer">
            <ItemList productos={listProduct} />
        </div>
    )
}

export default ItemListContainer;