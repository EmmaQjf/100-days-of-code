function plusMinus(arr) {
    // Write your code here
    let p = arr.filter(number => number > 0).length/arr.length
   let n = arr.filter(number => number < 0).length/arr.length
   let o = arr.filter(number => number == 0).length/arr.length
  
  return console.log(p.toFixed(6)+ '\n' + n.toFixed(6) + '\n' + o.toFixed(6))
}