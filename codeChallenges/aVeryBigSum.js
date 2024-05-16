function aVeryBigSum(ar) {
    // Write your code here
      return ar.reduce(function getSum(sum, element){
          return sum + element
      },0) 
}