import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBox from "./search-box"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Books Galore
        </h1>
      </header>
      <SearchBox />

    </div>
  );
}

export default App;
