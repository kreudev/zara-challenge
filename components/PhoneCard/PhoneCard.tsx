import { ProductBase } from '@/domain/interfaces'
import styles from './PhoneCard.module.css'
import Link from 'next/link'
export const PhoneCard = ({
  product,
  url = `/product/${product.id}`,
}: {
  product: ProductBase
  url: string
}) => {
  return (
    <article className={styles.cardProduct} key={product.id} role='article'>
      <Link
        className={styles.cardProduct__link}
        href={url}
        aria-label={`View details of ${product.name}`}
      >
        <img
          className={styles.cardProduct__image}
          src={product.imageUrl}
          alt={`${product.brand} ${product.name}`}
          width={330}
          height={260}
          loading='lazy'
          decoding='async'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <div className={styles.cardProduct__info}>
          <span className={styles.cardProduct__info__brand}>
            {product.brand}
          </span>
          <h2 className={styles.cardProduct__info__name}>{product.name}</h2>
          <span
            className={styles.cardProduct__info__price}
            aria-label={`Price: ${product.basePrice.toString()} euros`}
          >
            {product.basePrice.toString()}
          </span>
        </div>
      </Link>
    </article>
  )
}
