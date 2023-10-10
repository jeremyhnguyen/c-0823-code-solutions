# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:
  - What does `Array.forEach` do?
    executes a provided function once for each array element
  - What should the callback function do?
    whatever action it chooses; execute for each element in the array, return value is discarded
  - What is `Array.forEach` useful for?
    typical use case is to execute side effects at the end of a chain, loop over array and perform an action
- `Array.map`:
  - What does `Array.map` do?
    creates a new array populated with the results of calling a provided function on every element in the calling array
  - What should the callback function return?
    a new array with each element being the result of the callback function
  - What is `Array.map` useful for?
    transforming an array and modifying its values into a new array
- `Array.filter`:
  - What does `Array.filter` do?
    creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function
  - What should the callback function return?
    a truthy value to keep the element in the resulting array, otherwise falsy value which is omitted
  - What is `Array.filter` useful for?
    filtering an array for only elements that are truthy after passing a callback function test

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
