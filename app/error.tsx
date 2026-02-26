'use client'

import { ErrorSection } from '@/components/sections'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className='flex min-h-screen w-full flex-col'>
      <ErrorSection error={error} reset={reset} />
    </main>
  )
}
