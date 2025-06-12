import { ApiProductBase } from '@/domain/interfaces'
import { ProductAdapter } from '@/infrastructure/adapters/ProductAdapter'
import { getData } from '@/infrastructure/api/getData'
import { removeDuplicatesById } from '@/utils/removeDuplicatesById'

export const getProducts = async ({
  options,
}: {
  options?: {
    search?: string
    limit?: number
    offset?: number
  }
}) => {

  const data = await getData<ApiProductBase[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/products?search=${options?.search}&limit=${options?.limit}&offset=${options?.offset}`,
  )

  if (Array.isArray(data)) {
    const filteredData = removeDuplicatesById(data)

    const transformedData = filteredData.map(ProductAdapter.toBaseDomain)

    return transformedData
  } else {
    return null
  }
}
