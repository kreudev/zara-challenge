'use client'

import { useCart } from '@/context/CartContext'
import { ProductCardCart } from '@/components'
import { Footer } from '@/screens/cart/components/footer/Footer'
import styles from './CartPage.module.css'
export const CartPage = () => {
  const { cartItems } = useCart()
  return (
    <main
      className={`container ${styles.cartContainer}`}
      aria-live='assertive'
    >
      <h1 className={styles.cartTitle}>
        Cart ({cartItems.reduce((acc, item) => acc + (item.quantity ?? 0), 0)})
      </h1>
      <section className='grid-layout grid-layout__cart'>
        {cartItems.map((item, index) => (
          <ProductCardCart key={`${item.id}-${index}`} product={item} />
        ))}
      </section>
      <Footer cartItems={cartItems} />
    </main>
  )
}
