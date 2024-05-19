function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    //find out how many types are there 
    let kinds = 0;
    if (/[a-z]/g.test(password)){
        kinds++;
    }
    if (/[0-9]/g.test(password)){
        kinds++;
    }
    if (/[A-Z]/g.test(password)){
        kinds++;
    }
    if (/[^A-Za-z0-9]/.test(password)){
        kinds++;
    }
    let missingKind = 4 - kinds;
    let passwordCount = n
    if (passwordCount >=6){
      let min = missingKind;
      return min;
    } else {
        //the minimum number is to check which one is larger, the missing password count or the missingkinds
      let missingCount = 6 - passwordCount;
      return Math.max(missingCount,missingKind)
    }

}
