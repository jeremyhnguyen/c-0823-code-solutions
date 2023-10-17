# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && checks if a set of boolean operands will be true if and only if all operands are true; otherwise false
  || checks if a set of operands is true if and only if one or more of its operands is true; typically boolean

can be used to compare two or more variables

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  if one of the operand conversions is found to be false then the operation stops and returns value of the falsy operand; without evaluating any of the remainding operands
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  || looks for a truthy value of one or more operands, ?? returns its right hand operand only if the left is null/undefined otherwise it will return the left
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  ? takes three operands, a condition followed by a ?, an expression to execute if truthy condition: and the expressions to execute if falsy --used as an alternative to if/else statements

ex.
isMember ? '$2.00' : '$10.00';

- What is the `?.` (optional chaining) operator? When would you use it?
  ?. accesses an object's property or calls a function. If the object/function is undefined/null, expression short circuits as undefined. Use when attempting to call a method which may not exist.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  allows an iterable (array or string), to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
- What data types can be spread into an array? Into an object?
  iterable values: arrays and strings can be spread into array literals and argument lists
  arrays can be spread into objects
- How does spread syntax differ from rest syntax?
  opposite of rest syntax despite looking the same. spread expands an array into its elements, while rest collects multiple elements and 'condenses' them into a single element

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
