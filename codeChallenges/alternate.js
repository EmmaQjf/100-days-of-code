function alternate(s) {
    
    // find the words that are continous 
    const reg = /([^])\1+/g
    
    // let result =  s.match(reg)
    
    // delete the letters that are continous 
    let newString = s.replace(reg,'')
    console.log(newString)
    
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
     console.log(letters)
      let max = 0;
      let longestString = ''
     for (let i = 0; i < letters.length; i++  ) {
  
        for (let j = i + 1; j < letters.length; j++){
       
            let lettersString2 = newString.replace(new RegExp(`[^${letters[i]}${letters[j]}]`, 'g'), '')
            console.log(lettersString2)
            if (isValid(lettersString2) &&lettersString2.length >= max){
              max=lettersString2.length
              longestString = lettersString2
            }
        }
     }
     return max

}

function isValid(str){
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i+1]){
      return false
    }  
  }
  return true
}