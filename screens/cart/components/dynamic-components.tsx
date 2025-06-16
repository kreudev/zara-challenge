'use client'

import dynamic from 'next/dynamic'
import { useCart } from '@/context/CartContext'

const DynamicProductCardCart = dynamic(
    () => import('@/components').then(mod => mod.ProductCardCart)
)

const DynamicFooter = dynamic(
    () => import('@/screens/cart/components/footer/Footer').then(mod => mod.Footer)
)

export const CartContent = () => {
    const { cartItems } = useCart()
    const count = cartItems.reduce((acc, item) => acc + (item.quantity ?? 0), 0)

    return (
        <>
            <h1 className="cartTitle">
                Cart ({count})
            </h1>
            <section className='grid-layout grid-layout__cart'>
                {cartItems.map((item, index) => (
                    <DynamicProductCardCart key={`${item.id}-${index}`} product={item} />
                ))}
            </section>
            <DynamicFooter cartItems={cartItems} />
        </>
    )
} 