import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer';
import { Component } from 'react';

function App() {
 
  return (
    <div className="App">
       <NavBar />
       <ItemListContainer greeting={"Bienvenido/a a nuestra tienda online!"} />
    </div>
  );
}

export default App;
