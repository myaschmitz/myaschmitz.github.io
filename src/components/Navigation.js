import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="flex gap-6 mb-8 items-center justify-center">
      <Link href="/" className="text-lg hover:underline font-[family-name:var(--font-playfair-display)]">about</Link>
      <Link href="/work" className="text-lg hover:underline font-[family-name:var(--font-playfair-display)]">work</Link>
      <Link href="/skills" className="text-lg hover:underline font-[family-name:var(--font-playfair-display)]">skills</Link>
      <Link href="/projects" className="text-lg hover:underline font-[family-name:var(--font-playfair-display)]">projects</Link>
      <Link href="/contact" className="text-lg hover:underline font-[family-name:var(--font-playfair-display)]">contact</Link>
    </nav>
  )
}
