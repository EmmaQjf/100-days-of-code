function diagonalDifference2(arr){
    let columnCount = arr[0].length;
    let rowCount = arr.length;
    let sum1 = 0;
    let sum2 = 0;

    let base = Math.min(rowCount,columnCount)
    if(columnCount == rowCount){
        for (let n = 0; n<rowCount; n++){
            sum1=arr[n][n] +sum1;
            sum2=arr[n][columnCount-1-n] +sum2;
        }
    }
    else if (base === rowCount && Number.isInteger((columnCount - base)/(base -1))){
        for (let n = 0; n<base; n++){
            sum1=arr[n][(base - 1)*n] +sum1;
            sum2=arr[n][columnCount-1 - (base - 1)*n] +sum2;
        }

    }
    else if(base === columnCount && Number.isInteger((rowCount - base)/(base -1))){
        for (let n = 0; n<base; n++){
            sum1=arr[n][(base - 1)*n] +sum1;
            sum2=arr[n][columnCount-1 - (base - 1)*n] +sum2;
        }
    }else {
        sum1 = arr[0][0] + arr[rowCount-1][columnCount-1]
        sum2 = arr[0][columnCount-1] + arr[rowCount-1][0]
    }

    return Math.abs(sum2-sum1)
}

console.log(diagonalDifference2([
    [0, 1, 2, 3], 
    [4, 5, 6, 7],
    [8, 9, 0, 0]
    ]))

