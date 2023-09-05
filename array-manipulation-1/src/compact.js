/* exported compact */
function compact(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// omits from array: false, null, NaN, 0, -0, undefined, empty strings
// maintains order of truthy elements
//  banMethods(compact, 'slice', 'splice', 'pop', 'shift', 'filter');
