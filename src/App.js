import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count <= 0){
      document.getElementById("countArea").style.color = 'blue';
    }
    else
      document.getElementById("countArea").style.color = 'red';
  });

  return (
    <div className="App">
      <h1 className="title">Hooks Counter</h1>
      <h3 id="countArea" className="counter">{count}</h3>
      <button className="control-buttons" onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button className="control-buttons" onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
