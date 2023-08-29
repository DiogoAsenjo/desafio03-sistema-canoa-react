import logo from './logo.svg';
import './App.css';
import Banner from './componentes/banner/banner';

function App() {
  return (
    <div className="App">
      <Banner/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Estou editando meu arquivo
        </a>
      </header>
    </div>
  );
}

export default App;
