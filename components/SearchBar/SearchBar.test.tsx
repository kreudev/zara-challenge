import { render, screen, fireEvent } from '@testing-library/react'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders the search bar', () => {
    render(<SearchBar />)
    expect(screen.getByRole('search')).toBeInTheDocument()
  })

  it('shows the placeholder label', () => {
    render(<SearchBar />)
    expect(screen.getByText('Search for a smartphone...')).toBeInTheDocument()
  })

  it('renders the input field', () => {
    render(<SearchBar />)
    expect(screen.getByLabelText('Search field')).toBeInTheDocument()
  })

  it('displays the number of search results', () => {
    render(<SearchBar results={100} />)
    expect(screen.getByText('100 Results')).toBeInTheDocument()
  })
  it('shows the input value', () => {
    render(<SearchBar value='test' />)
    expect(screen.getByLabelText('search-input')).toHaveValue('test')
  })

  it('shows a clear button when input has value', () => {
    render(<SearchBar value='test' />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('clears the input when clear button is clicked', () => {
    const { rerender } = render(<SearchBar value='test' />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    rerender(<SearchBar value='' />)
    expect(screen.getByLabelText('search-input')).toHaveValue('')
  })
})
