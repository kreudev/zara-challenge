import { Product } from '@/domain/interfaces'
import styles from './ProductInfoHeader.module.css'
import { useProductSelection } from '@/hooks/useProductSelection'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'
export const ProductInfoHeader = ({ product }: { product: Product }) => {
  const {
    selectedStorage,
    selectedColor,
    handleSelectColor,
    handleSelectStorage,
  } = useProductSelection(product)

  const { addItemToCart } = useCart()

  return (
    <>
      <div className={styles.productInfoHeader__backLink}>
        <Link href='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='6'
            height='10'
            viewBox='0 0 6 10'
            fill='none'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M4.82328 0.646484L5.53039 1.35359L1.88394 5.00004L5.53039 8.64648L4.82328 9.35359L0.469727 5.00004L4.82328 0.646484Z'
              fill='black'
            />
          </svg>
          Back
        </Link>
      </div>
      <section className={styles.productInfoHeader__container}>
        <div className={styles.productInfoHeader__image}>
          <img
            src={
              selectedColor?.getImageUrl() ??
              product.colorOptions[0].getImageUrl()
            }
            alt={product.name}
            width={510}
            height={630}
            loading='eager'
            fetchPriority='high'
            decoding='async'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>
        <div className={styles.productInfoHeader__info}>
          <div className={styles.productInfoHeader__info__name}>
            <h1 className={styles.productInfoHeader__info__name__title}>
              {product.name}
            </h1>
            <p className={styles.productInfoHeader__info__price}>
              From{' '}
              {selectedStorage?.getPrice().toString() ??
                product.storageOptions[0].getPrice().toString()}
            </p>
          </div>

          <div className={styles.productInfoHeader__storage}>
            <h2 className={styles.productInfoHeader__storage__title}>
              Storage - How much space do you need?
            </h2>
            <div className={styles.storageOptions__container}>
              {product.storageOptions.map((storage) => (
                <button
                  key={storage.getCapacity()}
                  className={`${styles.storageOption} ${
                    selectedStorage?.getCapacity() === storage.getCapacity()
                      ? styles.selected
                      : ''
                  }`}
                  onClick={() => handleSelectStorage(storage.getCapacity())}
                >
                  <span>{storage.getCapacity()}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.productInfoHeader__colors}>
            <h2 className={styles.productInfoHeader__colors__title}>
              color. pick your favourite.
            </h2>
            <div className={styles.colorOptions__container}>
              {product.colorOptions.map((color) => (
                <button
                  role='button'
                  aria-label={color.getName()}
                  key={color.getHexCode()}
                  className={`${styles.colorOption} ${
                    selectedColor?.getHexCode() === color.getHexCode()
                      ? styles.selected
                      : ''
                  }`}
                  style={{ backgroundColor: color.getHexCode() }}
                  title={color.getName()}
                  onClick={() => handleSelectColor(color.getHexCode())}
                />
              ))}
            </div>
            <div className={styles.productInfoHeader__colors__description}>
              <p className={styles.productInfoHeader__colors__description__text}>
                {selectedColor?.getName() ??
                  product.colorOptions[0].getName()}
              </p>
            </div>
          </div>

          <button
            aria-label='Add to cart'
            disabled={!selectedStorage || !selectedColor}
            className={`${styles.productInfoHeader__addButton} ${
              !selectedStorage || !selectedColor
                ? styles.disabled
                : ''
            }`}
            onClick={() =>
              addItemToCart({
                ...product,
                colorOptions: [selectedColor ?? product.colorOptions[0]],
                storageOptions: [selectedStorage ?? product.storageOptions[0]],
              })
            }
          >
            Add
          </button>
        </div>
      </section>
    </>
  )
}
