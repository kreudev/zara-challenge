import styles from './ProductDetailPage.module.css'
import { PhoneCard } from '@/components'
import { Specifications } from './components/specifications/Specifications'
import { removeDuplicatesById } from '@/utils/removeDuplicatesById'
import { toProduct } from '@/domain/transformers/product-transformer'
import { PlainProduct } from '@/domain/interfaces/plain-types'
import { DynamicProductInfoHeader, DynamicSimilarItems } from './components/dynamic-components'

export const ProductDetailPage = ({ product }: { product: PlainProduct }) => {
    const productEntity = toProduct(product);

    return (
        <main className={styles.productDetail}>
            {product && (
                <>
                    <DynamicProductInfoHeader plainProduct={product} />
                    <Specifications product={productEntity} />
                    {productEntity.similarProducts.length > 0 && (
                        <DynamicSimilarItems>
                            {removeDuplicatesById(productEntity.similarProducts).map(
                                (product) => (
                                    <PhoneCard
                                        product={product}
                                        url={`/product/${product.id}`}
                                        key={product.id}
                                    />
                                ),
                            )}
                        </DynamicSimilarItems>
                    )}
                </>
            )}
        </main>
    )
}
