import { playersReducer } from '../playersReducer'
import { types } from '../../types'

describe('playersReducer', () => {
  it('should return the initial state', () => {
    expect(playersReducer(undefined, {})).toEqual({
      collection: [],
      fetching: true
    })
  })

  it('should add a player properly', () => {
    const player = {
      id: 1,
      name: 'Wadus',
      team: 'Wadus',
      score: 10
    }
    const state = playersReducer(undefined, {
      type: types.ADD_PLAYER,
      player
    })

    expect(state.collection.length).toEqual(1)
    expect(state.collection[0]).toEqual(player)
  })

  it('should remove a player properly', () => {
    const player = {
      id: 123,
      name: 'Wadus',
      team: 'Wadus',
      score: 10
    }
    const state = playersReducer({
      collection: [player]
    }, {
      type: types.REMOVE_PLAYER,
      player: player.id
    })

    expect(state.collection.length).toEqual(0)
  })

  it('should update players in batch properly', () => {
    const players = [{
      id: 1,
      name: 'Wadus',
      team: 'wadus',
      score: 10
    }, {
      id: 2,
      name: 'Foo',
      team: 'wadus',
      score: 12
    }]
    const state = playersReducer(undefined, {
      type: types.UPDATE_PLAYERS,
      players
    })

    expect(state.collection.length).toEqual(2)
    players.forEach((player, index) => {
      expect(state.collection[index]).toEqual(player)
    })
  })
})
