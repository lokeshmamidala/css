function reverseAndCapitalize(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.reverse();
  const capitalizedWords = reversedWords.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(' ');
}
const input = "full stack java";
const result = reverseAndCapitalize(input);
console.log(result);
