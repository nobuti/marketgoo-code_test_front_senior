import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import PlayersList from '../PlayersList'

describe('PlayersList', () => {
  const players = [
    {
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
  ]

  const deleteAction = jest.fn()

  test('renders properly', () => {
    const { container } = render(
      <PlayersList data={players} />
    )

    expect(container).toMatchSnapshot()
    expect(screen.queryAllByTestId('row')).toHaveLength(players.length)
  })

  test('renders loading properly', () => {
    const { container } = render(
      <PlayersList data={[]} isLoading={true} />
    )

    expect(container).toMatchSnapshot()
    expect(screen.queryAllByTestId('loading')).toHaveLength(1)
  })

  test('calls deleteAction properly', () => {
    render(
      <PlayersList data={players} deleteAction={deleteAction} />
    )

    const [firstButton] = screen.queryAllByTestId('action')
    fireEvent.click(firstButton)

    expect(deleteAction).toHaveBeenCalledWith(players[0].id)
  })
})
