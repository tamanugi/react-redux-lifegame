function generation(state=[], action){
  switch(action.type) {
  case 'NEXT_GENERATION':
    return state + 1
  default:
    return state
  }
}

export default generation
