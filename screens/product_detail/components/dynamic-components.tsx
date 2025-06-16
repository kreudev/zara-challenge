'use client'

import dynamic from 'next/dynamic'
import { PlainProduct } from '@/domain/interfaces/plain-types'
import { toProduct } from '@/domain/transformers/product-transformer'

const DynamicProductInfoHeader = dynamic(
    () => import('./product_info_header/ProductInfoHeader').then(mod => mod.ProductInfoHeader)
)

const DynamicSimilarItems = dynamic(
    () => import('./similar_items/SimilarItems').then(mod => mod.SimilarItems)
)

const ProductInfoHeaderWithTransform = ({ plainProduct }: { plainProduct: PlainProduct }) => {
    return <DynamicProductInfoHeader product={toProduct(plainProduct)} />
}

const SimilarItemsWithTransform = ({ children }: { children: React.ReactNode }) => {
    return <DynamicSimilarItems>{children}</DynamicSimilarItems>
}

export { ProductInfoHeaderWithTransform as DynamicProductInfoHeader, SimilarItemsWithTransform as DynamicSimilarItems } 