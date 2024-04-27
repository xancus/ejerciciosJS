function findNaughtyStep(original, modified) {
    // Code here
    let diff
    if (original.length === modified.length) {
      console.log('')
    }
    else {
      modified.split('').every((gift, idx) => {
        // return gift !== original[idx]
        if(gift !== original[idx]) {
          diff = original[idx] || gift
          return false
        }
        return true
      })
      console.log(diff) 
    }
  }
  
  
  const original = 'abcde'
  const modified = 'abcde'
  findNaughtyStep(original, modified) // ''