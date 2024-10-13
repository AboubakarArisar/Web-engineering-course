function containsDigit(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= "0" && str[i] <= "9") {
        return true;
      }
    }
    return false;
  }
  
  function filterElementsWithDigits(elements) {
    const result = [];
    for (let i = 0; i < elements.length; i++) {
      if (containsDigit(elements[i])) {
        result.push(elements[i]);
      }
    }
    return result;
  }
  
  const elements = ["abc", "a1b", "123", "xyz"];
  const result = filterElementsWithDigits(elements);
  console.log(result);
  