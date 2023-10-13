import './App.css';
import CustomButton from './CustomButton.jsx';

function App() {
  //  onClick={ () => {window.alert({text})}}
  function handleClick(color, text) {
    window.alert(`Clicked: ${color} ${text}`);
  }
  return (
    <>
      <CustomButton color="red" text="Different" onCustomClick={handleClick} />
      <CustomButton color="green" text="Colored" onCustomClick={handleClick} />
      <CustomButton color="blue" text="Buttons" onCustomClick={handleClick} />
    </>
  );
}

export default App;
