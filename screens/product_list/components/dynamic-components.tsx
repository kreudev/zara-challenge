'use client'

import dynamic from 'next/dynamic'
import { ProductBase } from '@/domain/interfaces'

const DynamicSearchBar = dynamic(
    () => import('@/components').then(mod => mod.SearchBar)
)

const DynamicPhoneCard = dynamic(
    () => import('@/components').then(mod => mod.PhoneCard)
)

const DynamicLoadingBar = dynamic(
    () => import('@/components').then(mod => mod.LoadingBar)
)

const SearchBarWithTransform = ({ 
    results, 
    placeholder, 
    value, 
    onChange 
}: { 
    results?: number;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}) => {
    return (
        <DynamicSearchBar
            results={results}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

const PhoneCardWithTransform = ({ 
    product, 
    url 
}: { 
    product: ProductBase;
    url: string;
}) => {
    return <DynamicPhoneCard product={product} url={url} />
}

const LoadingBarWithTransform = ({ 
    loading 
}: { 
    loading: boolean 
}) => {
    return <DynamicLoadingBar loading={loading} />
}

export { 
    SearchBarWithTransform as DynamicSearchBar,
    PhoneCardWithTransform as DynamicPhoneCard,
    LoadingBarWithTransform as DynamicLoadingBar
} 