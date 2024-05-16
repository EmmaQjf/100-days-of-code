function diagonalDifference(arr) {
    // Write your code here
    let sum1 = 0;
    let sum2 = 0;
    let j = arr.length -1;
    for (let n = 0; n < arr[0].length; n++){
        sum1 = arr[n][n] + sum1
        sum2 = arr[n][j-n] + sum2
    }
    return Math.abs(sum2-sum1)
}