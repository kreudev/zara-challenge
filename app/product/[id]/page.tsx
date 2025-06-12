import { ProductDetailPage } from '@/screens';
import React from 'react'

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }){
    const resolvedParams = React.use(params)
    return (
        <ProductDetailPage id={resolvedParams.id} />
    );
}