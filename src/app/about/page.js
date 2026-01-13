import Navigation from "@/components/Navigation"

export default function About () {
    return (
        <div className="min-h-screen p-8">
              <div>
                <Navigation />
              </div>
              <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-4xl mx-auto w-full">
                  <div className="grid grid-cols-2 gap-8">
                  <div className="text-right flex flex-col justify-start">
                    <h2 className="text-4xl font-semibold">ABOUT</h2>
                  </div>
                  <div className="text-left text-lg font-[--font-playfair-display]">
                    About me
                  </div>
                </div>
                </div>
              </div>
            </div>
    )
}