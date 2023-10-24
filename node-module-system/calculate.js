import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);
const calc = process.argv[3];

if (calc === 'plus') {
  add(num1, num2);
} else if (calc === 'minus') {
  subtract(num1, num2);
} else if (calc === 'times') {
  multiply(num1, num2);
} else if (calc === 'over') {
  divide(num1, num2);
}
