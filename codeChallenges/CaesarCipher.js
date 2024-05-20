function caesarCipher(s, k) {
    // Write your code here
    //define the string of all the alphabets
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let newArray = []
    for (let i = 0; i<s.length; i++){
        if(!s[i].match(/[a-zA-Z]/)){
            newArray.push(s[i])
            console.log(newArray)
        }else{
            if(s[i]===s[i].toUpperCase()){
                 newArray.push(findCorrespondingLetter(s[i].toLowerCase(),alphabets,k).toUpperCase())  
                 console.log(newArray)
            }else{
                newArray.push(findCorrespondingLetter(s[i],alphabets,k))   
                console.log(newArray)
            }   
        }
    }
    return newArray.join('')

}
// find the new letter after rotating.
function findCorrespondingLetter(l,s,k){
     let position = s.indexOf(l)
     let newLetter =''
     if (position + k <=26){
         newLetter = s[position+k]
     }else {
         newLetter= s[position + k - 26]
     }
    return newLetter  
}