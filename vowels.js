// First Solution
function vowels(str){
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for(let char of str.toLowerCase()){
    if(vowels.includes(char)){
      count++;
    }
  }
  return count;
}

// Second Solution
// function vowels(str){
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }


// Third Solution
// function vowels(str) {
//   const vowels = 'aeiouAEIOU';
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }
// Test the function
console.log(vowels("hello")); // 2
console.log(vowels("world")); // 1
console.log(vowels("aeiou")); // 5
console.log(vowels("AEIOU")); // 5