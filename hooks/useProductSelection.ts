import { useEffect, useState } from 'react'
import { Product } from '@/domain/interfaces'
import { Color, Storage } from '@/domain/value-objects'

export const useProductSelection = (product: Product) => {
  const [selectedStorage, setSelectedStorage] = useState<Storage | undefined>(
    product.storageOptions[0],
  )

  const [selectedColor, setSelectedColor] = useState<Color | undefined>(
    product.colorOptions[0],
  )

  useEffect(() => {
    setSelectedStorage(product.storageOptions[0])
    setSelectedColor(product.colorOptions[0])
  }, [product])

  const handleSelectColor = (color: string) => {
    setSelectedColor(
      product.colorOptions.find((option) => option.getHexCode() === color),
    )
  }

  const handleSelectStorage = (storage: string) => {
    setSelectedStorage(
      product.storageOptions.find((option) => option.getCapacity() === storage),
    )
  }

  return {
    selectedStorage,
    selectedColor,
    handleSelectColor,
    handleSelectStorage,
  }
}
