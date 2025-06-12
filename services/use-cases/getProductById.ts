import { ApiProduct } from '@/domain/interfaces'
import { ProductAdapter } from '@/infrastructure/adapters/ProductAdapter'
import { getData } from '@/infrastructure/api/getData'

export const getProductById = async ({ id }: { id: string }) => {
  const data = await getData<ApiProduct>(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
  )

  if (data) {
    return ProductAdapter.toDomain(data)
  } else {
    return null
  }
}
