'use client'

import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Only run on client side - intentionally using setState in effect for hydration safety
  useEffect(() => {
    setMounted(true)
    const darkMode = document.documentElement.classList.contains('dark')
    setIsDark(darkMode)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem('darkMode', newIsDark.toString())

    if (newIsDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Force a check of the CSS variables
    const bg = getComputedStyle(document.body).backgroundColor
    const color = getComputedStyle(document.body).color
  }

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 p-2 rounded-lg hover:cursor-pointer transition-colors z-50"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  )
}
