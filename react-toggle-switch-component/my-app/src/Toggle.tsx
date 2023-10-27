import './toggle.css';
import { useState } from 'react';

export function ToggleSwitch() {
  const [isToggled, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggled);
  }

  return (
    <div
      className={isToggled ? 'toggle-switch is-on' : 'toggle-switch'}
      onClick={() => handleToggle()}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span className="state-label">{isToggled ? 'ON' : 'OFF'}</span>
    </div>
  );
}
