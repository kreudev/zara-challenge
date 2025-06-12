'use client'

import { useFetch } from '@/hooks/useFetch'
import { ProductBase } from '@/domain/interfaces'
import { SearchBar, PhoneCard, LoadingBar } from '@/components'
import { useState } from 'react'
import { getProducts } from '@/services/use-cases/getProducts'
import { useDebounce } from '@/hooks/useDebounce'

export const ProductListPage = () => {
  const LIMIT_OF_PRODUCTS = 21
  const OFFSET_OF_PRODUCTS = 0
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)
  const handleSearch = (value: string) => {
    setSearch(value)
  }
  const { data, loading, error } = useFetch<ProductBase[]>(
    () =>
      getProducts({
        options: {
          search: debouncedSearch,
          limit: LIMIT_OF_PRODUCTS,
          offset: OFFSET_OF_PRODUCTS,
        },
      }),
    debouncedSearch,
  )

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
        results={data?.length}
        placeholder='Search for a smartphone...'
        value={search}
        onChange={handleSearch}
      />
      <section className='grid-layout' aria-label='Product list'>
        {data?.map((product) => (
          <PhoneCard
            key={product.id}
            product={product}
            url={`/product/${product.id}`}
          />
        ))}
      </section>
      {data?.length === 0 && (
        <p role='status' aria-live='polite'>
          No products found matching your search
        </p>
      )}
    </main>
  )
}
