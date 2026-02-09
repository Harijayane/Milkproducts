import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Tractor, Sprout, Clock, Shield, Recycle, HeartHandshake } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.features-header > *',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.features-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // SVG path draw animation
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength()
        gsap.set(pathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        })

        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 1,
          },
        })
      }

      // Feature items animation
      gsap.fromTo(
        '.feature-item',
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.features-list',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Icon pulse animation
      gsap.utils.toArray<HTMLElement>('.feature-icon').forEach((icon) => {
        gsap.to(icon, {
          scale: 1.1,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: Tractor,
      title: 'Farm to Table',
      description: 'Direct sourcing from our local farms ensures maximum freshness and minimal processing time.',
      color: 'bg-yellow',
    },
    {
      icon: Sprout,
      title: '100% Organic',
      description: 'No chemicals, no preservatives. Just pure, natural dairy from grass-fed cows.',
      color: 'bg-green-400',
    },
    {
      icon: Clock,
      title: 'Daily Fresh',
      description: 'Delivered within 24 hours of milking, guaranteeing the freshest taste every time.',
      color: 'bg-orange',
    },
    {
      icon: Shield,
      title: 'Quality Tested',
      description: 'Every batch undergoes rigorous quality checks to ensure safety and purity.',
      color: 'bg-blue-400',
    },
    {
      icon: Recycle,
      title: 'Eco-Friendly',
      description: 'Sustainable packaging and farming practices that protect our environment.',
      color: 'bg-emerald-400',
    },
    {
      icon: HeartHandshake,
      title: 'Customer First',
      description: 'Dedicated support team and flexible delivery options for your convenience.',
      color: 'bg-pink-400',
    },
  ]

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow/5 to-transparent" />

      <div className="relative z-10 w-full section-padding">
        {/* Header */}
        <div className="features-header text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-yellow/30 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-[#2d2d2d]">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d2d2d] mb-6">
            The Pure Dairy{' '}
            <span className="text-orange">Difference</span>
          </h2>
          <p className="text-lg text-[#5e5e5e]">
            We go the extra mile to ensure you receive dairy products that are
            fresh, pure, and full of natural goodness.
          </p>
        </div>

        {/* Features Grid with SVG Path */}
        <div className="features-list relative">
          {/* SVG Connection Path - Desktop only */}
          <svg
            className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M 100 100 Q 300 50, 400 150 T 700 100 T 1000 150 T 1100 300 T 800 400 T 500 350 T 200 450 T 100 550"
              fill="none"
              stroke="#f6f59e"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 8"
            />
          </svg>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-item relative ${
                  index % 2 === 1 ? 'lg:mt-12' : ''
                }`}
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group">
                  {/* Icon */}
                  <div
                    className={`feature-icon w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#2d2d2d] mb-3 group-hover:text-orange transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#5e5e5e] leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Number badge */}
                  <div className="absolute top-6 right-6 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-[#5e5e5e]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-yellow rounded-full border-2 border-white flex items-center justify-center"
                >
                  <span className="text-xs font-bold">{i}K</span>
                </div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="font-bold text-[#2d2d2d]">Join 10,000+ Happy Customers</p>
              <p className="text-sm text-[#5e5e5e]">Start your healthy journey today</p>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary whitespace-nowrap"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
