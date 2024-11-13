function vowelCount(word) {
  return {
    a: checkLength(word, "a"),
    e: checkLength(word, "e"),
    i: checkLength(word, "i"),
    o: checkLength(word, "o"),
    u: checkLength(word, "u"),
  };
}

function checkLength(word, vowel) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === vowel) {
      count++;
    }
  }
  return count;
}

console.log(vowelCount("aboubakar"));
