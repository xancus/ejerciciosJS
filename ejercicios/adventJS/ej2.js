function manufacture (gifts, materials) {
    // Code here
    const all_gifts = gifts.filter(gift => {
      let possible = true
      gift.split('').forEach(material => {
        if (!materials.includes(material)){
          possible = false
        }
      })
      if (possible === true) return true
      else return false
    })
    
    return all_gifts
  }
  
  const gifts = ['libro', 'ps5']
  const materials = 'psli'
  manufacture(gifts, materials) // []
