# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  list may not be static, data may be changed that changes the list rendering
- Why is it important for React components to be data-driven?
  it's important for react to be data-driven because react itself only renders the component that we tell it to, react doesn't keep the local memory in storage
- Where in the component code would a list of React components typically be built?
  in separate files by component
- What `Array` method is commonly used to create a list of React components?
  array.map()
- Why do components in a list need to have unique keys?
  need to have unique keys so that if entries are changed the keys don't change as the list is updated
- What is the best value to use as a "key" prop when rendering lists?
  best value to use as the key prop is some form of id

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
