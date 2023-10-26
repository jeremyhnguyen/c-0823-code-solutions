type Button = {
  text: string;
  onButtonClick: () => void;
};

function Button({ text, onButtonClick }: Button) {
  return (
    <button
      onClick={() => {
        onButtonClick();
      }}>
      {text}
    </button>
  );
}

export default Button;

// component with two buttons: up & down
// counter that increments onClick up
//  decrements onClick down
