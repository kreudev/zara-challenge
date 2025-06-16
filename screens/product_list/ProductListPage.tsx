import { ProductBase } from '@/domain/interfaces'
import { ProductListContent } from './components/ProductListContent'

export type PlainProductBase = Omit<ProductBase, 'basePrice'> & { basePrice: { amount: number; currency: string } };

export const ProductListPage = ({ initialProducts }: { initialProducts: PlainProductBase[] }) => {
  return (
    <main className='container' style={{ marginTop: '30px' }}>
      <ProductListContent initialProducts={initialProducts} />
    </main>
  )
}
