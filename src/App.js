import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Component } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';
import React from 'react';
import CategoryContainer from './components/CategoryContainer/CategoryContainer';


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/'>
                <ItemListContainer />
            </Route>
            <Route exact path='/category/:categoryId'>
                <CategoryContainer />
            </Route>
            <Route exact path='/detail/:id'>
                <ItemDetailContainer />
            </Route>
            <Route exact path='/count'>
                <ItemCount />
            </Route>
            <Route exact path={'/cart'}>

            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
