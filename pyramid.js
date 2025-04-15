// 2n - 1 columns and math.floor(2n - 1 / 2) where to place the #
// col >= mid - row && col <= mid + row
function pyramid(n) {
    for(let row = 0; row < n; row++){
        let line = '';
        let mid = Math.floor((2 * n - 1) / 2);
        for(let col = 0; col < n * 2 - 1; col++){
            if(col >= mid - row && col <= mid + row){
                line += '#';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}

// function pyramid(n) {
//     for(let row = 0; row < n; row++){
//         let line = '';
//         for(let col = 0; col < 2 * n -1; col++){
//             if(col >= n - row - 1 && col <= n + row - 1){
//                 line += '#';
//             } else {
//                 line += ' ';
//             }
//         }
//         console.log(line);
//     }
// }

// // Test the function
pyramid(2);