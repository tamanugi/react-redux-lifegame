import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import lifegame from './reducers'
import App from './components/App'

const initialState = {
  cells: [
    [0,1,0,0,0],
    [1,1,0,1,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
    [0,0,0,1,0]
  ],
  generation:0
}

const store = createStore(lifegame, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)
