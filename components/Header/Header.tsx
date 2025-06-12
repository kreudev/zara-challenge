'use client'

import styles from './Header.module.css'
import Link from 'next/link'
import { CartButton } from '../CartButton/CartButton'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
export const Header = () => {
  const pathname = usePathname()
  return (
    <header>
      <div className={styles.headerContainer}>
        <Link href='/' aria-label='Go to home page'>
          <Image src='/logo.png' alt='logo' width={100} height={24} priority />
        </Link>
        {pathname !== '/cart' && (
          <nav role='navigation' aria-label='Shopping cart'>
            <CartButton />
          </nav>
        )}
      </div>
    </header>
  )
}
