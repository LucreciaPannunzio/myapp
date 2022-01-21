
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React, {useContext} from 'react';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Switch>
              <Route exact path='/'>
                  <ItemListContainer />
              </Route>
              <Route exact path='/category/:categoryId'>
                  <ItemListContainer />
              </Route>
              <Route exact path='/detail/:id'>
                  <ItemDetailContainer />
              </Route>
              <Route exact path={'/cart'}>
                  <Cart />
              </Route>
            </Switch>
          </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
