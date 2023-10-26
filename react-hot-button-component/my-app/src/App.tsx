import { useState } from 'react';
import './App.css';
import Button from './Button.tsx';

// CLASSES: cold/cool/tepid/warm/hot/nuclear

// 1.component & layout
// 2.state
// 3.event

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <Button text="Hot Button" count={count} onClick={handleClick} />
      <p>Click count: {count}</p>
    </>
  );
}

export default App;
