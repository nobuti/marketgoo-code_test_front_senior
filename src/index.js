import React from 'react'
import ReactDOM from 'react-dom'
import socketIOClient from 'socket.io-client'
import { Provider } from 'react-redux'

import store from './store'
import { types } from './store/types'
import Title from './components/Title'
import Players from './components/Players'

import './index.css'

const ENDPOINT = 'http://localhost:3000'

const Root = () => {
  return (
    <Provider store={store}>
      <Title>League Champion</Title>
      <Players />
    </Provider>
  )
}

const container = document.getElementById('app')
ReactDOM.render(<Root />, container)

const socket = socketIOClient(ENDPOINT)
socket.on('update/players', data => {
  store.dispatch({
    type: types.UPDATE_PLAYERS,
    players: data
  })
})
