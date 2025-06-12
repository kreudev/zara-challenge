import { Product } from '@/domain/entities/Product'
import styles from './Specifications.module.css'

export const Specifications = ({ product }: { product: Product }) => {
  return (
    <section className={styles.productDetail__specs}>
      <h2 className={styles.productDetail__specs__title}>SPECIFICATIONS</h2>
      <div className={styles.specsGrid}>
        <div className={styles.specItem}>
          <span>brand</span>
          <span>{product.brand}</span>
        </div>
        <div className={styles.specItem}>
          <span>Name</span>
          <span>{product.name}</span>
        </div>
        <div className={styles.specItem}>
          <span>Description</span>
          <span>{product.description}</span>
        </div>
        <div className={styles.specItem}>
          <span>Screen</span>
          <span>{product.specs.screen}</span>
        </div>
        <div className={styles.specItem}>
          <span>Resolution</span>
          <span>{product.specs.resolution}</span>
        </div>
        <div className={styles.specItem}>
          <span>Processor</span>
          <span>{product.specs.processor}</span>
        </div>
        <div className={styles.specItem}>
          <span>Main Camera</span>
          <span>{product.specs.mainCamera}</span>
        </div>
        <div className={styles.specItem}>
          <span>Selfie Camera</span>
          <span>{product.specs.selfieCamera}</span>
        </div>
        <div className={styles.specItem}>
          <span>Battery</span>
          <span>{product.specs.battery}</span>
        </div>
        <div className={styles.specItem}>
          <span>OS</span>
          <span>{product.specs.os}</span>
        </div>
        <div className={styles.specItem}>
          <span>Screen Refresh Rate</span>
          <span>{product.specs.screenRefreshRate}</span>
        </div>
      </div>
    </section>
  )
}
