function removeVowel(word) {
  return [removeVowelHelper(word)];
}

function removeVowelHelper(word) {
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      word = word.slice(0, i) + word.slice(i + 1);
      i--;
    }
  }
  return word;
}

console.log(removeVowel("aboubakar"));
