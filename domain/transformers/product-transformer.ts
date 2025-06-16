import { Product } from '../interfaces'
import { PlainProduct, PlainProductBase } from '../interfaces/plain-types'
import { Price, Color, Storage } from '../value-objects'

export const toProduct = (plain: PlainProduct): Product => ({
    ...plain,
    basePrice: Price.create(plain.basePrice.amount, plain.basePrice.currency),
    colorOptions: plain.colorOptions.map((color) => 
        Color.create(color.name, color.hexCode, color.imageUrl)
    ),
    storageOptions: plain.storageOptions.map((storage) => 
        Storage.create(storage.capacity, Price.create(storage.price.amount, storage.price.currency))
    ),
    similarProducts: plain.similarProducts.map((similar) => ({
        ...similar,
        basePrice: Price.create(similar.basePrice.amount, similar.basePrice.currency),
    })),
});

export const toPlainProduct = (product: Product): PlainProduct => ({
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
}); 