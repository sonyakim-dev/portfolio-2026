import { Footer } from './components/Footer'
import { SkyScene } from './components/SkyScene'
import { SocialDock } from './components/SocialDock'
import { WorkSection } from './components/WorkSection'

function App() {
  return (
    <>
      <main>
        <SkyScene />
        <div className="sky-continuum relative z-10 -mt-px overflow-x-clip">
          {/* Misty top edge for the list rising out of the clouds; SkyScene shows it only while its scroll scene runs */}
          <div
            data-work-fade
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-full hidden h-[35dvh] bg-linear-to-b from-sky-50/0 to-sky-50"
          />
          <WorkSection />
          <Footer />
        </div>
      </main>
      <SocialDock />
    </>
  )
}

export default App
