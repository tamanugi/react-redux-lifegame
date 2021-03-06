import { connect } from 'react-redux'
import Board from '../components/Board'

function mapStateToProps(state){
  return{ cells:state.cells, generation:state.generation}
}

const LifeGame = connect(mapStateToProps)(Board)

export default LifeGame
