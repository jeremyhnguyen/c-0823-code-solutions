import { useState } from 'react';
import './App.css';
import Button from './Buttons.tsx';

function App() {
  const [count, setCount] = useState(0);
  function handleUp() {
    setCount(count + 1);
  }
  function handleDown() {
    setCount(count - 1);
  }

  return (
    <div className="layout">
      <Button text="up" onButtonClick={handleUp} />
      <div>{count}</div>
      <Button text="down" onButtonClick={handleDown} />
    </div>
  );
}

export default App;
