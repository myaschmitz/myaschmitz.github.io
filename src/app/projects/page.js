import Navigation from '@/components/Navigation'

export default function Projects() {
  return (
    <div className="min-h-screen p-8">
      <div>
        <Navigation />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto w-full">
          <div className="grid grid-cols-2 gap-8">
          <div className="text-right flex flex-col justify-start">
            <h2 className="text-4xl font-semibold">PROJECTS</h2>
          </div>
          <div className="text-left text-lg font-[--font-playfair-display]">
            <div className="mb-4">
              <div className="font-bold underline"><a href="https://climbdb.app" target="_blank" rel="noopener noreferrer">climbdb</a></div>
              <div>community-powered database for climbing gyms across the globe.</div>
            </div>
            <div className="mb-4">
              <div className="font-bold underline">recipehub</div>
              <div>recipe database for home cooks to organize their favorite recipes.</div>
            </div>
            <div className="mb-0">
              <div className="font-bold underline"><a href="/solar-system" target="_blank" rel="noopener noreferrer">solar system</a></div>
              <div>3d solar system simulation built using three.js.</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}