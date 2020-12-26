import React from 'react'
import { screen, render } from '@tests/setup'
import Home from '@pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchInlineSnapshot()
  })

  it('should have the correct title heading', async () => {
    render(<Home />)
    // fireEvent.click(screen.getByText('Test Button'))
    expect(
      await screen.findByText(/nextJS starter project/i)
    ).toBeInTheDocument()
  })
})
