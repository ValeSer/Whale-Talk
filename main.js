const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  } else if (input[i] === 'u') {
    resultArray.push(input[i]);}
  for (let j = 0; j <vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }  
  }
}

resultString = resultArray.join('').toUpperCase();
console.log(resultString);