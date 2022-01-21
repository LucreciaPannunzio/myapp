import React, { useState } from 'react';
import { UseCart, useContext } from '../../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import {addDoc, collection, Timestamp, writeBatch, getDoc, doc, DocumentSnapshot, orderBy} from 'firebase/firestore';
import {db} from '../../services/firebase/firebase';

const Cart = () => {
    const {cart, removeItem, getTotalCart, clear} = UseCart();
    const [processingOrder, setProcessingOrder] = useState(false);
    const [contact, setContact] = useState({
        name: '',
        mail: '',
        phone: ''
    });
    const {setNotification} = UseCart();
    
    const llenarForm = (e) => {
        const {name, phone, mail, value} = e.target;
        setContact({...contact, [name]:value, [phone]: value, [mail]: value});
    }

    const confirmOrder = () => {
        setProcessingOrder(true);

        const objOrder = {
            buyer: {
                name: contact.name,
                phone: contact.phone,
                mail: contact.mail
            },
            items: cart,
            date: Timestamp.fromDate(new Date()),
            total: getTotalCart()
        }

        const batch = writeBatch(db);
        const outOfStock = [];

        objOrder.items.forEach( (prod) => {
            getDoc(doc(db, 'items', prod.id)).then((documentSnapshot) => {
                if(documentSnapshot.data().stock >= prod.amount) {
                    batch.update(doc(db, 'items', documentSnapshot.id), {stock: documentSnapshot.data().stock - prod.amount});
                } else {
                    outOfStock.push({id: documentSnapshot.id, ...documentSnapshot.data()});
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db,'orders'), objOrder).then( ({id}) => {
                batch.commit().then( () => {
                    setNotification('success', 'El ID de su orden es: ', id)
                });    
            }).catch( (error) => {
                setNotification('error', `Error ejecutando la orden: ${error}`);
            }).finally( () => { 
                setTimeout( () => {
                    clear();
                    setProcessingOrder(false);
                    <h1>Orden generada!</h1>
                }, 5000);
            });
        }
    }
    
    if (cart?.length === 0) {
        return (
            <>
                <h4 className='carritoVacio'>Carrito vacío!</h4>
                <Link to={'/'} className='cartButton'>Ir a la tienda</Link>
            </>
        );
    }

    const handleDeleteItem = (id) => {
        removeItem(id);
    }
       
    return (
        <div>
            <h1 className="cartTitle">Mi carrito</h1>
            <h3 className='montoTotal'>Monto total: $ {getTotalCart()}</h3>
            <div className='divCart'>
                {cart.map( product => {
                    return (
                        <div className="row d-flex justify-content-center divCart">
                            <div className="card m-5 divCartContainer">
                                <div>
                                    <button
                                      onClick={() => handleDeleteItem(product.id)} 
                                      className='buttonEliminar'>
                                        X
                                    </button>
                                </div>
                                <div className="card-body divCartBody">
                                    <img src={product.img} className="imgCart"/>
                                    <h5 className="card-title cartTitle">{product.name}</h5>
                                    <p className="card-text">$ {product.price}</p>
                                    <p>Cantidad: {product.amount}</p> 
                                </div>
                                <div className='total'>
                                    <span>Total: $ {product.price * product.amount}</span>
                                </div>    
                            </div>
                        </div>
                    )    
                })}
            </div>
            <div>
                {!processingOrder ? (
                    <form method="POST" className='contactForm' onSubmit={confirmOrder}>
                        <div>
                            <div className='formDiv'>
                                <label for="name">Ingrese su nombre:</label>
                                <input onChange={llenarForm} type="text" name="name" placeholder="nombre" className='inputText'/>
                            </div>
                            <div className='formDiv'>
                                <label for="email">Ingrese su email:</label>
                                <input onChange={llenarForm} type="email" name="mail" placeholder="email" className='inputText'/>
                            </div>
                            <div className='formDiv'>
                                <label for="phone">Ingrese su número de teléfono:</label>
                                <input onChange={llenarForm} type="text" name="phone" placeholder="teléfono" className='inputText'/>
                            </div>
                                <button className='buttonForm'>
                                    Finalizar compra
                                </button>
                            </div>
                    </form>
                ) : (
                    <>
                        <h1>Orden generada...</h1>
                        
                    </>
                )}
            </div>
        </div>
    )
}

export default Cart
