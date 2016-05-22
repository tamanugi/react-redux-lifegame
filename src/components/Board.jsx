import React from 'react'
import Cell from '../components/Cell'
import {nextGeneration} from '../actions'

class Board  extends React.Component{

  componentDidMount() {
    const {dispatch} = this.props
    this.timer = setInterval(() => dispatch(nextGeneration())
                              , 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render(){
    const {cells, generation} = this.props

    return (
      <div>
      <span>Generaion: {generation}</span>
      <table>
        <tbody>{
        cells.map((line, i) =>
          <tr key={i}>{
              line.map((cell,i) =>
                <Cell key={i} isLive={cell} />
              )
            }</tr>
         )
       }</tbody>
       </table>
       </div>
    )
  }
}

export default Board
