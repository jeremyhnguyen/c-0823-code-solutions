# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  framework has minimal functionality on its own
- What is Express middleware useful for?
  middleware functions have access to request object(req), response object(res), and the next middleware function in the application's request-response cycle (commonly denoted by next())

1. execute any code
2. make changes to the request and response objects
3. end the request-response cycle
4. call the next middleware function in the stack

- How do you mount a middleware with an Express application?
  use and provide it the path and callback function
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  request and response objects, next if it needs to perform more tasks

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
