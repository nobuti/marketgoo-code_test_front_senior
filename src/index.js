import React from 'react'
import ReactDOM from 'react-dom'
import socketIOClient from 'socket.io-client'
import './index.css'

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
  console.log('/////////////////////', data)
})
