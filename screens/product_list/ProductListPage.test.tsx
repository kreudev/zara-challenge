import { render, screen } from '@testing-library/react';
import { ProductListPage } from './ProductListPage';
import * as useFetchModule from '@/hooks/useFetch';
import * as useDebounceModule from '@/hooks/useDebounce';

const mockProducts = [
  { id: '1', name: 'iPhone', brand: 'Apple', basePrice: { getValue: () => 100 }, imageUrl: 'img1' },
  { id: '2', name: 'Samsung', brand: 'Samsung', basePrice: { getValue: () => 200 }, imageUrl: 'img2' },
];

describe('ProductListPage', () => {
  beforeEach(() => {
    jest.spyOn(useDebounceModule, 'useDebounce').mockImplementation((v) => v);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the loading indicator when fetching data', () => {
    jest.spyOn(useFetchModule, 'useFetch').mockReturnValue({ data: undefined, loading: true, error: null });
    render(<ProductListPage initialProducts={[]} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('displays an error message if fetching fails', () => {
    jest.spyOn(useFetchModule, 'useFetch').mockReturnValue({ data: undefined, loading: false, error: new Error('error') });
    render(<ProductListPage initialProducts={[]} />);
    expect(screen.getByText(/Error: Could not get the product list/i)).toBeInTheDocument();
  });

  it('shows product cards for each product in the list', () => {
    jest.spyOn(useFetchModule, 'useFetch').mockReturnValue({ data: mockProducts, loading: false, error: null });
    render(<ProductListPage initialProducts={[]} />);
    expect(screen.getByText('iPhone')).toBeInTheDocument();
    expect(screen.getAllByText('Samsung').length).toBeGreaterThan(0);
  });

  it('shows a message when no products match the search', () => {
    jest.spyOn(useFetchModule, 'useFetch').mockReturnValue({ data: [], loading: false, error: null });
    render(<ProductListPage initialProducts={[]} />);
    expect(screen.getByText(/No products found/i)).toBeInTheDocument();
  });
}); 