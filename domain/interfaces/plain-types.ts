import { Product, ProductBase } from '../interfaces'

export type PlainProductBase = Omit<ProductBase, 'basePrice'> & {
    basePrice: {
        amount: number;
        currency: string;
    };
};

export type PlainProduct = Omit<Product, 'basePrice' | 'colorOptions' | 'storageOptions' | 'similarProducts'> & {
    basePrice: {
        amount: number;
        currency: string;
    };
    colorOptions: {
        name: string;
        hexCode: string;
        imageUrl: string;
    }[];
    storageOptions: {
        capacity: string;
        price: {
            amount: number;
            currency: string;
        };
    }[];
    similarProducts: PlainProductBase[];
}; 