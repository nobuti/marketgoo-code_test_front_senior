import React from 'react'
import { render, screen } from '@testing-library/react'
import Title from '../'

describe('Title', () => {
  test('renders properly', () => {
    const { container } = render(
      <Title>Wadus</Title>
    )

    expect(container).toMatchSnapshot()
    expect(screen.queryByTestId('h1')).toHaveClass('ola-title Title')
  })
})
