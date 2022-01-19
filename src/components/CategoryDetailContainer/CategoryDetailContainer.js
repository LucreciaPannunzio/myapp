import { useState, useEffect } from 'react';
import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import {getDoc, doc} from 'firebase/firestore';
import {db} from '../../services/firebase/firebase';

const CategoryDetailContainer = () => {
    const [products, setProducts] = useState([]);    
    const {categoryId} = useParams();
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
    }, [categoryId])

    console.log(products)
    return (
        <div className="CategoryDetailContainer">
            <ItemDetail productos={products} />
        </div>
    )
}

export default CategoryDetailContainer
