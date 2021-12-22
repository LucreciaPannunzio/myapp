import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './item.css'
import {Link} from 'react-router-dom';
import productos from '../../products';
import {db} from '../../services/firebase/firebase';

const Item = ({product}) => {
    console.log(product)
   return(            
        <div className="row d-flex justify-content-center divCard">
            <div className="card m-5 divContainer">
                <div className="card-body divCardBody">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">$ {product.price}</p>
                    <Link className="buttonDetalle" to={`/detail/${product.id}`}>Ver detalle</Link>
                </div>
            </div>
        </div>
   )
    
}



export default Item
