import Navbar from './components/Navbar'
import Hero from './components/Hero'
import {
  Capacity, Solutions, Audiences, HowItWorks, Pricing, Why,
  Network, Industries, About, FAQ, Contact, FinalCTA,
} from './components/Sections'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capacity />
        <Solutions />
        <Audiences />
        <HowItWorks />
        <Pricing />
        <Why />
        <Network />
        <Industries />
        <About />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
