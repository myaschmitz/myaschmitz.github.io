import Navigation from "@/components/Navigation"
import Image from "next/image"

export default function About () {
    return (
        <div className="min-h-screen p-8 page-content">
              <div>
                <Navigation />
              </div>
              <div className="mt-2 md:mt-8">
                <div className="max-w-xl mx-auto w-full">
                  <div className="mb-6 w-full flex justify-center md:justify-center mobile-center-override">
                    <Image
                      src="/mya-schmitz.jpeg"
                      alt="Mya Schmitz"
                      width={150}
                      height={150}
                      className="rounded-full object-cover w-32 h-32 sm:w-36 sm:h-36"
                    />
                  </div>
                  <div className="mb-2">
                    <h2 className="text-4xl font-semibold mb-2">ABOUT</h2>
                    <p className="page-header">You can <a href="https://drive.google.com/file/d/1r2fMy5B16Ri29AJXlN9dhR20HGJFRUZf/view?usp=sharing" target="_blank" className="text-link font-bold">find my resumé here</a></p>
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
                      <h2 className="text-2xl font-bold">Education</h2>
                      <div>
                        <a href="https://www.wisc.edu/" target="_blank" className="text-link font-bold">University of Wisconsin - Madison</a>
                        <div className="font-[--font-playfair-display] mb-2">
                          <p className="text-base text-cape-cod-800 dark:text-cape-cod-200">2018 - 2022</p>
                          <p className="">B.S. Computer Engineering and Computer Science</p>
                          <p className="">French Certificate</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold">Relevant coursework</p>
                          <p className="font-[--font-playfair-display]">Algorithms, Data Structures, Operating Systems, Computer Architecture, Artificial Intelligence</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}