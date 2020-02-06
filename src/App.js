import React from 'react';
// import logo from './logo.svg';
import './css/App.css';

import Thomas from './img/thomas.jpeg';

function App() {
  return (
    <div>
      <h1>My Dog</h1>
      <img src={Thomas} alt="Thomas" />
    </div>
  );
}

export default App;
