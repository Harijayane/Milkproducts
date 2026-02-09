import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const shapesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Text animations
      tl.fromTo(
        '.hero-title span',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 }
      )
        .fromTo(
          '.hero-subtitle',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          '.hero-image',
          { scale: 0.8, opacity: 0, rotateY: 10 },
          { scale: 1, opacity: 1, rotateY: 0, duration: 1.2, ease: 'back.out(1.2)' },
          '-=1'
        )
        .fromTo(
          '.floating-shape',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(2)' },
          '-=0.8'
        )

      // Parallax on scroll
      gsap.to('.hero-image', {
        y: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to('.floating-shape', {
        y: -50,
        rotation: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToProducts = () => {
    const element = document.querySelector('#products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffbee] via-[#fff9e0] to-[#f6f8ac] opacity-60" />

      {/* Floating shapes */}
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none">
        {/* Yellow blob */}
        <div className="floating-shape absolute top-20 left-10 w-32 h-32 bg-yellow blob-shape opacity-60 animate-float" />
        
        {/* Orange blob */}
        <div className="floating-shape absolute top-40 right-20 w-24 h-24 bg-orange blob-shape-2 opacity-50 animate-float-slow" />
        
        {/* Small circles */}
        <div className="floating-shape absolute bottom-40 left-20 w-16 h-16 bg-light-yellow rounded-full opacity-70 animate-pulse-soft" />
        <div className="floating-shape absolute top-1/3 right-1/4 w-12 h-12 bg-yellow rounded-full opacity-50 animate-float" />
        <div className="floating-shape absolute bottom-20 right-10 w-20 h-20 bg-orange blob-shape-3 opacity-40 animate-float-slow" />
        
        {/* Decorative rings */}
        <div className="floating-shape absolute top-1/4 left-1/3 w-40 h-40 border-2 border-yellow/30 rounded-full animate-rotate-slow" />
        <div className="floating-shape absolute bottom-1/3 right-1/3 w-32 h-32 border-2 border-orange/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div ref={textRef} className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-orange" />
              <span className="text-sm font-medium text-[#5e5e5e]">
                Farm Fresh Dairy Products
              </span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2d2d2d] leading-tight mb-6">
              <span className="inline-block">Pure</span>{' '}
              <span className="inline-block text-orange">Dairy</span>{' '}
              <span className="inline-block">Delights</span>
            </h1>

            <p className="hero-subtitle text-lg sm:text-xl text-[#5e5e5e] max-w-lg mb-8 leading-relaxed">
              From our farm to your table, experience the taste of pure, natural
              dairy products made with love and tradition. Fresh milk, pure ghee,
              and soft paneer delivered daily.
            </p>

            <div className="hero-cta flex flex-wrap gap-4">
              <button
                onClick={scrollToProducts}
                className="btn-primary flex items-center gap-2 group"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 rounded-full font-semibold text-[#5e5e5e] border-2 border-[#5e5e5e]/20 hover:border-yellow hover:bg-yellow/10 transition-all"
              >
                Our Story
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-[#2d2d2d]">15+</div>
                <div className="text-sm text-[#5e5e5e]">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2d2d2d]">10K+</div>
                <div className="text-sm text-[#5e5e5e]">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2d2d2d]">100%</div>
                <div className="text-sm text-[#5e5e5e]">Organic</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div ref={imageRef} className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main image container */}
              <div className="hero-image relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/hero-milk.jpg"
                    alt="Fresh Milk"
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f6f59e]/20 to-transparent" />
                </div>
              </div>

              {/* Decorative elements behind image */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-yellow rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-orange/30 rounded-3xl -z-20" />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center">
                    <span className="text-2xl">🥛</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#2d2d2d]">Fresh Daily</div>
                    <div className="text-sm text-[#5e5e5e]">Morning Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
