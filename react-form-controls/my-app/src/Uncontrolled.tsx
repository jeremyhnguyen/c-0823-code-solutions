import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const { username, password } = Object.fromEntries(formData.entries());
    console.log(username, password);
  }
  return (
    <form className="my-form" onSubmit={(event) => handleSubmit(event)}>
      <label>
        {' '}
        Username
        <input type="text" name="username" defaultValue="hello" />
      </label>
      <label>
        {' '}
        Password
        <input type="password" name="password" defaultValue="world" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
