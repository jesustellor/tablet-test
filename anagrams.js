function anagrams(str1, str2){
    const charMap1 = {};
    str1 = str1.toLowerCase().replace(/[\W]/g, '');

    for (let char of str1){
        charMap1[char] = (charMap1[char] || 0) + 1;
    }
    return charMap1;
}
// Test the function
console.log(anagrams("listen", "inlets")); // ["inlets", "enlist"]