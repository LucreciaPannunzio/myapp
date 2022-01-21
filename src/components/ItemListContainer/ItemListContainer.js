import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css' 
import { useParams } from 'react-router-dom';
import {db} from '../../services/firebase/firebase';
import {collection, getDocs, querySnapshot, query, where} from 'firebase/firestore';

const ItemListContainer = () => {
    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState();
    const {categoryId} = useParams();
        
    useEffect( () => {
        if(!categoryId) {
            setLoading(true);
            getDocs(collection(db, 'items')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data()};
                });
                setListProduct(products);
            }).catch((error) => {
                console.log('Error searching items', error);
            }).finally(() => {
                setLoading(false);
            });
        } else {
            setLoading(true);
            getDocs(query(collection(db,'items'), where('category', '==', categoryId))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setListProduct(products);
            }).catch((error) => {
                console.log('Error searching items', error);
            }).finally(() => {
                setLoading(false);
            });
        };
        
        return ( () => {
            setListProduct([])
        })
    }, [categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return(
        <div className="itemListContainer">
            <ItemList productos={listProduct} />
        </div>
    )
}

export default ItemListContainer;