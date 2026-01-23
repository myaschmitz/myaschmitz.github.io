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
            <div className="mb-5">
                <div className="mb-0 text-xl font-bold">Software Engineer II</div>
                <div className="text-sm mb-2">
                  - <a href="https://www.collinsaerospace.com" target="_blank" className="text-link font-bold">Collins Aerospace</a>
                  <p>August 2022 - Present</p>
                </div>
                <div className="text-lg font-[--font-playfair-display]">
                  <p>Full-stack development for enterprise aviation systems, focusing on AWS IoT Core integration for aircraft communication, Python/Django backend modernization, and CloudWatch monitoring dashboards. I lead version upgrades and frontend refactoring for the Known Crewmember TSA system used across 90+ airports, build InteliSight monitoring infrastructure for ground portal uptime, and manage .NET service migrations through CI/CD pipelines.</p>
                </div>
            </div>
            <div className="mb-5">
                <div className="mb-0 text-xl font-bold">Software Engineer Intern</div>
                <div className="text-sm mb-2">
                  - <a href="https://www.collinsaerospace.com" target="_blank" className="text-link font-bold">Collins Aerospace</a>
                  <p>May 2021 - August 2022</p>
                </div>
                <div className="text-lg font-[--font-playfair-display]">
                  <p>Contributed to a React/Flask application built from scratch, working on both frontend features and backend API development. I created automated test suites using Robot framework to validate system behavior and participated in Agile workflows including code reviews and sprint planning.</p>
                </div>
            </div>
            <div className="mb-5">
                <div className="mb-0 text-xl font-bold">Software Engineer Intern</div>
                <div className="text-sm mb-2">
                  - <a href="https://www.collinsaerospace.com" target="_blank" className="text-link font-bold">Collins Aerospace</a>
                  <p>May 2020 - August 2020</p>
                </div>
                <div className="text-lg font-[--font-playfair-display]">
                  <p>Focused on frontend development for a .NET web application, implementing UI improvements and responsive design across multiple pages. The work involved ensuring consistent user experience across different browsers and screen sizes.</p>
                </div>
            </div>
            <div className="mb-0">
                <div className="mb-0 text-xl font-bold">Software Engineer Intern</div>
                <div className="text-sm mb-2">
                  - <a href="https://www.medtronic.com" target="_blank" className="text-link font-bold">Medtronic</a>
                  <p>May 2019 - August 2019</p>
                </div>
                <div className="text-lg font-[--font-playfair-display]">
                  <p>Built an internal tool for managing translation workflows across thousands of string files. The application replaced an Excel-based process with a threaded commenting system, streamlining communication between developers and translators.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}