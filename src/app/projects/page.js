import Navigation from '@/components/Navigation'
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline"

export default function Projects() {
  return (
    <div className="min-h-screen p-8 page-content">
      <div>
        <Navigation />
      </div>
      <div className="mt-2 md:mt-8">
        <div className="max-w-xl mx-auto w-full">
          <div className="mb-6">
            <h2 className="text-4xl font-semibold mb-2">PROJECTS</h2>
          </div>
          <div className="text-lg">
            <div className="mb-4">
              <a href="https://climbdb.app" target="_blank" rel="noopener noreferrer" className="text-link font-bold">ClimbDB</a>
              <p className="font-bold text-sm text-cape-cod-800 dark:text-cape-cod-200">- SvelteKit, Firebase</p>
              <div className="font-[--font-playfair-display]">
                <p>Community-powered database for climbing gyms across the globe.</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-bold">recipehub</p>
              <p className="font-bold text-sm text-cape-cod-800 dark:text-cape-cod-200">- Next.js, Supabase</p>
              <div className="font-[--font-playfair-display]">
                <p>Recipe database for home cooks to organize their favorite recipes.</p>
              </div>
            </div>
            <div>
              <div className="mb-0 flex flex-row items-center gap-2">
                <a href="/solar-system" target="_blank" rel="noopener noreferrer" className="text-link font-bold">Solar System</a><a href="https://github.com/myaschmitz/cs559-wbfinal-myaschmitz" target="_blank" className="hover:cursor-pointer"><CodeBracketSquareIcon className="h-7 w-7 hover:text-cape-cod-500 dark:hover:text-cape-cod-300" /></a>
              </div>
              <p className="font-bold text-sm text-cape-cod-800 dark:text-cape-cod-200">- Three.js</p>
              <div className="font-[--font-playfair-display]">
                <p>3D solar system simulation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}