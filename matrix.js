function matrix(n) {
    const result = [];
    let counter = 1, startRow = 0, endRow =n - 1, startCol = 0, endCol =n - 1;
    for (let i=0; i < n; i++) {
        result[i] = [];
    }
    console.log(result)
    while (startRow <= endRow && startCol <= endCol) {
        //top
    for (let i = startCol; i <= endCol; i++) {
        result[startRow][i] = counter;
        counter++;
    }
    startRow++;
//right
    for (let i = startRow; i <= endRow; i++) {
        result[i][endCol] = counter;
        counter++;
    }
    endCol--;
//bottom
    for (let i = endCol; i >= startCol; i--) {
        result[endRow][i] = counter;
        counter++;
    }
    endRow--;
//left
    for (let i = endRow; i >= startRow; i--) {
        result[i][startCol] = counter;
        counter++;
    }
    startCol++;
    }
    console.log("count", counter, "rows", startRow, endRow,"cols", startCol, endCol);
    return result;
}

console.log(matrix(3));

// keep count of the counter, the start and end rows and columns as well as the i variable
// for each of the for loops, you can also run the code to see that the empty arrays get made first
// and follow along the counter as you go through the code