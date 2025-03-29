function reverseNumber(num){
    let rev = num.toString().split('').reverse().join('');
    return parseInt(rev) * -1;
    // return parseInt(rev) * Math.sign(num);
}
console.log(reverseNumber(-123));