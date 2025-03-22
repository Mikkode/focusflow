"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simuler un temps de chargement minimum pour assurer que les animations se chargent correctement
    const timer = setTimeout(() => {
      setIsLoading(false)
      document.body.classList.add('content-loaded')
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium text-foreground">Chargement...</p>
      </div>
    </div>
  )
} 