'use client'

import { useState, useEffect, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon, CameraIcon } from '@heroicons/react/24/outline'

const navLinks = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/work', label: 'work' },
  { href: '/projects', label: 'projects' },
  { href: '/contact', label: 'contact' },
]

// Custom hook to track dark mode
function useDarkMode() {
  const subscribe = (callback) => {
    const observer = new MutationObserver(callback)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }

  const getSnapshot = () => document.documentElement.classList.contains('dark')
  const getServerSnapshot = () => false

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isDark = useDarkMode()

  const isActive = (path) => pathname === path

  const toggleTheme = () => {
    const newIsDark = !isDark

    try {
      localStorage.setItem('darkMode', newIsDark.toString())
    } catch (e) {
      // Handle potential localStorage errors silently
    }

    if (newIsDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Hamburger button - fixed top right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-current rounded z-50"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <XMarkIcon className="w-8 h-8" />
        ) : (
          <Bars3Icon className="w-8 h-8" />
        )}
      </button>

      {/* Full screen overlay with blur */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-md bg-black/30"
          onClick={closeMenu}
        >
          {/* Navigation links */}
          <nav
            className="flex flex-col items-center gap-8 text-3xl font-[--font-playfair-display]"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:underline focus:outline-none focus-visible:underline transition-colors ${
                  isActive(link.href) ? 'font-bold text-4xl' : ''
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}

            {/* Divider */}
            <div className="w-16 h-px bg-current opacity-30 my-2" />

            {/* Icons row */}
            <div className="flex gap-8">
              {/* Camera/Images link */}
              <Link
                href="/images"
                className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                onClick={closeMenu}
                aria-label="Images"
              >
                <CameraIcon className="w-7 h-7" />
              </Link>

              {/* Theme toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleTheme()
                }}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <SunIcon className="w-7 h-7" />
                ) : (
                  <MoonIcon className="w-7 h-7" />
                )}
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
