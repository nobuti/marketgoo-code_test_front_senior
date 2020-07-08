import { types } from '../types'
import request from '../../utils/request'

export const addPlayer = player => {
  return async dispatch => {
    // Optimistic update
    // we push the new player right away then delegate the websocket to update
    // the whole list. If an error raises, we update the store to show some feedback
    dispatch({ type: types.ADD_PLAYER, player })

    try {
      await request({
        method: 'POST',
        url: '/players',
        body: player
      })
    } catch (err) {
      console.error(err)
    }
  }
}

export const deletePlayer = id => {
  return async dispatch => {
    // Optimistic update as well
    dispatch({ type: types.REMOVE_PLAYER, player: id })

    try {
      await request({
        method: 'DELETE',
        url: `/players/${id}`
      })
    } catch (err) {
      console.error(err)
    }
  }
}
