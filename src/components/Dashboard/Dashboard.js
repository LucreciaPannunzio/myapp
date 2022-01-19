import {getFirestore, collection, getDocs, orderBy, query} from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import Message from '../Message/Message';
import { Link } from 'react-router-dom';
import { UseCart } from '../../context/CartContext';

export const Dashboard = () => {
    const [order, setOrder] = useState([]);
    const {userEmail} = useContext(Context);
    const {email} = userEmail;
    
    useEffect( () => {
        const db = getFirestore();
        const ref = query(collection(db, 'orders'), orderBy('date'));
        getDocs(ref).then((snapshot) => {
            const orden = snapshot.docs.map( (doc) => {
                const data = doc.data();
                const {date} = data;
                const fecha = new Date(date.seconds * 1000);
                const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES', {
                    dateStyle: 'full',
                    timeStyle: 'short',
                }).format(fecha);
                return {
                    id: doc.id,
                    ...data,
                    date: normalizedCreatedAt,
                };
            });
            setOrder(orden.filter((ticket) => ticket.buyer.mail === email));
        });
    }, [email]);
      
    return (
        <div>
            <>
                {order.length === 0 ? (
                    <h1>Aún no tienes órdenes de compra!</h1>
                ) : (
                    <>
                        <h1 style={{textAlign: 'center'}}>
                            Orden de compra:
                        </h1>
                        {order.map((ord) => (
                            <Message key={ord.id} ord={ord}/>
                        ))}
                    </>
                )}
            </>
            <Link to='/'>Volver al inicio</Link>
        </div>
    )
}
