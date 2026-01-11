import Navigation from '@/components/Navigation'

export default function Work() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Navigation />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8">
          <div className="text-right flex flex-col justify-end">
            <h2 className="text-4xl font-semibold">WORK</h2>
            <div>view my <a href="https://drive.google.com/file/d/1r2fMy5B16Ri29AJXlN9dhR20HGJFRUZf/view?usp=sharing" target="_blank" className="hover:underline">resumé</a></div>
          </div>
          <div className="text-left text-lg font-[--font-playfair-display]">
            <div className="mb-4">
                <div className="mb-0 text-2xl">software engineer ii <span className="text-base">@ <a href="https://www.collinsaerospace.com" target="_blank" className="hover:underline">Collins Aerospace</a></span></div>
                <div className="ml-4">august 2022 - present</div>
            </div>
            <div className="mb-4">
                <div className="mb-0 text-2xl">software engineer intern <span className="text-base">@ <a href="https://www.collinsaerospace.com" target="_blank" className="hover:underline">Collins Aerospace</a></span></div>
                <div className="ml-4">may 2021 - august 2022</div>
            </div>
            <div className="mb-4">
                <div className="mb-0 text-2xl">software engineer intern <span className="text-base">@ <a href="https://www.collinsaerospace.com" target="_blank" className="hover:underline">Collins Aerospace</a></span></div>
                <div className="ml-4">may 2020 - august 2020</div>
            </div>
            <div className="mb-0">
                <div className="mb-0 text-2xl">software engineer intern <span className="text-base">@ <a href="https://www.medtronic.com" target="_blank" className="hover:underline">Medtronic</a></span></div>
                <div className="ml-4">may 2019 - august 2019</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}