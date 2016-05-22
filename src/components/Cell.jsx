import React from 'react'
import { connect } from 'react-redux'


let Cell = (props) => {
  const {dispatch, isLive} = props

  return (
    <td>{isLive}</td>
  )

}

Cell = connect()(Cell)

export default Cell
