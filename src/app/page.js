import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-8">
        <div className="text-right flex flex-col justify-end">
          <h2 className="text-3xl font-semibold">MYA SCHMITZ</h2>
          <p className="text-lg">Software Engineer.</p>
        </div>

        <div className="text-left font-[--font-playfair-display]">
          <nav className="flex flex-col gap-4">
            <Link href="/work" className="text-4xl hover:underline">work</Link>
            <Link href="/skills" className="text-4xl hover:underline">skills</Link>
            <Link href="/projects" className="text-4xl hover:underline">projects</Link>
            <Link href="/contact" className="text-4xl hover:underline">contact</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
