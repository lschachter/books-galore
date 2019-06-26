import React from 'react';
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
      <h2>Welcome!</h2>
      <p className="instruction">Enter a topic into the search bar below to see <a href="https://developers.google.com/books/docs/overview">Google Books'</a> top ten related volumes.</p>
      <SearchBox />

    </div>
  );
}

export default App;
