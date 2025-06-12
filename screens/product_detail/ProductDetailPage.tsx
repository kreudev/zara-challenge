'use client'

import styles from './ProductDetailPage.module.css'
import { useFetch } from '@/hooks/useFetch'
import { getProductById } from '@/services/use-cases'
import { Product } from '@/domain/interfaces'
import { LoadingBar, PhoneCard } from '@/components'
import { useState, useEffect } from 'react'
import { ProductInfoHeader } from './components/product_info_header/ProductInfoHeader'
import { Specifications } from './components/specifications/Specifications'
import { SimilarItems } from './components/similar_items/SimilarItems'
import { removeDuplicatesById } from '@/utils/removeDuplicatesById'

export const ProductDetailPage = ({ id }: { id: string }) => {
  const [previousProduct, setPreviousProduct] = useState<Product | null>(null)
  const { data: product, error, loading } = useFetch<Product | null>(
    () => getProductById({ id }),
    id,
  )

  // Actualizar el producto anterior cuando se carga uno nuevo
  useEffect(() => {
    if (product) {
      setPreviousProduct(product)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [product])

  if (error) {
    setTimeout(() => {
      window.location.assign('/')
    }, 1000)
    return (
      <main className='container' aria-live='assertive'>
        <h1>The product you are looking for does not exist</h1>
        <p>You will be redirected to the home page shortly.</p>
      </main>
    )
  }

  const currentProduct = product || previousProduct

  return (
    <main
      className={styles.productDetail}
    >
      <LoadingBar loading={loading} />
      {currentProduct && (
        <>
          <ProductInfoHeader product={currentProduct} />
          <Specifications product={currentProduct} />
          {currentProduct.similarProducts.length > 0 && (
            <SimilarItems>
              {removeDuplicatesById(currentProduct.similarProducts).map(
                (product) => (
                  <PhoneCard
                    product={product}
                    url={`/product/${product.id}`}
                    key={product.id}
                  />
                ),
              )}
            </SimilarItems>
          )}
        </>
      )}
    </main>
  )
}
