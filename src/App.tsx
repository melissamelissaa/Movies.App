import React from 'react';
import './App.css';

import { Navbar } from './Components/Navbar';
import { Main } from './Components/Main';
import { Bookmarks } from './Components/Bookmarks';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
