import Link from 'next/link'
import MobileNav from '@/components/MobileNav'

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      {/* Mobile header bar with hamburger */}
      <div className="md:hidden">
        <MobileNav />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center md:text-right flex flex-col justify-end">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">MYA SCHMITZ</h2>
          <p className="text-sm md:text-lg lg:text-xl">Software Engineer.</p>
        </div>

        {/* Desktop navigation - hidden on mobile */}
        <div className="hidden md:block text-left text-2xl md:text-3xl lg:text-4xl font-[--font-playfair-display]">
          <nav className="flex flex-col gap-2 md:gap-4">
            <Link href="/about" className="hover:underline">about</Link>
            <Link href="/work" className="hover:underline">work</Link>
            <Link href="/projects" className="hover:underline">projects</Link>
            <Link href="/contact" className="hover:underline">contact</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
