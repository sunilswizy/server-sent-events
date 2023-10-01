import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [idx, setIndex] = useState(0);

  useEffect(() => {
    const event = new EventSource('http://localhost:5000/stream');

    event.onmessage = e => {
      setIndex(e.data);
    }

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value is streamed from the backend
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Server Send Events - {idx}
        </a>
      </header>
    </div>
  );
}

export default App;
