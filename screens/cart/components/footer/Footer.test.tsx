import { Footer } from './Footer'
import { render, screen } from '@testing-library/react'
// Jest globals are available, no import needed
import { mockCartItems } from '@/test/mocks'
describe('Footer', () => {
  it('should show correct price', () => {
    render(
      <Footer
        cartItems={[mockCartItems[0], mockCartItems[0], mockCartItems[0]]}
      />,
    )
    expect(screen.getByText('300 EUR')).toBeInTheDocument()
  })

  it('should hide cart logic if cart is empty', () => {
    render(<Footer cartItems={[]} />)
    expect(screen.queryByText('Pay')).not.toBeInTheDocument()
  })

  it('should link to checkout page', () => {
    render(<Footer cartItems={mockCartItems} />)
    const checkoutLink = screen.getByText('Pay')
    expect(checkoutLink).toHaveAttribute('href', '#')
  })
  it('should link to list page', () => {
    render(<Footer cartItems={mockCartItems} />)
    const listLink = screen.getByText('Continue Shopping')
    expect(listLink).toHaveAttribute('href', '/')
  })
})
