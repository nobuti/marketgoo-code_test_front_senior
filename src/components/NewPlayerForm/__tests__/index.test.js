import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import NewPlayerForm from '../'

describe('NewPlayerForm', () => {
  const onSubmit = jest.fn()

  test('renders properly', () => {
    const { container } = render(
      <NewPlayerForm />
    )

    expect(container).toMatchSnapshot()
  })

  test('submit should disable by default', () => {
    render(
      <NewPlayerForm />
    )

    expect(screen.queryByTestId('player-submit')).toBeDisabled()
  })

  test('submit should enable when data is valid', () => {
    render(
      <NewPlayerForm />
    )

    fireEvent.change(screen.queryByTestId('player-name'), {
      target: {
        value: 'Wadus'
      }
    })

    fireEvent.change(screen.queryByTestId('player-team'), {
      target: {
        value: 'Wadus'
      }
    })

    fireEvent.change(screen.queryByTestId('player-score'), {
      target: {
        value: '12'
      }
    })

    expect(screen.queryByTestId('player-submit')).toBeEnabled()
  })

  test('onSubmit callback should be called', () => {
    render(
      <NewPlayerForm onSubmit={onSubmit}/>
    )

    fireEvent.change(screen.queryByTestId('player-name'), {
      target: {
        value: 'Wadus'
      }
    })

    fireEvent.change(screen.queryByTestId('player-team'), {
      target: {
        value: 'Wadus'
      }
    })

    fireEvent.change(screen.queryByTestId('player-score'), {
      target: {
        value: '12'
      }
    })

    fireEvent.click(screen.queryByTestId('player-submit'))

    expect(onSubmit).toHaveBeenLastCalledWith({ name: 'Wadus', team: 'Wadus', score: '12' })
  })
})
