import Link from 'next/link'
import { Product } from '@/domain/interfaces'
import styles from './Footer.module.css'
export const Footer = ({
  cartItems,
}: {
  cartItems: (Product & { quantity?: number })[]
}) => {
  return (
    <footer className={styles.footerCart}>
      <Link
        className={`${styles.footerCart__link} ${styles.footerCart__link_secondary}`}
        href='/'
      >
        Continue Shopping
      </Link>
      {cartItems.length > 0 && (
        <>
          <div className={styles.footerCart__total}>
            <span>Total </span>
            <span>
              {cartItems.reduce(
                (acc, item) =>
                  acc + (item.quantity ?? 0) * (item.basePrice.getValue() ?? 0),
                0,
              )}{' '}
              EUR
            </span>
          </div>
          <Link className={styles.footerCart__link} href='#'>
            Pay
          </Link>
        </>
      )}
    </footer>
  )
}
