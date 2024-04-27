function findFirstRepeated(gifts) {
    // Code here
    let stored_idx = gifts.length + 2
    const to_return = gifts.forEach((gift, idx) => {
      const r_index = gifts.lastIndexOf(gift)
      if (r_index !== idx && r_index < stored_idx) {
        stored_idx = r_index
        // f = r_index < f ? r_index : f
      }
    })
    if (stored_idx !== gifts.length + 2) {
      return gifts[stored_idx]
    }
    return -1
  }
  
  findFirstRepeated([1, 2, 3, 4])