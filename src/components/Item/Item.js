import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Item = ({product}) => {
   return(
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <div className="card divContainer">
                    <div className="card-body divCardBody">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">$ {product.price}</p>
                        <button className="buttonCarrito">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
   )

    
}


export default Item
