function palindrome(str){
    let rev = "";
    for(let i = 0;  i < str.length; i++){
        rev = str[i] + rev;
    }
    return rev === str;
}

console.log(palindrome("racecar"));