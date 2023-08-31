/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const wordsWithSuffix = [];

  for (let i = 0; i < words.length; i++) {
    words[i] += suffix;
    wordsWithSuffix.push(words[i]);
  }
  return wordsWithSuffix;
}
