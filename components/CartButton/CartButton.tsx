import { Icon } from '@/icons/Icon'
import styles from './CartButton.module.css'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'
export const CartButton = () => {
  const { cartItems } = useCart()
  const numberOfItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity ?? 0),
    0,
  )
  return (
    <Link
      href='/cart'
      className={styles.cartButtonContainer}
      aria-label='Go to shopping cart'
    >
      {numberOfItems > 0 ? (
        <Icon name='bag-active' width={13} height={16} />
      ) : (
        <Icon name='bag' width={13} height={16} />
      )}
      <span>{numberOfItems}</span>
    </Link>
  )
}
