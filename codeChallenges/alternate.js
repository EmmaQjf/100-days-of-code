function alternate(s) {
    
    // find the words that are continous 
    const reg = /([^])\1+/g
    
    // let result =  s.match(reg)
    
    // delete the letters that are continous 
    let newString = s.replace(reg,'')
    
    //frequency counter to find how many different letters
    let fc = {}
     for (let i of newString){
       if (fc[i]){
         fc[i]++
       } else {
         fc[i] = 1
       }
       
     }  
     console.log(newString)
     let letters = Object.keys(fc)
      let max = 0;
      let longestString = ''
     for (let i of letters ) {
     
       let myRegex = `${i}`
         console.log(myRegex)
        for (let j = 1; j < letters.length; j++){
          let yourRegex = `${letters[j]}`
          console.log(yourRegex)
            let lettersString2 = newString.replace(/`${i}`/g,'')
            console.log(lettersString2)
            if (lettersString2.length >= max){
              max=lettersString2.length
              longestString = lettersString2
            }
        }
       
     }
     return longestString

}

console.log(alternate('beabeefeab'))