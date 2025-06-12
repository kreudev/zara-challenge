import { render, screen } from '@testing-library/react'
import { PhoneCard } from './PhoneCard'

import { mockProduct } from '@/test/mocks'
describe('PhoneCard url', () => {
  it('renders the product card with all details', () => {
    render(<PhoneCard url={'/product/1'} product={mockProduct} />)
    expect(screen.getByText('iPhone 13 Pro')).toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('100 EUR')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://example.com/image.jpg',
    )
  })

  it('has a link to the product detail page', () => {
    render(<PhoneCard url={'/product/1'} product={mockProduct} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/product/1')
  })
})
