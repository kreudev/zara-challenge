import styles from './CartPage.module.css'
import { CartContent } from './components/dynamic-components'

export const CartPage = () => {
  return (
    <main
      className={`container ${styles.cartContainer}`}
      aria-live='assertive'
    >
      <CartContent />
    </main>
  )
}
