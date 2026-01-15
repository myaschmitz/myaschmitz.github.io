'use client'

import ContactForm from "@/components/ContactForm"
import Navigation from '@/components/Navigation'

export default function Contact() {
  return (
    <div className="min-h-screen p-8 page-content">
      <div>
        <Navigation />
      </div>
      <div className="mt-2 md:mt-8">
        <div className="max-w-xl mx-auto w-full">
          <div className="mb-6">
            <h2 className="text-4xl font-semibold mb-2">CONTACT</h2>
            <div>you can reach me through my email, LinkedIn, or the contact form below!</div>
          </div>
          <div className="text-lg font-[--font-playfair-display] flex flex-row flex-wrap gap-2 sm:gap-10 md:gap-12 mb-4">
            <div className="mb-4">email<br />
              <a href="mailto:myalschmitz@gmail.com" className="ml-2 font-bold text-link hover:underline">myalschmitz@gmail.com</a>
            </div>
            <div className="mb-4">
              socials
              <br />
              <a href="https://www.linkedin.com/in/mya-schmitz/" target="_blank" className="ml-2 font-bold text-link hover:underline">LinkedIn</a>,
              <a href="https://github.com/myaschmitz" target="_blank" className="ml-2 font-bold text-link hover:underline">GitHub</a>,
              <a href="https://flickr.com/people/197895414@N06/" target="_blank" className="ml-2 font-bold text-link hover:underline">Flickr</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}