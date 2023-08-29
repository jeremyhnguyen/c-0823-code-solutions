function convertMinutesToSeconds(minutes) {
  const i = minutes * 60;

  return i;
}

console.log('The amount of seconds is:', convertMinutesToSeconds(5));

function greetPerson(name) {
  const greeting = 'Hey, ' + name;

  return greeting;
}

console.log(greetPerson('Beavis'));

function getArea(width, height) {
  const i = width * height;

  return i;
}

console.log('The area is: ' + getArea(17, 42));

function getFirstName(person) {
  const firstName = person.firstName;

  return firstName;
}

const name1 = { firstName: 'Lelouche', lastName: 'Lamperouge' };

console.log("Person's first name is: " + getFirstName(name1));

function getLastElement(array) {
  const lastElement = array.at(-1);

  return lastElement;
}
const myArray = ['propane', 'and', 'propane', 'accessories'];

console.log('The last element in the array is: ' + getLastElement(myArray));
