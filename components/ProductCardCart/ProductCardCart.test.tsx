import { render, screen, fireEvent } from '@testing-library/react'
import { ProductCardCart } from './ProductCardCart'
import * as CartContextModule from '@/context/CartContext'
import { mockCartItems } from '@/test/mocks'

describe('ProductCardCart', () => {
  const mockCart = {
    cartItems: [],
    addItemToCart: jest.fn(),
    removeItemFromCart: jest.fn(),
    clearCart: jest.fn(),
  }
  const mockUseCart = () => mockCart

  beforeEach(() => {
    jest.spyOn(CartContextModule, 'useCart').mockImplementation(mockUseCart)
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  it('renders the cart product card with all info', () => {
    render(<ProductCardCart product={mockCartItems[0]} />)
    expect(screen.getByText('iPhone 13 Pro')).toBeInTheDocument()
    expect(screen.getByText('100 EUR')).toBeInTheDocument()
    expect(screen.getByText('256 | Color 1')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://example.com/image.jpg',
    )
  })

  it('shows the quantity of items in the cart', () => {
    render(<ProductCardCart product={{ ...mockCartItems[0], quantity: 24 }} />)
    expect(screen.getByText('Remove (24)')).toBeInTheDocument()
  })

  it('calls removeItemFromCart when remove is clicked', () => {
    const productWithQuantity = { ...mockCartItems[0], quantity: 2 }
    render(<ProductCardCart product={productWithQuantity} />)
    const removeButton = screen.getByText('Remove (2)')
    fireEvent.click(removeButton)
    expect(mockCart.removeItemFromCart).toHaveBeenCalledWith(
      productWithQuantity,
    )
  })

  it('updates the UI when the product quantity changes', () => {
    const productWithQuantity = { ...mockCartItems[0], quantity: 2 }
    const { rerender } = render(
      <ProductCardCart product={productWithQuantity} />,
    )
    expect(screen.getByText('Remove (2)')).toBeInTheDocument()
    const updatedProduct = { ...mockCartItems[0], quantity: 1 }
    rerender(<ProductCardCart product={updatedProduct} />)
    expect(screen.getByText('Remove (1)')).toBeInTheDocument()
  })
})
