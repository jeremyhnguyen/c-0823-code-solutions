# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  debugging purposes, check outputs
- What is the purpose of events and event handling?
  something for code to react to, knowing when user interacts
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addeventlistener()
- What is a callback function?
  function passed into another function as an argument
- What object is passed into an event listener callback when the event fires?
  the event
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  element that triggers the event, more info from checking console
- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  #1 passing a reference to the function; it will only be called when the event happens
  #2 is calling the function directly

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
