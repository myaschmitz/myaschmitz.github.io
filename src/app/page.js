import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-8">
        <div className="text-right flex flex-col justify-end">
          <h2 className="text-xl sm:text-4xl font-semibold">MYA SCHMITZ</h2>
          <p className="text-sm md:text-xl sm:text-lg">Software Engineer.</p>
        </div>

        <div className="text-left text-2xl md:text-4xl sm:text-3xl font-[--font-playfair-display]">
          <nav className="flex flex-col gap-4">
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
