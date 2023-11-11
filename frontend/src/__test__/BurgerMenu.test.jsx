import { render, screen, fireEvent } from '@testing-library/react'
import BurgerMenu from '../components/BurgerMenu'

describe('BurgerMenu', () => {
  it('applies hover styles on link hover', () => {
    render(<BurgerMenu />)

    const dashboardLink = screen.getByText('Dashboard')
    fireEvent.mouseEnter(dashboardLink)

    // Assert that hover styles are applied
    expect(dashboardLink).toHaveClass('hover:bg-white')
    expect(dashboardLink).toHaveClass('hover:text-blue-700')
  })
})
