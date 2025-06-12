import { render, screen } from '@testing-library/react'
import { CartPage } from './CartPage'
import { mockCartItems } from '@/test/mocks'
import { mockUseCart } from '@/test/mocks'
import * as CartContextModule from '@/context/CartContext'
describe('CartPage', () => {
  beforeEach(() => {
    jest.spyOn(CartContextModule, 'useCart').mockImplementation(mockUseCart)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('renders the cart page title', () => {
    render(<CartPage />)
    expect(screen.getByText('Cart (1)')).toBeInTheDocument()
  })

  it('displays the items in the cart', () => {
    render(<CartPage />)
    expect(screen.getByText('iPhone 13 Pro')).toBeInTheDocument()
  })

  it('shows the correct count when multiple items are in the cart', () => {
    jest.spyOn(CartContextModule, 'useCart').mockImplementation(() => ({
      cartItems: [mockCartItems[0], { ...mockCartItems[0], id: '2' }, { ...mockCartItems[0], id: '3' }],
      addItemToCart: jest.fn(),
      removeItemFromCart: jest.fn(),
      clearCart: jest.fn(),
    }))
    render(<CartPage />)
    expect(screen.getByText('Cart (3)')).toBeInTheDocument()
  })
})
