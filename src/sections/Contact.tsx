import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    product: 'milk',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.contact-header > *',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Form animation
      gsap.fromTo(
        '.contact-form',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Info cards animation
      gsap.fromTo(
        '.info-card',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        product: 'milk',
      })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Dairy Farm Road, Green Valley, Punjab 141001',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 98765 43210',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@puredairy.com',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Sat: 6:00 AM - 8:00 PM',
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full section-padding">
        {/* Header */}
        <div className="contact-header text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow/30 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-[#2d2d2d]">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d2d2d] mb-6">
            Order Your{' '}
            <span className="text-orange">Fresh Dairy</span>
          </h2>
          <p className="text-lg text-[#5e5e5e]">
            Have questions or want to place an order? Reach out to us and we'll
            get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="contact-form">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2d2d2d] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-[#5e5e5e]">
                    We've received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">
                    Send us a Message
                  </h3>

                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-[#5e5e5e] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow focus:ring-2 focus:ring-yellow/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#5e5e5e] mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow focus:ring-2 focus:ring-yellow/20 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#5e5e5e] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow focus:ring-2 focus:ring-yellow/20 outline-none transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Product Selection */}
                    <div>
                      <label className="block text-sm font-medium text-[#5e5e5e] mb-2">
                        Interested Product
                      </label>
                      <select
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow focus:ring-2 focus:ring-yellow/20 outline-none transition-all"
                      >
                        <option value="milk">Fresh Milk</option>
                        <option value="ghee">Pure Ghee</option>
                        <option value="paneer">Farm Paneer</option>
                        <option value="all">All Products</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-[#5e5e5e] mb-2">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow focus:ring-2 focus:ring-yellow/20 outline-none transition-all resize-none"
                        placeholder="Tell us what you need..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="info-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-[#2d2d2d]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2d2d2d] mb-1">{info.title}</h4>
                  <p className="text-[#5e5e5e]">{info.content}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="info-card bg-white rounded-2xl p-4 shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-yellow/20 to-orange/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-orange mx-auto mb-2" />
                  <p className="text-sm text-[#5e5e5e]">Pure Dairy Farm Location</p>
                  <p className="text-xs text-[#5e5e5e]/70">Green Valley, Punjab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
