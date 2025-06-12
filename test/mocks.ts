import { Price, Color, Storage } from '@/domain/value-objects'

export const mockProduct = {
  id: '1',
  name: 'iPhone 13 Pro',
  imageUrl: 'https://example.com/image.jpg',
  brand: 'Apple',
  basePrice: Price.create(100),
}

export const mockProductList = [mockProduct, mockProduct, mockProduct]

export const mockCartItems = [
  {
    id: '1',
    name: 'iPhone 13 Pro',
    basePrice: Price.create(100),
    imageUrl: 'https://example.com/image.jpg',
    brand: 'Apple',
    description: 'Test Description',
    rating: 4.5,
    specs: {
      screen: '6.1"',
      resolution: '1170 x 2532',
      processor: 'A15 Bionic',
      mainCamera: '24MP',
      selfieCamera: '12MP',
      battery: '3240mAh',
      os: 'iOS 15',
      screenRefreshRate: '60Hz',
    },
    colorOptions: [
      Color.create('Color 1', '#000000', 'https://example.com/image.jpg'),
      Color.create('Color 2', '#ffffff', 'https://example.com/image2.jpg'),
    ],
    storageOptions: [
      Storage.create('256', Price.create(100)),
      Storage.create('512', Price.create(150)),
    ],
    similarProducts: [mockProduct, mockProduct, mockProduct],
    quantity: 1,
  },
]

export const mockUseCart = () => ({
  cartItems: mockCartItems,
  addItemToCart: jest.fn(),
  removeItemFromCart: jest.fn(),
  clearCart: jest.fn(),
})
