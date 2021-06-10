import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [message, setMessage] = useState('');
  useEffect(() =>{
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[])
  return (
    <div className="App">
        <h1>ふろんとえんど</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
    </div>
  );
}

export default App;
