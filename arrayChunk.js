// function chunk(array, size) {
//     let chunked = [];
//     for (let element of array) {
//         console.log("element", element);
//         let last = chunked[chunked.length - 1];
//         // last is empty or last.length is equal to size
//         if (!last || last.length === size) {
//             chunked.push([element]);
//             console.log("last", last);
//         } else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }

function chunk(array, size) {
    let chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}
// Test cases}
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]