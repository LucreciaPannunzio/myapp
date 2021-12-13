import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';
import { useState } from 'react';
import productos from '../../products';
import Item from '../Item/Item'

const getProductByCategory = (categoryId) => {
    
    return new Promise( (resolve, reject) => {

        const categorias = productos.filter ( producto => producto.category === categoryId)
        console.log(categorias)

        setTimeout( () => {
            resolve(categorias)
        }, 1000);
    })
    
}


const CategoryContainer = () => {
    const [categories, setCategories] = useState([]);
    const {categoryId} = useParams();

    useEffect( () => {
        const cat = getProductByCategory(categoryId);
        cat.then( cat => {
            setCategories(cat)
        })
    }, [categoryId])
    
    return (
        <div className="ItemList">
            {categories.map(product => {
                return <Item key={product.id} product={product} /> 
            })}
        </div> 
    )
}

export default CategoryContainer