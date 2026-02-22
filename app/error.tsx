"use client"

import { ErrorSection } from "@/components/sections"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <ErrorSection error={error} reset={reset} />
    </main>
  )
}