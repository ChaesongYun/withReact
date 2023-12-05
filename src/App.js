import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  // let name = 'hapbbie';
  let [name, setName] = useState('hapbbie');
  return (
    <div className="App">
      <header className="App-header">
      <div>{name}</div>
      </header>
    </div>
  );
}

export default App;
