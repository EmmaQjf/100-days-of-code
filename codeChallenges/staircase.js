function staircase(n) {
    // let array = [];
    // for (let i = 0; i < n; i++){
    //     array.push([]);
    // }
   
    // for (let i = 0; i < n ; i++){
    //     for (let j = 0; j <= i; j++) {
    //         array[i].push('#');
    //     }
    // }
    // return array;
    let array = [];
      for (let i = 0; i < n; i++){
        array.push([]);
    }
    for (let i = 0; i <n ; i++){
    array[i].push(" ".repeat(n-i-1) + "#".repeat(i+1))
      
    }
    return array
}

console.log(staircase(6));