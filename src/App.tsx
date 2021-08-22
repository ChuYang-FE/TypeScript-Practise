import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Hello name="William" level={3} />
        </div>
      </header>
    </div>
  );
}

export default App;
