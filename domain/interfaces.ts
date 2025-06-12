import { Price, Color, Storage } from '@/domain/value-objects'

export interface ApiProductBase {
  id: string
  brand: string
  name: string
  basePrice: number
  imageUrl: string
}

export interface ApiSpecs {
  screen: string
  resolution: string
  processor: string
  mainCamera: string
  selfieCamera: string
  battery: string
  os: string
  screenRefreshRate: string
}

export interface ApiColorOption {
  name: string
  hexCode: string
  imageUrl: string
}

export interface ApiStorageOption {
  capacity: string
  price: number
}

export interface ApiProduct extends ApiProductBase {
  description: string
  rating: number
  specs: ApiSpecs
  colorOptions: ApiColorOption[]
  storageOptions: ApiStorageOption[]
  similarProducts: ApiProductBase[]
}

export interface ProductBase {
  id: string
  brand: string
  name: string
  basePrice: Price
  imageUrl: string
}

export interface Product extends ProductBase {
  description: string
  rating: number
  specs: ApiSpecs
  colorOptions: Color[]
  storageOptions: Storage[]
  similarProducts: ProductBase[]
}
