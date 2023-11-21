import { useState } from 'react';
import './App.css';
import Button from './Button.tsx';

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
