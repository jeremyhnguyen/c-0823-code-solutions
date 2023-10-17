const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function even() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      return true;
    }
  }
}

const evens = numbers.filter((n) => n % 2 === 0);
console.log('Even numbers:', evens);

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const noDs = names.filter((n) => !n.includes('d') && !n.includes('D'));
console.log('No D:', noDs);
