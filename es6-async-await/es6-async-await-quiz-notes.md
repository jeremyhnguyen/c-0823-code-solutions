# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  async: declare that a function is asynchronous

  await: indicates JS should wait/pause until the async function completes

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  different way of formatting asynchronous function. async and await throw an exception, promise.then only continues if resolved, otherwise it will .catch
- When do you use `async`?
  use async before the function declaration, which allows usage of await
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  use await within an async function (promises) do not use await if a synchronous function (not a promise)

  nothing will happen if awaiting a synchronous function

- How do you handle errors with `await`?
  try/catch/finally

  catch will execute if exceptions are thrown

- What do `try`, `catch` and `throw` do? When do you use them?
  try...catch: try executes block of statements in sequence until an exception is thrown, the function will then execute the catch statement if exception is thrown. catch will be skipped if no exceptions are thrown

finally: block executes after try...catch but before the following statements

throw: throws an exception and specifies the value to be thrown

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  if you forget to use await the promise will execute synchronously with the other code
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async and await. syntax offers most clarity in regards to what the code is doing

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
