import React from 'react';
import './css/App.css';

import SearchBox from "./components/SearchBox"
import ErrorHandler from "./components/ErrorHandler"

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Books Galore</h1>
      </header>
      <h2>Welcome!</h2>
      <p className="instruction">
        Enter a topic into the search bar below to see "
        <a href="https://developers.google.com/books/docs/overview"
          target = "_blank"
          rel="noopener noreferrer">
          Google Books
        </a>
        "' top ten related volumes.
      </p>
      <ErrorHandler>
        <SearchBox />
      </ErrorHandler>
    </div>
  );
}

export default App;
