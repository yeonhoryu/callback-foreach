let words = ['Loops', 'are', 'a', 'great', 'way', 'to', 'find', 'elements', 'in', 'an', 'array'];

// function foreach(word) {
  
//   console.log(word);
// }
function createWord() {
words.forEach((word)  => (paragraph += word + ' '));
return paragraph;
}

console.log(createWord(words));

// words.forEach(words) => console.log(words)