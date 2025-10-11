import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Calculator from '../components/Calculator'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Calculator />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}