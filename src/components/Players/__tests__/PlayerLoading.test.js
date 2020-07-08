import React from 'react'
import { render, screen } from '@testing-library/react'
import Loading from '../PlayersLoading'

describe('PlayersLoading', () => {
  test('renders properly', () => {
    const { container } = render(
      <Loading />
    )

    expect(container).toMatchSnapshot()
    expect(screen.queryByTestId('loading')).toHaveClass('Loading')
    expect(screen.queryByTestId('loading-label')).toHaveClass('Loading-label')
  })
})
