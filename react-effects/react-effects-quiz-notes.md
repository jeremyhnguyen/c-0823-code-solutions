# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  on initial render and when a rerender (from changed state) would cause DOM elements to change
- What is a React Effect?
  react effect allows some code after rendering to synchronize with external systems
- When should you use an Effect and when should you not use an Effect?
  should use effect when you want to 'step out' of React code and sync with an external system (browser, APIs, 3rd party widgets, network, etc)

don't use effect if it only adjusts state based on other state

- When do Effects run?
  at the end of a commit after screen updates/after every render
- What function is used to declare an Effect?
  useEffect() hook
- What are Effect dependencies and how do you declare them?
  make effects only re-run when needed rather than every render

specify an array of dependencies as the second argument to useEffect

useEffect(() => {
code
}, [prop as a dependency]);

if empty array it will only run on mount (intiail render)

- Why would you want to clean up from an Effect?
  specifies how to stop
- How do you clean up from an Effect?
  disconnect, unsubscribe, cancel ,ignore
- When does the cleanup function run?
  after the effect code runs

include a return within useEffect with a cleanup function

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
