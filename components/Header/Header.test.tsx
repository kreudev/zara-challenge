import { render, screen } from '@testing-library/react'
import { Header } from './Header'
import * as CartContextModule from '@/context/CartContext';

describe('Header', () => {
  const mockUseCart = () => ({
    cartItems: [],
    addItemToCart: jest.fn(),
    removeItemFromCart: jest.fn(),
    clearCart: jest.fn(),
  })

  beforeEach(() => {
    jest.spyOn(CartContextModule, 'useCart').mockImplementation(mockUseCart)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('displays the header banner', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('contains a link to the shopping cart', () => {
    render(<Header />)
    expect(screen.getByLabelText('Go to shopping cart')).toHaveAttribute(
      'href',
      '/cart',
    )
  })

  it('shows the logo with a link to home', () => {
    render(<Header />)
    expect(screen.getByLabelText('Go to home page')).toHaveAttribute(
      'href',
      '/',
    )
  })
})
