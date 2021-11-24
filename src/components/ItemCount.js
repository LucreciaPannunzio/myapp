import React from 'react'
import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(1);

    const sumarCantidad = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }         
    }

    const restarCantidad = () => {
        if(contador > initial) {
            setContador(contador - 1);
        } else {
            setContador (contador)
        }
    }  

    return (
        <div className="itemCount" style={{marginTop:30}}>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-dark" onClick={restarCantidad}>-</button>
                <h3 style={{padding:15}}>{contador}</h3>
                <button type="button" className="btn btn-dark" onClick={sumarCantidad}>+</button>    
            </div>
            <div>
            <button type="button" className="btn btn-outline-dark" style={{margin:30}}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
