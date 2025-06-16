'use client'

import { ProductBase } from '@/domain/interfaces'
import { SearchBar, PhoneCard, LoadingBar } from '@/components'
import useProductList from './hooks/useProductList'

export type PlainProductBase = Omit<ProductBase, 'basePrice'> & { basePrice: { amount: number; currency: string } };

export const ProductListPage = ({ initialProducts }: { initialProducts: PlainProductBase[] }) => {

  const { products, search, handleSearch, loading, error, toProductBase } = useProductList(initialProducts);

  if (error) {
    return (
      <main className='container' aria-live='assertive'>
        <h1>Error: Could not get the product list</h1>
      </main>
    )
  }

  return (
    <main className='container' style={{ marginTop: '30px' }}>
      <LoadingBar loading={loading} />
      <SearchBar
        results={products?.length}
        placeholder='Search for a smartphone...'
        value={search}
        onChange={handleSearch}
      />
      <section className='grid-layout' aria-label='Product list'>
        {products?.map((product) => (
          <PhoneCard
            key={product.id}
            product={toProductBase(product)}
            url={`/product/${product.id}`}
          />
        ))}
      </section>
      {products?.length === 0 && (
        <p role='status' aria-live='polite'>
          No products found matching your search
        </p>
      )}
    </main>
  )
}
