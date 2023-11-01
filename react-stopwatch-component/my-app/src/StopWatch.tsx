import { FaPlay, FaPause } from 'react-icons/fa6';
import { useState } from 'react';

export function StopWatch() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  const running = intervalId ? true : false;

  function handleClick() {
    if (running) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    } else {
      setIntervalId(
        setInterval(() => {
          setTime((prev) => prev + 1);
        }, 1000)
      );
    }
  }
  function handleReset() {
    if (!running) {
      setTime(0);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className="mt-5 w-60 h-60 rounded-full border-black border-4 flex justify-center items-center"
        onClick={handleReset}>
        <div className="text-6xl">{time}</div>
      </div>
      <Button running={running} onClick={handleClick} />
    </div>
  );
}

type ButtonProps = {
  running: boolean;
  onClick: () => void;
};

function Button({ running, onClick }: ButtonProps) {
  return (
    <div onClick={onClick} className="text-5xl m-5">
      {running ? <FaPause /> : <FaPlay />}
    </div>
  );
}
