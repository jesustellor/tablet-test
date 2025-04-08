// Given a string, return the character that is most commonly used in the string.
function maxChar(str){
// let charMap = new Map();
    let charMap = {};
    let max = 0;
    let maxChar = "";
// loop through the string, if char is in charMap, increment it, otherwise set it to 1..
    for(let char of str){
        if(charMap[char]){
            charMap[char]++;
        }else{
            charMap[char] = 1;
        }
    }
// loop through charMap(object), if char is greater than max, set max to char
    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }
    console.log(charMap);
    console.log(max, maxChar);
    return maxChar;
}
// // Alternative way to loop through the object, turning object into array of entries
// Object.entries(charMap).forEach(([key, value]) => {
//     if(value >= max){
//         max = value;
//         maxChar = key;
//     }
// });

console.log(maxChar("abccccccd")); // "c"
console.log(maxChar("apple 1231111")); // "1"
console.log(maxChar("")); // ""
