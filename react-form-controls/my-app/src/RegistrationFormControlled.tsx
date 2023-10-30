import { useState } from 'react';
import {ValidatedInput} from './ValidatedInput.tsx';
export function RegistrationFormControlled() {
  const [username, setUsername] = useState('goodbye');
  const [password, setPassword] = useState('world');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(username, password);
      }}>
      <label>
        {' '}
        Username
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        {' '}
        Password
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
