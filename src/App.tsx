import React from 'react';
import './App.css';
import Greeting from './greeting';
import Counter from './compteur';

function App() {
  return (
    <div className="App">
      <Greeting name='omar'></Greeting>
      <Counter></Counter>
    </div>
  );
}

export default App;
