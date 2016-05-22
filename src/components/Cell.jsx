import React from 'react'

let Cell = ({isLive}) => (
    <td>{isLive?'□':'■'}</td>
)

export default Cell
