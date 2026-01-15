import Navigation from '@/components/Navigation'
import { CodeBracketIcon, CodeBracketSquareIcon } from "@heroicons/react/24/outline"

export default function Projects() {
  return (
    <div className="min-h-screen p-8">
      <div>
        <Navigation />
      </div>
      <div className="mt-8">
        <div className="max-w-xl mx-auto w-full">
          <div className="mb-6">
            <h2 className="text-4xl font-semibold mb-2">PROJECTS</h2>
          </div>
          <div className="text-lg">
            <div className="mb-4">
              <p className="text-xl">// <a href="https://climbdb.app" target="_blank" rel="noopener noreferrer" className="text-link font-bold hover:underline">climbdb</a></p>
              <div className="font-[--font-playfair-display]">
                <p className="text-base font-bold text-cape-cod-800 dark:text-cape-cod-200">SvelteKit, Firebase</p>
                <p>community-powered database for climbing gyms across the globe.</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xl">// <span className="font-bold">recipehub</span></p>
              <div className="font-[--font-playfair-display]">
                <p className="text-base font-bold text-cape-cod-800 dark:text-cape-cod-200">Next.js, Supabase</p>
                <p>recipe database for home cooks to organize their favorite recipes.</p>
              </div>
            </div>
            <div className="mb-0">
              <p className="text-xl flex flex-row gap-2 align-bottom">// <a href="/solar-system" target="_blank" rel="noopener noreferrer" className="text-link font-bold hover:underline">solar system</a><a href="https://github.com/myaschmitz/cs559-wbfinal-myaschmitz" target="_blank" className="hover:cursor-pointer"><CodeBracketSquareIcon className="h-7 w-7 hover:text-cape-cod-500 dark:hover:text-cape-cod-300" /></a></p>
              <div className="font-[--font-playfair-display]">
                <p className="text-base font-bold text-cape-cod-800 dark:text-cape-cod-200">Three.js</p>
                <p>3d solar system simulation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}