import { useState, useEffect } from 'react'

/**
 * useScrollPosition
 * Tracks the current scroll position of the window.
 * Useful for sticky headers, scroll-to-top buttons, and scroll animations.
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}
