import { render, screen } from '@testing-library/react'
import { CartButton } from './CartButton'
import * as CartContextModule from '@/context/CartContext'

import { mockUseCart } from '@/test/mocks'
describe('CartButton', () => {
  beforeEach(() => {
    jest.spyOn(CartContextModule, 'useCart').mockImplementation(mockUseCart)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('renders the cart link', () => {
    render(<CartButton />)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('displays the active bag icon when items exist', () => {
    render(<CartButton />)
    expect(screen.getByLabelText('bag-active')).toBeInTheDocument()
  })

  it('shows the default bag icon when cart is empty', () => {
    jest.spyOn(CartContextModule, 'useCart').mockImplementation(() => ({
      cartItems: [],
      addItemToCart: jest.fn(),
      removeItemFromCart: jest.fn(),
      clearCart: jest.fn(),
    }))
    render(<CartButton />)
    expect(screen.getByLabelText('bag')).toBeInTheDocument()
  })

  it('displays the correct item count', () => {
    render(<CartButton />)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('shows zero when there are no products', () => {
    jest.spyOn(CartContextModule, 'useCart').mockImplementation(() => ({
      cartItems: [],
      addItemToCart: jest.fn(),
      removeItemFromCart: jest.fn(),
      clearCart: jest.fn(),
    }))
    render(<CartButton />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('navigates to the cart page on click', () => {
    render(<CartButton />)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/cart')
  })
})
