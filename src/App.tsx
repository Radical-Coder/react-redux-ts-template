import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="balance">1000</div>
      <div className="options">
        <button className="rad-button deposit-button">Deposit</button>
        <button className="rad-button bankrupt-button">Bankrupt</button>
        <button className="rad-button withdraw-button">Withdraw</button>
      </div>
    </div>
  );
}

export default App;
