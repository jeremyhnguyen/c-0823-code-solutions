import { useState } from 'react';
import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

export function ValidatedInput() {
  const [password, setPassword] = useState<string>('');
  return (
    <div className="flex flex-col">
        <label>
          {' '}
          Password
          <input
            id="pass"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        {password.length >= 8 && <FaCheck />}
        {password.length === 0 && <p>A password is required.</p>}
        {(password.length > 0 && password.length <8) && <FaXmark />}
        {(password.length > 0 && password.length < 8) && <p>Password must be 8 characters.</p>}
    </div>
  );
}
