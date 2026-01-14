import Navigation from "@/components/Navigation"

export default function About () {
    return (
        <div className="min-h-screen p-8">
              <div>
                <Navigation />
              </div>
              <div className="mt-8">
                <div className="max-w-xl mx-auto w-full">
                  <div className="mb-4">
                    <h2 className="text-4xl font-semibold mb-2">ABOUT</h2>
                    <p>you can <a href="https://drive.google.com/file/d/1r2fMy5B16Ri29AJXlN9dhR20HGJFRUZf/view?usp=sharing" target="_blank" className="text-link font-bold hover:underline">find my resumé here</a></p>
                  </div>
                  <div className="text-lg">
                    <div className="font-[--font-playfair-display]">
                      <div className="mb-4">
                        <p className="mb-4">
                          I&apos;m a software engineer who learns best by building. I work across the stack, from interfaces to backend services, and care deeply about creating applications that feel intuitive and scale well. My favorite work involves owning features from initial concept through deployment and iteration.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl">// <span className="font-bold">education</span></h2>
                      <div className="font-[--font-playfair-display]">
                        <p>university of wisconsin - madison</p>
                        <p className="text-base ml-4">2018 - 2022</p>
                        <p className="">B.S. computer engineering</p>
                        <p className="">B.S. computer science</p>
                        <p className="">French certificate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}