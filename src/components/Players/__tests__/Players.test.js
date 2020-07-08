import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Players from '../Players'

describe('Players', () => {
  const players = {
    collection: [{
      id: 1,
      name: 'Peter',
      team: 'Pandas',
      score: 16921,
      createdAt: '2020-07-08 02:25:52.976 +00:00',
      updatedAt: '2020-07-08 08:05:45.004 +00:00'
    },
    {
      id: 2,
      name: 'Jhon',
      team: 'Cobrakay',
      score: 15946,
      createdAt: '2020-07-08 02:25:52.977 +00:00',
      updatedAt: '2020-07-08 08:05:30.004 +00:00'
    },
    {
      id: 3,
      name: 'Tommy',
      team: 'Space',
      score: 16112,
      createdAt: '2020-07-08 02:25:52.977 +00:00',
      updatedAt: '2020-07-08 08:05:25.004 +00:00'
    }
    ],
    fetching: false
  }

  const addPlayer = jest.fn()
  const deletePlayer = jest.fn()

  test('renders properly', () => {
    const { container } = render(
      <Players players={players} addPlayer={addPlayer} deletePlayer={deletePlayer} />
    )

    expect(container).toMatchSnapshot()
    expect(screen.queryByTestId('modal')).toBeInTheDocument()
    expect(screen.queryByTestId('new-player-form')).not.toBeInTheDocument()
  })

  test('should show modal properly', () => {
    render(
      <Players players={players} addPlayer={addPlayer} deletePlayer={deletePlayer} />
    )

    const button = screen.queryByTestId('players-action')
    fireEvent.click(button)

    expect(screen.queryByTestId('new-player-form')).toBeInTheDocument()
  })
})
