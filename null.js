const data = [0, '0', '', false, NaN, undefined, null];
const filtered = data.filter(Boolean);
const filtered2 = Boolean(data);
console.log(filtered, filtered2);
// result: ['0'] true;