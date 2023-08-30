const num1 = 1;
const num2 = 2;
const num3 = 3;
const maximumValue = Math.max(num1, num2, num3);

console.log(maximumValue);

const heroes = ['superman', 'batman', 'spiderman', 'ironman'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);

console.log(randomIndex);

const randomHero = heroes[randomIndex];

console.log(randomHero);

const library = [
  {
    title: 'Cat in the Hat',
    author: 'Dr. Seuss',
  },
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
  },
  {
    title: 'Tom Sawyer',
    author: 'Mark Twain',
  },
];
const lastBook = library.pop();

console.log(lastBook);

const firstBook = library.shift();

console.log(firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmeyer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log(library);

const fullName = 'Jeremy Nguyen';
const firstAndLastName = fullName.split(' ');

console.log(firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log(sayMyName);
