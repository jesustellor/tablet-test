// function pyramid(n) {
//     for(let row = 1; row <= n; row++){
//         let line = '';
//         for(let col = 1; col <= n; col++){
//             if(col <= row){
//                 line += '#';
//             } else {
//                 line += ' ';
//             }
//         }
//         console.log(line);
//     }
// }

function pyramid(n) {
    for(let row = 0; row < n; row++){
        let line = '';
        for(let col = 0; col < 2 * n -1; col++){
            if(col >= n - row - 1 && col <= n + row - 1){
                line += '#';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}

// Test the function
pyramid(3);