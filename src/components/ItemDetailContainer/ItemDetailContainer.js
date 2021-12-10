import { useState, useEffect } from 'react';
import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import productos from '../../products';


const getProduct = (id) => {
    return new Promise ( (resolve, reject) => {
        const producto = productos.find( prod => prod.id === id)
        setTimeout(() => {
            resolve(producto)
        }, 1000)        
    })
}

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);    
    const {id} = useParams();

    useEffect( () => {
        const list = getProduct(id)
        list.then (list => {
            setProducts(list)
        })

        console.log(productos)
    }, [id])

    return(
        <div className="itemDetailContainer">
            <ItemDetail productos={products} />
            
        </div>
    )
}

export default ItemDetailContainer
