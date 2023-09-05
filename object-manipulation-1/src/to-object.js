/* exported toObject */
function toObject(keyValuePair) {
  const obj = {};

  for (let i = 0; i < keyValuePair.length; ++i) {
    obj[i] = keyValuePair[0];
    obj[i + 1] = keyValuePair[1];
  }
  return obj;
}
