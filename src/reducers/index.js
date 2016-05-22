import { combineReducers } from 'redux'
import cells from './cells'
import generation from './generation'

const lifegame = combineReducers({
  cells
  ,generation
})

export default lifegame
