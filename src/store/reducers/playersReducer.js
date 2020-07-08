import { types } from '../types'

const initialState = {
  collection: [],
  fetching: false
}

export const playersReducer = (state = initialState, action) => {
  let players
  switch (action.type) {
    case types.UPDATE_PLAYERS:
      return {
        ...state,
        collection: action.players,
        fetching: false
      }

    case types.ADD_PLAYER:
      players = [...new Set([...state.collection, action.player])]

      return {
        ...state,
        collection: players
      }

    case types.REMOVE_PLAYER:
      players = state.collection.filter((player) => player.id !== action.player.id)

      return {
        ...state,
        collection: players
      }

    default:
      return state
  }
}
