import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Leaf, Heart, Award } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        '.about-image',
        { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
        {
          clipPath: 'circle(100% at 50% 50%)',
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Text stagger animation
      gsap.fromTo(
        '.about-text > *',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Feature cards animation
      gsap.fromTo(
        '.feature-card',
        { y: 60, opacity: 0, rotateX: 15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.feature-cards',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Parallax rotation on image
      gsap.to('.about-image img', {
        rotation: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: Leaf,
      title: '100% Organic',
      description: 'Our cows graze on natural pastures',
    },
    {
      icon: Heart,
      title: 'Farm Fresh',
      description: 'Delivered within 24 hours',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Certified and tested products',
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow/10 to-transparent" />

      <div className="relative z-10 w-full section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="about-image relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-farm.jpg"
                alt="Our Dairy Farm"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange/30 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow rounded-full -z-10" />

            {/* Experience badge */}
            <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold text-orange mb-1">15+</div>
              <div className="text-sm text-[#5e5e5e]">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div className="about-text">
            <div className="inline-flex items-center gap-2 bg-yellow/30 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-[#2d2d2d]">Our Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d2d2d] mb-6 leading-tight">
              Pure Dairy,{' '}
              <span className="text-orange">Pure Love</span>
            </h2>

            <p className="text-lg text-[#5e5e5e] mb-6 leading-relaxed">
              We believe in the purity of nature. Our dairy products are sourced
              from grass-fed cows raised on lush green pastures, ensuring every
              drop is packed with nutrients and authentic flavor.
            </p>

            <p className="text-[#5e5e5e] mb-8 leading-relaxed">
              Founded with a passion for quality and tradition, Pure Dairy has been
              serving families with fresh, natural dairy products for over 15 years.
              Our commitment to sustainable farming and animal welfare ensures that
              you receive only the best.
            </p>

            {/* Feature cards */}
            <div className="feature-cards grid sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#2d2d2d]" />
                  </div>
                  <h3 className="font-bold text-[#2d2d2d] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#5e5e5e]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
