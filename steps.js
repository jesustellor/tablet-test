function loops(n) {
    for (let ro = 0; ro < n; ro++) {
        // console.log('row:', ro);
        let row = '';
        for (let col = 0; col < n; col++) {
            // console.log('col:', col);
            row += '#';
            // console.log(i, j);   
        }
        console.log(row);
    }
}

// function steps(n) {
//     for (let i = 0; i < n; i++){
//         let line = '';
//         for (let j = 0; j < n; j++){
//             if (j > i) {
//                 line += ' ';
//             } else {
//                 line += '#';
//             }
//         }
//         console.log(line);
//     }
// }

// function steps(n) {
//     for(let row=1; row<=n; row++){
//      let line = ''
//      for(let col=2; col<=n; col++){
//        if(col<=row){
//          line += '#'
//        }else{
//          line += ' '
//        }
//      }
//      console.log(line)
//     } 
//    }

// function steps(n){
//     for(let i = 1; i <= n; i++){
//         console.log("#".repeat(i));
//     }
// }
// Test the function
loops(3);