import { useState, useEffect } from 'react';
import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import productos from '../../products';
import "./ItemDetailContainer.css";
import {getDoc, doc} from 'firebase/firestore';
import {db} from '../../services/firebase/firebase';
import {querySnapshot} from 'firebase/firestore';
/*
const getProduct = (id) => {
    return new Promise ( (resolve, reject) => {
        const producto = productos.find( prod => prod.id === id)
        setTimeout(() => {
            resolve(producto)
        }, 1000)        
    })
}*/

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);    
    const {id} = useParams();
    const [loading, setLoading] = useState();

    useEffect( () => {
        setLoading(true);
        getDoc(doc(db,'items',id)).then((querySnapshot)=> {
            const product = {id: querySnapshot.id, ...querySnapshot.data()};
            setProducts(product);
        }).catch((error) => {
            console.log('Error searching items', error);
        }).finally( () => {
            setLoading(false);
        })
    }, [id])

    return(
        <div className="itemDetailContainer">
            <ItemDetail productos={products} />
            
        </div>
    )
}

export default ItemDetailContainer
