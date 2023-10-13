import './CustomButton.css';

function CustomButton({ text, color, onCustomClick }) {
  return (
    <button
      className={color}
      onClick={() => {
        onCustomClick(color, text);
      }}>
      {text}
    </button>
  );
}

export default CustomButton;
