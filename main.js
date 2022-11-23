const input = 'Welcome';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j <vowels.length; j++) {
      if (input[i] === vowels[j]) {
        console.log(vowels[j]);
      }  
    }
  }