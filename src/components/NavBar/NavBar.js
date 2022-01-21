import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom';
import Logo from './Logo.png';
import { useEffect, useState } from 'react';
import {db} from '../../services/firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        getDocs(collection(db,'categories')).then((querySnapshot) => {
            const categories = querySnapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setCategories(categories);
        })
    }, [])


    return (
        <nav className="navBar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <Link to={'/'} className="nav-link"><img src={Logo} className="logo"/></Link>
                        <div className="navbar-nav categories">
                            {categories.map(cat=> <Link key={cat.id} className='Option nav-link' to={`/category/${cat.id}`}>{cat.description}</Link>)}
                        </div>
                    </div>
                </div>
                <CartWidget />
            </nav>  
        </nav>
    )
}

export default NavBar