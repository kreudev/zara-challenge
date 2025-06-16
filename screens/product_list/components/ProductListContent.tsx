'use client'

import { PlainProductBase } from '../ProductListPage'
import useProductList from '../hooks/useProductList'
import { DynamicSearchBar, DynamicPhoneCard, DynamicLoadingBar } from './dynamic-components'

export const ProductListContent = ({ initialProducts }: { initialProducts: PlainProductBase[] }) => {
  const { products, search, handleSearch, loading, error, toProductBase } = useProductList(initialProducts); // Por el uso de react hooks, se debe usar use client

  if (error) {
    return (
      <div className='container' aria-live='assertive'>
        <h1>Error: Could not get the product list</h1>
      </div>
    )
  }

  return (
    <>
      <DynamicLoadingBar loading={loading} />
      <DynamicSearchBar
        results={products?.length}
        placeholder='Search for a smartphone...'
        value={search}
        onChange={handleSearch}
      />
      <section className='grid-layout' aria-label='Product list'>
        {products?.map((product) => (
          <DynamicPhoneCard
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
    </>
  )
} 