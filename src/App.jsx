import { ResumeCard } from './content/ResumeCard/ResumeCard'
import { Navigation } from './utils/Navigation/Navigation'
import { Footer } from './utils/Footer/Footer'
import './App.css'
import { SocialLinks } from './utils/Social/SocialLinks'
import { WrapperContent } from './content/WrapperContent/WrapperContent'
import { useMouseBackground } from './hooks/useMouseBackground'

export function App () {
  useMouseBackground()

  return (
    <>
      <section className='main-container'>
        <header className='basic-info-header'>
          <ResumeCard />
          <Navigation />
          <SocialLinks />
        </header>
        <main className='content-section'>
          <WrapperContent />
          <Footer />
        </main>
      </section>
    </>
  )
}
