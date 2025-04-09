function anagrams(word){
    const anagrams = ["enlist", "google", "inlets", "banana"];

    const result = anagrams.filter(anagram => {
        return anagram.split("").sort().join("") === word.split("").sort().join("");
    });

    console.log(result); // ["inlets"]
    return result; 
}
// Test the function
anagrams("listen"); // ["inlets", "enlist"]