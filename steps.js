// function steps(n) {
//  for(let row = 1; row <= n; row++){
//      let line = '';
//      for(let col = 1; col <= n; col++){
//          if(col <= row){
//              line += '#';
//          } else {
//              line += '  ~';
//          }
//      }
//      console.log(line);
//  }
// }

function steps(n) {
    for (let i = 0; i < n; i++){
        let line = '';
        for (let j = 0; j < n; j++){
            if (j > i) {
                line += ' ';
            } else {
                line += '#';
            }
        }
        console.log(line);
    }
}

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
steps(3);