import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Component } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
 
  return (
    <div className="App">
       <NavBar />
       <ItemListContainer />
       <ItemDetailContainer />
    </div>
  );
}

export default App;
