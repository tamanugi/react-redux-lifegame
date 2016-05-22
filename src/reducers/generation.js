function generation(state=[], action){
  switch(action.type) {
  case 'NEXT':
    return state + 1
  default:
    return state
  }
}

export default generation
