import Navigation from '@/components/Navigation'

export default function Contact() {
  return (
    <div className="min-h-screen p-8">
      <div>
        <Navigation />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8">
          <div className="text-right flex flex-col justify-end">
            <h2 className="text-4xl font-semibold">CONTACT</h2>
          </div>
          <div className="text-left text-lg font-[--font-playfair-display]">
            <div className="mb-4">Email:<br />
              <a href="mailto:myalschmitz@gmail.com" className="ml-2 underline hover:font-bold">myalschmitz@gmail.com</a>
            </div>
            <div>Socials:<br />
              <a href="https://www.linkedin.com/in/mya-schmitz/" target="_blank" className="ml-2 underline hover:font-bold">LinkedIn</a>,
              <a href="https://github.com/myaschmitz" target="_blank" className="ml-2 underline hover:font-bold">GitHub</a>,
              <a href="https://flickr.com/people/197895414@N06/" target="_blank" className="ml-2 underline hover:font-bold">Flickr</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}