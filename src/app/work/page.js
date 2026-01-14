import Navigation from '@/components/Navigation'

export default function Work() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />
      </div>
      <div className="mt-8">
        <div className="max-w-xl mx-auto w-full">
          <div className="mb-6">
            <h2 className="text-4xl font-semibold mb-2">WORK</h2>
            {/* <div className="text-lg">view my <a href="https://drive.google.com/file/d/1r2fMy5B16Ri29AJXlN9dhR20HGJFRUZf/view?usp=sharing" target="_blank" className="font-bold text-link hover:underline">resumé</a></div> */}
          </div>
          <div className="text-lg">
            <div className="mb-4">
                <div>// <span className="mb-0 text-2xl font-bold">software engineer II</span></div>
                <div className="font-[--font-playfair-display]">
                  <div className=""><a href="https://www.collinsaerospace.com" target="_blank" className="text-link font-bold hover:underline">Collins Aerospace</a></div>
                  <div className="ml-4">august 2022 - present</div>
                </div>
            </div>
            <div className="mb-4">
                <div>// <span className="mb-0 text-2xl font-bold">software engineer intern</span></div>
                <div className="font-[--font-playfair-display]">
                  <div className=""><a href="https://www.collinsaerospace.com" target="_blank" className="text-link font-bold hover:underline">Collins Aerospace</a></div>
                  <div className="ml-4">may 2021 - august 2022</div>
                </div>
            </div>
            <div className="mb-4">
                <div>// <span className="mb-0 text-2xl font-bold">software engineer intern</span></div>
                <div className="font-[--font-playfair-display]">
                  <div className=""><a href="https://www.collinsaerospace.com" target="_blank" className="text-link font-bold hover:underline">Collins Aerospace</a></div>
                  <div className="ml-4">may 2020 - august 2020</div>
                </div>
            </div>
            <div className="mb-0">
                <div>// <span className="mb-0 text-2xl font-bold">software engineer intern</span></div>
                <div className="font-[--font-playfair-display]">
                  <div className=""><a href="https://www.medtronic.com" target="_blank" className="text-link font-bold hover:underline">Medtronic</a></div>
                  <div className="ml-4">may 2019 - august 2019</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}