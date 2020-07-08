import React from 'react'
import { render, screen } from '@testing-library/react'
import Portal from '../'

describe('Portal', () => {
  test('shows the children', () => {
    render(
      <Portal>
        <div>Modal</div>
      </Portal>
    )

    expect(screen.getByText('Modal')).toBeInTheDocument()
  })
})
