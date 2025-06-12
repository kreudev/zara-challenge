import { ProductDetailPage } from '@/screens';
import React from 'react'

const ProductDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = React.use(params)
    return (
        <ProductDetailPage id={resolvedParams.id} />
    );
}

export default ProductDetail;