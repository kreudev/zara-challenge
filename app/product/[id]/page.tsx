import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { getProductById } from '@/services/use-cases'
import { ProductDetailPage } from '@/screens/product_detail/ProductDetailPage'
import { LoadingBar } from '@/components'
import { toPlainProduct } from '@/domain/transformers/product-transformer'

interface ProductPageProps {
    params: {
        id: string
    }
}

export default async function ProductPage({ params }: ProductPageProps) {
    const product = await getProductById({ id: params.id })

    if (!product) {
        notFound()
    }

    const plainProduct = toPlainProduct(product)

    return (
        <Suspense fallback={<LoadingBar loading={true} />}>
            <ProductDetailPage product={plainProduct} />
        </Suspense>
    )
}