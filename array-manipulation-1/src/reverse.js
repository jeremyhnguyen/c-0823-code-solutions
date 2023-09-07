/* exported reverse */
function reverse(array) {
  const revArr = [];
  const i = 0;
  while (i < array.length) {
    revArr.push(array.pop());
  }
  return revArr;
}
