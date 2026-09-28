import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { SkyScene } from './components/SkyScene'
import { SocialDock } from './components/SocialDock'
import { ProjectSection } from './components/ProjectSection'

function App() {
  return (
    <>
      <main>
        <SkyScene />
        <div className="sky-continuum relative z-10 -mt-px overflow-x-clip">
          {/* Misty top edge for the list rising out of the clouds; SkyScene shows it only while its scroll scene runs */}
          <div
            data-content-fade
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-full hidden h-[35dvh] bg-linear-to-b from-sky-50/0 to-sky-50"
          />
          <ExperienceSection />
          <ProjectSection />
          <Footer />
        </div>
      </main>
      <SocialDock />
    </>
  )
}

export default App
