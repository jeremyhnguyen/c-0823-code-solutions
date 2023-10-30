import { useState } from 'react';
export function ValidatedInput() {
  const [password, setPassword] = useState('');
  function validatePassword(): string | undefined {
    if (password.length === 0) return 'Password is required';
    if (password.length < 8) return 'Password must be 8 characters';
    if (!password.match(/[A-Z]/)) return 'Requires uppercase letter';
    if (!password.match(/[0-9]/)) return 'Requires a number';
    if (!password.match(/[!@#$%^&*()_=]/)) return 'Requires special symbol';
    return undefined;
  }
  const error = validatePassword();
  return (
    <div className="input-group m-5">
      <label>
        Password:
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`form-control ${error ? 'is-invalid' : 'is-valid'}`}
        />
        {error && <div className="invalid-tooltip">{error}</div>}
      </label>
    </div>
  );
}
