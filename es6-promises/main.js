import takeAChance from './take-a-chance.js';

const promiseA = takeAChance('Jeremy');

promiseA
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject.message));
