import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Home sections
import Hero        from './components/Hero'
import Marquee     from './components/Marquee'
import Stats       from './components/Stats'
import About       from './components/About'
import Programs    from './components/Programs'
import Noah        from './components/Noah'
import Process     from './components/Process'
import Camps       from './components/Camps'
import Gallery     from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTABanner   from './components/CTABanner'
import Contact     from './components/Contact'

// Pages
import AboutPage       from './pages/About'
import TrainingPage    from './pages/Training'
import CampsPage       from './pages/Camps'
import ContactPage     from './pages/Contact'
import BookSessionPage from './pages/BookSession'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Programs />
      <Noah />
      <Process />
      <Camps />
      <Gallery />
      <Testimonials />
      <CTABanner />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"             element={<HomePage />} />
        <Route path="/about"        element={<AboutPage />} />
        <Route path="/training"     element={<TrainingPage />} />
        <Route path="/camps"        element={<CampsPage />} />
        <Route path="/contact"      element={<ContactPage />} />
        <Route path="/book-session" element={<BookSessionPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
