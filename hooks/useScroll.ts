import { useRef, useEffect, useState } from 'react'

export const useScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const scrollWidth = container.clientWidth
      const percentage = (scrollLeft / scrollWidth) * 100
      setScrollPercentage(percentage)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    containerRef,
    scrollPercentage,
    scrollWidth: containerRef.current?.scrollWidth || 0,
    clientWidth: containerRef.current?.clientWidth || 0,
  }
}
