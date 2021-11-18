import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
        </a>
      </header>*/}
       <NavBar />
       <ItemListContainer greeting={"Bienvenido/a a nuestra tienda online!"} />
    </div>
  );
}

export default App;
