import React from 'react';
import { useState, useEffect } from 'react';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList/ItemList";


const productos = [
    {
        id: '1',
        name: 'Empanadas de soja texturizada',
        price: '600',
        stock: 50
    },
    {
        id: '2',
        name: 'Hamburguesas veganas',
        price: '480',
        stock: 30 
    },
    {
        id: '3',
        name: 'Pastas',
        price: '400',
        stock: 20
    },
    {
        id: '4',
        name: 'Milanesas de berenjenas',
        price: '280',
        stock: 30
    },
    {
        id: '5',
        name: 'Pizzas a la piedra',
        price: '350',
        stock: 20
    },
    {
        id: '6',
        name: 'Guisos veganos',
        price: '500',
        stock: 10
    }
]

const getItems = () => {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => resolve(productos), 2000)
    })
}
    
const ItemListContainer = () => {
    
    const [listProduct, setListProduct] = useState([]);
    
    useEffect( () => {
        const list = getItems()
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
            {/*<ItemCount stock="15" initial="1" />*/}
        </div>
    )
}

export default ItemListContainer;