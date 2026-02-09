import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Home Maker',
      image: '/images/testimonial-1.jpg',
      rating: 5,
      text: 'The freshest milk I have ever tasted! My kids love it, and I feel good knowing it is 100% organic and delivered fresh every morning. The quality is consistently excellent.',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Restaurant Owner',
      image: '/images/testimonial-2.jpg',
      rating: 5,
      text: 'Their ghee reminds me of my grandmothers cooking. The authentic taste and aroma are unmatched. We use it exclusively in our restaurant, and our customers love it!',
    },
    {
      id: 3,
      name: 'Anita Patel',
      role: 'Fitness Trainer',
      image: '/images/testimonial-1.jpg',
      rating: 5,
      text: 'As a fitness enthusiast, I need pure protein sources. Their paneer is soft, fresh, and perfect for my daily meals. Highly recommended for health-conscious people!',
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Business Owner',
      image: '/images/testimonial-2.jpg',
      rating: 5,
      text: 'Been a customer for 3 years now. The consistency in quality and punctual delivery is remarkable. Pure Dairy has become an essential part of our family.',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.testimonials-header > *',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.testimonials-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Carousel container animation
      gsap.fromTo(
        '.testimonials-carousel',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.testimonials-carousel',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full section-padding">
        {/* Header */}
        <div className="testimonials-header text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow/30 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-[#2d2d2d]">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d2d2d] mb-6">
            What Our{' '}
            <span className="text-orange">Customers</span> Say
          </h2>
          <p className="text-lg text-[#5e5e5e]">
            Don't just take our word for it. Here's what our happy customers have
            to say about our dairy products.
          </p>
        </div>

        {/* Carousel */}
        <div className="testimonials-carousel relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-yellow rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-[#2d2d2d]" />
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange fill-orange" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-xl lg:text-2xl text-[#2d2d2d] leading-relaxed mb-8">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-yellow/30">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#2d2d2d]">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-[#5e5e5e]">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-yellow transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-[#2d2d2d]" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-6">
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-yellow transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-[#2d2d2d]" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-orange w-8'
                    : 'bg-yellow hover:bg-orange/50'
                }`}
              />
            ))}
          </div>

          {/* Preview cards - Desktop only */}
          <div className="hidden lg:flex justify-center gap-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`w-16 h-16 rounded-full overflow-hidden transition-all duration-300 ${
                  index === activeIndex
                    ? 'ring-4 ring-orange scale-110'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '10K+', label: 'Happy Customers' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '50K+', label: 'Deliveries Made' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold text-orange mb-1">{stat.value}</div>
              <div className="text-sm text-[#5e5e5e]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
