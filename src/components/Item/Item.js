import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './item.css'

const Item = ({product}) => {
   return(
        <div className="row d-flex justify-content-center divCard">
            <div className="col-sm-6">
                <div className="card m-5 divContainer">
                    <div className="card-body divCardBody">
                        
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">$ {product.price}</p>
                        <button className="buttonDetalle">Ver detalle</button>
                    </div>
                </div>
            </div>
        </div>
   )

    
}


export default Item
