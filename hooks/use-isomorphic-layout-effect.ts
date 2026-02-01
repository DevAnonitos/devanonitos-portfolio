import { useEffect, useLayoutEffect } from 'react'

/**
 * useIsomorphicLayoutEffect
 * A hook that resolves to useLayoutEffect on the client and useEffect on the server.
 * Critical for SSR (Next.js) to avoid hydration mismatches.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
