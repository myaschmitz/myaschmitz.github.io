'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  return (
    <nav className="flex gap-6 items-baseline justify-center text-lg">
      <Link
        href="/"
        className={`hover:underline font-(family-name:--font-playfair-display) ${isActive('/') ? 'italic font-bold text-2xl' : ''}`}
      >
        home
      </Link>
      <Link
        href="/work"
        className={`hover:underline font-(family-name:--font-playfair-display) ${isActive('/work') ? ' font-bold text-2xl' : ''}`}
      >
        work
      </Link>
      <Link
        href="/skills"
        className={`hover:underline font-(family-name:--font-playfair-display) ${isActive('/skills') ? ' font-bold text-2xl' : ''}`}
      >
        skills
      </Link>
      <Link
        href="/projects"
        className={`hover:underline font-(family-name:--font-playfair-display) ${isActive('/projects') ? ' font-bold text-2xl' : ''}`}
      >
        projects
      </Link>
      <Link
        href="/contact"
        className={`hover:underline font-(family-name:--font-playfair-display) ${isActive('/contact') ? ' font-bold text-2xl' : ''}`}
      >
        contact
      </Link>
    </nav>
  )
}
