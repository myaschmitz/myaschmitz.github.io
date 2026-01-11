'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  return (
    <nav className="flex gap-6 items-baseline justify-center text-lg font-[--font-playfair-display]">
      <Link
        href="/"
        className={`hover:underline ${isActive('/') ? 'font-bold text-2xl' : ''}`}
      >
        home
      </Link>
      <Link
        href="/about"
        className={`hover:underline ${isActive('/about') ? 'font-bold text-2xl' : ''}`}
      >
        about
      </Link>
      <Link
        href="/work"
        className={`hover:underline ${isActive('/work') ? 'font-bold text-2xl' : ''}`}
      >
        work
      </Link>
      <Link
        href="/projects"
        className={`hover:underline ${isActive('/projects') ? 'font-bold text-2xl' : ''}`}
      >
        projects
      </Link>
      <Link
        href="/contact"
        className={`hover:underline ${isActive('/contact') ? 'font-bold text-2xl' : ''}`}
      >
        contact
      </Link>
    </nav>
  )
}
