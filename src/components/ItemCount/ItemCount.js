import React from 'react';
import {useState} from 'react';
import "./ItemCount.css";
import { Link } from 'react-router-dom';
import productos from '../../products';


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(0);

    const sumarCantidad = () => {
        if (count < stock) {
            setCount(count + 1);
        }         
    }

    const restarCantidad = () => {
        if(count > initial) {
            setCount(count - 1);
        } else {
            setCount(count)
        }
    }    

    return (
        <div className="itemCount" style={{marginTop:30}}>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-dark" onClick={restarCantidad}>-</button>
                <h3 style={{padding:15}}>{count}</h3>
                <button type="button" className="btn btn-dark" onClick={sumarCantidad}>+</button>    
            </div>
            <div>
                {count > 0 ? 
                    <button type="button" className="btn buttonCarrito" onClick={onAdd}>Agregar al carrito</button> : <p className='elegirCantidad'>Seleccione la cantidad</p>
                }
            </div>
            <div>
                {count > 0 ?
                    <Link to={'/cart'} className='linkCart'>Finalizar compra</Link> : <div></div>
                }
            </div>
        </div>
    )
}

export default ItemCount
