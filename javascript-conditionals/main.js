/* exported isUnderFive,
            isEvenNumber,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEvenNumber(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

const jeremy = {
  name: 'Jeremy Nguyen',
  age: 27,
};

console.log(jeremy);

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH === 7) {
    return 'neutral';
  } else {
    return 'invalid pH level';
  }
}

const yakko = 'character 1';
const wakko = 'character 2';
const dot = 'character 3';

console.log(yakko, wakko, dot);

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

const action = 'Die Hard';
const comedy = 'The Big Lebowski';
const horror = 'Scream';
const drama = 'The Whale';
const musical = 'Sound of Music';
const scifi = 'Star Wars';

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return action;
    case 'comedy':
      return comedy;
    case 'horror':
      return horror;
    case 'drama':
      return drama;
    case 'musical':
      return musical;
    case 'scifi':
      return scifi;
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical';
  }
}
