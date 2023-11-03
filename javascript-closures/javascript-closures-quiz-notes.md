# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  from where it's declared in the code
- What allows JavaScript functions to "remember" variables from their surroundings?
  closure
- What values does a closure contain?
  no static value, but stores references to variables within the scope chain (accesses things outside like a backpack)
- When is a closure created?
  when a function is defined in another function
- How can you tell if a function will be created with a closure?
  if its enclosed within another function's code
- In React, what is one important case where you need to know if a closure was created?
  when writing dependency array for useEffect (to avoid infinite rerender etc)

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
