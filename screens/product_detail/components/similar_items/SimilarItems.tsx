import styles from './SimilarItems.module.css'
import { useScroll } from '@/hooks/useScroll'

export const SimilarItems = ({ children }: { children: React.ReactNode }) => {
  const { containerRef, scrollPercentage, scrollWidth, clientWidth } =
    useScroll()

  return (
    <section className={styles.item__container} aria-label='SIMILAR ITEMS'>
      <h2 className={styles.item__title}>SIMILAR ITEMS</h2>
      <div className={styles.item} ref={containerRef}>
        <div className={styles.item__content}>{children}</div>
      </div>
      <div className={styles.item__scroll}>
        <div
          style={{
            width: `${(clientWidth * 100) / scrollWidth}%`,
            transform: `translateX(${scrollPercentage}%)`,
          }}
          className={styles.item__scrollBar}
        ></div>
      </div>
    </section>
  )
}
