function palindrome(str){
    let rev = "";
    // let rev = str.split("").reverse().join("");
    for(let i = 0;  i < str.length; i++){
        rev = str[i] + rev;
    }
    return rev === str;
    //if(rev === str){
    //    return true;
    //}else{
    //    return false;
   // }
}

console.log(palindrome("racecar"));