import { ProductDetailPage } from '@/screens';
import React from 'react'

const ProductDetail = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    return (
        <ProductDetailPage id={id} />
    );
}

export default ProductDetail;