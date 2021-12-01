import { useState, useEffect } from 'react';
import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const productos = [
    {
        img: "../../assets/empanadas.jpg",
        id: '1',
        name: 'Empanadas de soja texturizada',
        price: '600',
        stock: 50
    },
    {
        img: "../../assets/burger.jpg",
        id: '2',
        name: 'Hamburguesas veganas',
        price: '480',
        stock: 30 
    },
    {
        img: "../../assets/pasta-vegana.jpg",
        id: '3',
        name: 'Pastas',
        price: '400',
        stock: 20
    },
    {
        img: "../../assets/milanesas.jpg",
        id: '4',
        name: 'Milanesas de berenjenas',
        price: '280',
        stock: 30
    },
    {
        img: "../../assets/pizzas.jpg",
        id: '5',
        name: 'Pizzas a la piedra',
        price: '350',
        stock: 20
    },
    {
        img: "../../assets/guiso.jpg",
        id: '6',
        name: 'Guisos veganos',
        price: '500',
        stock: 10
    }
]

const getProduct = () => {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve(productos[0], 2000)
        })
    })
}

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);    
    useEffect( () => {
        const list = getProduct()
        list.then (list => {
            setProducts(list)
        })
        return ( () => {
            setProducts([])
        })
    })
    return(
        <div className="itemDetailContainer">
            <ItemDetail productos={products} />
            
        </div>
    )
}

export default ItemDetailContainer
