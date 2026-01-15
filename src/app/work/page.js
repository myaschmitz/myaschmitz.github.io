import Navigation from '@/components/Navigation'

export default function Work() {
  return (
    <div className="min-h-screen p-8 page-content">
      <div className="max-w-4xl mx-auto">
        <Navigation />
      </div>
      <div className="mt-2 md:mt-8">
        <div className="max-w-xl mx-auto w-full">
          <div className="mb-6">
            <h2 className="text-4xl font-semibold mb-2">WORK</h2>
            {/* <div className="text-lg">view my <a href="https://drive.google.com/file/d/1r2fMy5B16Ri29AJXlN9dhR20HGJFRUZf/view?usp=sharing" target="_blank" className="font-bold text-link">resumé</a></div> */}
          </div>
          <div className="">
            <div className="mb-4">
                <div className="mb-0 text-xl font-bold">Software Engineer II</div>
                <div className="font-[--font-playfair-display]">
                  <div className=""><a href="https://www.collinsaerospace.com" target="_blank" className="text-link font-bold">Collins Aerospace</a></div>
                  <div className="ml-4">August 2022 - Present</div>
                </div>
            </div>
            <div className="mb-4">
                <div className="mb-0 text-xl font-bold">Software Engineer Intern</div>
                <div className="font-[--font-playfair-display]">
                  <div className=""><a href="https://www.collinsaerospace.com" target="_blank" className="text-link font-bold">Collins Aerospace</a></div>
                  <div className="ml-4">May 2021 - August 2022</div>
                </div>
            </div>
            <div className="mb-4">
                <div className="mb-0 text-xl font-bold">Software Engineer Intern</div>
                <div className="font-[--font-playfair-display]">
                  <div className=""><a href="https://www.collinsaerospace.com" target="_blank" className="text-link font-bold">Collins Aerospace</a></div>
                  <div className="ml-4">May 2020 - August 2020</div>
                </div>
            </div>
            <div className="mb-0">
                <div className="mb-0 text-xl font-bold">Software Engineer Intern</div>
                <div className="font-[--font-playfair-display]">
                  <div className=""><a href="https://www.medtronic.com" target="_blank" className="text-link font-bold">Medtronic</a></div>
                  <div className="ml-4">May 2019 - August 2019</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}