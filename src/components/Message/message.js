import React from 'react';
import productos from '../../products';

const Message = ({ord}) => {
    return (
        <div>
            <h2>ID de la compra: {ord.id}</h2>
            <h2>Email: {ord.buyer.mail}</h2>
            <h2>Fecha: {ord.date}</h2>
            <h2>
                Nombre de los productos:{' '}
                {ord.items.map((prod,index) => ( 
                    <ul key={index}>
                        <li>
                            {prod.name} ${prod.price} x {prod.amount}
                        </li>
                        <img src={prod.img} alt={prod.name} />
                    </ul>
                ))}
            </h2>
            <h2>Total: ${ord.total}</h2>
        </div>
    )
}

export default Message
