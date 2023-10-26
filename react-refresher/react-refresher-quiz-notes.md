# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  same way that you would define a JS function

- How do you use JSX in a React component?
  enclose it within tags similar to HTML markup

- How do you declare the props a React component needs?
  put them into the component function as parameters (props are object properties)

- How do you pass props to a React component?
  pass them same way as JS arguments when you call the function

- How do you include JavaScript expressions in JSX?
  put JS within curly braces

- What are React hooks and what are the three "Rules of Hooks"?
  hooks are special functions that are only available while React is rendering (ex: state) hooks start with 'use'

  1.Hooks can only be called inside React function components.
  2.Hooks can only be called at the top level of a component.
  3.Hooks cannot be conditional.

- How do you manage state in a React component?
  state can be managed using useState() or other hooks built into React

React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself.

- How do you handle events in React?
  passing a function as a prop to an element(JSX)

  1.declare function within component file
  2.implement logic within the function
  3.add the function to a prop on the component in main

- How do you let a parent component know that an event happened?
  1.create a callback function in the parent component, retrieves data from child
  2.pass the callback function to the child as a props from the parent component
  3.the child component calls the parent callback function using props and passes the data to the parent component.

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
