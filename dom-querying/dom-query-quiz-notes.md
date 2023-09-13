# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to make sure things are working as intended. debugging purposes
- What is a "model"?
  recreation of something
- Which "document" is being referred to in the phrase Document Object Model?
  HTML doc
- What is the word "object" referring to in the phrase Document Object Model?
  objects that represent all of our elements that make up the DOM tree
- What is a DOM Tree?
  tree-like structure that represent our DOM elements
- Give two examples of `document` methods that retrieve a single element from the DOM.

1. query selector
   2.getelementbyid

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  queryselectorall
- Why might you want to assign the return value of a DOM query to a variable?
  to keep reusing the reference variable
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  html content needs to be parsed first before running js
- What does `document.querySelector()` take as its argument and what does it return?
  css selector as argument, return first element that matches
- What does `document.querySelectorAll()` take as its argument and what does it return?
  take a css selector as argument, return a nodelist (array-like structure)

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
