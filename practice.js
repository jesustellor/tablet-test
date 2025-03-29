function reverse(str){
    return str.split("").reverse().join("");
}

console.log(reverse("hello"));

//without using functions

function rev(str){
    let rev = "";
    for(let i = 0;  i < str.length; i++){
        rev = str[i] + rev;
    }
    return rev;
}