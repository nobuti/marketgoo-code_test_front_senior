import React from 'react'
import ReactDOM from 'react-dom'
import socketIOClient from 'socket.io-client'

import '@marketgoo/ola/dist/index.css'
import './index.css'

import store from './store'
import { types } from './store/types'

import List from './components/List'
const ENDPOINT = 'http://localhost:3000'

const Root = () => {
  return (
    <>
      <h1>League Champion</h1>
      <List />
    </>
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
