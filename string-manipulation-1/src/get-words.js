/* exported getWords */
function getWords(string) {
  const i = 0;
  const empty = [];
  if (i < string.length) {
    return string.split(' ');
  } else if (string.length <= i) {
    return empty;
  }
}
