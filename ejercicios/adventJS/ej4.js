decode('(olleh) (dlrow)!') // sa(u(acla)tn)s --> sa(ualcatn)s --> santaclaus
  decode('sa(u(cla)atn)s')
  decode('hola (odnum)')
  
  function decode(a){
    const letters = a.split('')
    let firstItem = true
    let st = false
    const final = []
    let acc = []
    let current = []
    // console.log('word to reverse: ', a)
    
    letters.forEach((word_to_check, idx2) => {
      if (word_to_check === '(') {
        if (firstItem === false) {
        acc.push(...current)
        } 
        else {
            firstItem = false
        }
        firstItem = false
        current = []
        return
      } else if(word_to_check === ')') {
          const reversed = reverse(current)
        // console.log('reversed shit: ', reversed)
        if (acc.length !== 0) {
            current.unshift(acc.at(-1))
          acc.pop()
        } 
        else if(acc.length === 0){
          firstItem = true
          current = []
          final.push(...reversed)
        }
      } else {
        current.push(word_to_check)
        // console.log('add to current: ', {current})
        if (firstItem === true || idx2 === letters.length - 1) final.push(word_to_check)
      }
    })
      
    console.log(final.join(''))
    
  }
  
  function reverse(letters) {
    // 'sa(u(cla)atn)s'
    return letters.reverse()
      
  }