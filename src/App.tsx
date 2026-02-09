import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

// Import sections
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Products from './sections/Products'
import Features from './sections/Features'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize scroll animations
    const ctx = gsap.context(() => {
      // Smooth scroll behavior
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      gsap.utils.toArray<HTMLElement>('.reveal-left').forEach((elem) => {
        gsap.fromTo(
          elem,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      gsap.utils.toArray<HTMLElement>('.reveal-right').forEach((elem) => {
        gsap.fromTo(
          elem,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      gsap.utils.toArray<HTMLElement>('.reveal-scale').forEach((elem) => {
        gsap.fromTo(
          elem,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef} className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
