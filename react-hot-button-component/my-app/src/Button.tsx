import './App.css';

type Props = {
  text: string;
  count: number;
  onClick: () => void;
};

function Button({ text, count, onClick }: Props) {
  let color;
  if (count < 3) {
    color = '';
  } else if (count < 6) {
    color = 'cold';
  } else if (count < 9) {
    color = 'cool';
  } else if (count < 12) {
    color = 'tepid';
  } else if (count < 15) {
    color = 'warm';
  } else if (count < 18) {
    color = 'hot';
  } else {
    color = 'nuclear';
  }
  return (
    <button className={color} onClick={() => onClick()}>
      {text}
    </button>
  );
}

export default Button;
