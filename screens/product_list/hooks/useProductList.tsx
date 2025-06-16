import { ProductBase } from '@/domain/interfaces'
import { useDebounce } from '@/hooks/useDebounce'
import { useFetch } from '@/hooks/useFetch'
import { getProducts } from '@/services/use-cases/getProducts'
import React, { useEffect, useState } from 'react'
import { PlainProductBase } from '../ProductListPage'
import { Price } from '@/domain/value-objects'

const useProductList = (initialProducts: PlainProductBase[]) => {

    const toProductBase = (plain: PlainProductBase): ProductBase => ({
        ...plain,
        basePrice: Price.create(plain.basePrice.amount, plain.basePrice.currency)
    });
        
    const isPlainProductBase = (product: ProductBase | PlainProductBase): product is PlainProductBase => {
        return typeof product.basePrice === 'object' && 'amount' in product.basePrice;
    };
        
    const toPlainProductBase = (product: ProductBase | PlainProductBase): PlainProductBase => {
        if (isPlainProductBase(product)) {
            return product;
        }
        return {
            ...product,
            basePrice: {
            amount: product.basePrice.getValue(),
            currency: product.basePrice.getCurrency()
            }
        };
    };

    const LIMIT_OF_PRODUCTS = 21
    const OFFSET_OF_PRODUCTS = 0
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState(initialProducts);
    const debouncedSearch = useDebounce(search, 300)
    
    const handleSearch = (value: string) => {
        setSearch(value)
    }

    const { data, loading, error } = useFetch<ProductBase[]>(
        () =>
        debouncedSearch ?
        getProducts({
            options: {
            search: debouncedSearch,
            limit: LIMIT_OF_PRODUCTS,
            offset: OFFSET_OF_PRODUCTS,
            },
        }) : Promise.resolve(initialProducts.map(toProductBase)),
        debouncedSearch,
    )

    useEffect(() => {
        if (debouncedSearch && data) {
        setProducts(data.map(toPlainProductBase));
        } else if (!debouncedSearch) {
        setProducts(initialProducts);
        }
    }, [data, debouncedSearch, initialProducts]);

    return {
        products,
        search,
        handleSearch,
        toProductBase,
        loading,
        error
    };
}

export default useProductList;