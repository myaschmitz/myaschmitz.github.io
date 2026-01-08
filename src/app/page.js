import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-8">
        <div className="text-right flex flex-col justify-end">
          <h2 className="text-2xl font-semibold">MYA SCHMITZ</h2>
          <p>Software Engineer.</p>
        </div>

        <div className="text-left">
          <nav className="flex flex-col gap-4">
            <Link href="/work" className="text-2xl hover:underline font-[family-name:var(--font-playfair-display)]">work</Link>
            <Link href="/skills" className="text-2xl hover:underline font-[family-name:var(--font-playfair-display)]">skills</Link>
            <Link href="/projects" className="text-2xl hover:underline font-[family-name:var(--font-playfair-display)]">projects</Link>
            <Link href="/contact" className="text-2xl hover:underline font-[family-name:var(--font-playfair-display)]">contact</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
