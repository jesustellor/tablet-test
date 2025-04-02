// function capitalize(str){
//     return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
// }

function capitalize(str){
    const words = str.split(" ");
    const result = [];
    for(let word of words){
        result.push(word[0].toUpperCase() + word.slice(1));
    }
    return result.join(" ");
}
// // Test cases
console.log(capitalize("hello")); // "Hello"
console.log(capitalize("hello world")); // "Hello World"
console.log(capitalize("hello world! for everyone out there")); // "Hello World!"