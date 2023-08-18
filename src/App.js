import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The very important thing you should have is the patience
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thenghia_rr
        </a>
      </header>
    </div>
  );
}

export default App;
