import { Product, ApiSpecs, ProductBase } from '@/domain/interfaces'
import { Price } from '@/domain/value-objects'
import { Color, Storage } from '@/domain/value-objects'

const CART_KEY = 'cart'

interface SerializedProduct {
  id: string
  brand: string
  name: string
  description: string
  basePrice: {
    amount: number
    currency: string
  }
  colorOptions: {
    name: string
    hexCode: string
    imageUrl: string
  }[]
  storageOptions: {
    capacity: string
    price: {
      amount: number
      currency: string
    }
  }[]
  imageUrl: string
  rating: number
  specs: ApiSpecs
  similarProducts: {
    id: string
    brand: string
    name: string
    basePrice: {
      amount: number
      currency: string
    }
    imageUrl: string
  }[]
  quantity?: number
}

const serializeProduct = (product: Product & { quantity?: number }): SerializedProduct => ({
  ...product,
  basePrice: {
    amount: product.basePrice.getValue(),
    currency: product.basePrice.getCurrency(),
  },
  colorOptions: product.colorOptions.map((color) => ({
    name: color.getName(),
    hexCode: color.getHexCode(),
    imageUrl: color.getImageUrl(),
  })),
  storageOptions: product.storageOptions.map((storage) => ({
    capacity: storage.getCapacity(),
    price: {
      amount: storage.getPrice().getValue(),
      currency: storage.getPrice().getCurrency(),
    },
  })),
  similarProducts: product.similarProducts.map((similar) => ({
    ...similar,
    basePrice: {
      amount: similar.basePrice.getValue(),
      currency: similar.basePrice.getCurrency(),
    },
  })),
})

const deserializeProduct = (serialized: SerializedProduct): Product & { quantity?: number } => ({
  ...serialized,
  basePrice: Price.create(serialized.basePrice.amount, serialized.basePrice.currency),
  colorOptions: serialized.colorOptions.map((color) =>
    Color.create(color.name, color.hexCode, color.imageUrl),
  ),
  storageOptions: serialized.storageOptions.map((storage) =>
    Storage.create(
      storage.capacity,
      Price.create(storage.price.amount, storage.price.currency),
    ),
  ),
  similarProducts: serialized.similarProducts.map((similar) => ({
    ...similar,
    basePrice: Price.create(similar.basePrice.amount, similar.basePrice.currency),
  })),
})

export const getCartItems = (): (Product & { quantity?: number })[] => {
  if (typeof window === 'undefined') return [] // Prevent SSR error

  const data = localStorage.getItem(CART_KEY)
  if (!data) return []

  const parsedItems = JSON.parse(data) as SerializedProduct[]
  return parsedItems
    .filter(item => item.basePrice && typeof item.basePrice.amount === 'number' && typeof item.basePrice.currency === 'string')
    .map(deserializeProduct)
}

export const addItemToLocalStorageCart = (
  item: Product & { quantity?: number },
): void => {
  const items = getCartItems()
  const itemIndex = items.findIndex(
    (i) =>
      i.id === item.id &&
      i.basePrice.getValue() === item.basePrice.getValue() &&
      i.imageUrl === item.imageUrl,
  )

  const serializedItems = items.map(serializeProduct)

  if (itemIndex !== -1) {
    serializedItems[itemIndex].quantity = (serializedItems[itemIndex].quantity ?? 1) + 1
  } else {
    serializedItems.push({ ...serializeProduct(item), quantity: 1 })
  }

  localStorage.setItem(CART_KEY, JSON.stringify(serializedItems))
}

export const removeItemFromLocalStorageCart = (item: Product): void => {
  const items = getCartItems()
  const itemIndex = items.findIndex(
    (i) =>
      i.id === item.id &&
      i.basePrice.getValue() === item.basePrice.getValue() &&
      i.imageUrl === item.imageUrl,
  )

  const serializedItems = items.map(serializeProduct)

  if (itemIndex !== -1 && items[itemIndex].quantity === 1) {
    serializedItems.splice(itemIndex, 1)
  } else if (itemIndex !== -1) {
    serializedItems[itemIndex].quantity = (serializedItems[itemIndex].quantity ?? 1) - 1
  }

  localStorage.setItem(CART_KEY, JSON.stringify(serializedItems))
}

export const clearLocalStorageCart = (): void => {
  localStorage.removeItem(CART_KEY)
}
