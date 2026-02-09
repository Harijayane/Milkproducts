import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShoppingCart, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        '.products-header > *',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.products-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Product cards animation with 3D flip
      gsap.fromTo(
        '.product-card',
        { rotateX: 45, y: 80, opacity: 0 },
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.products-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Parallax effect on cards
      gsap.utils.toArray<HTMLElement>('.product-card').forEach((card, i) => {
        const direction = i % 2 === 0 ? -1 : 1
        gsap.to(card, {
          y: direction * 30,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const products = [
    {
      id: 1,
      name: 'Fresh Cow Milk',
      description: 'Pure, pasteurized cow milk packed with essential nutrients. Perfect for your daily health needs.',
      price: '₹60',
      unit: '/ liter',
      image: '/images/product-milk.jpg',
      rating: 4.9,
      badge: 'Bestseller',
      offset: 0,
    },
    {
      id: 2,
      name: 'Pure Desi Ghee',
      description: 'Traditional clarified butter made using ancient methods. Rich aroma and authentic taste.',
      price: '₹850',
      unit: '/ kg',
      image: '/images/product-ghee.jpg',
      rating: 5.0,
      badge: 'Premium',
      offset: -50,
      featured: true,
    },
    {
      id: 3,
      name: 'Farm Fresh Paneer',
      description: 'Soft, creamy cottage cheese made fresh daily. Perfect for curries and snacks.',
      price: '₹320',
      unit: '/ kg',
      image: '/images/product-paneer.jpg',
      rating: 4.8,
      badge: 'Fresh Daily',
      offset: 40,
    },
  ]

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full section-padding">
        {/* Header */}
        <div className="products-header text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow/30 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-[#2d2d2d]">Our Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2d2d2d] mb-6">
            Fresh From Our{' '}
            <span className="text-orange">Farm</span>
          </h2>
          <p className="text-lg text-[#5e5e5e]">
            Discover our range of premium dairy products, crafted with care and
            delivered fresh to your doorstep every day.
          </p>
        </div>

        {/* Products Grid - Masonry Style */}
        <div className="products-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`product-card group relative ${
                product.featured ? 'md:row-span-1' : ''
              }`}
              style={{ marginTop: `${product.offset}px` }}
            >
              <div
                className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  product.featured ? 'ring-2 ring-orange/50' : ''
                }`}
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-20">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                        product.featured
                          ? 'bg-orange text-white'
                          : 'bg-yellow text-[#2d2d2d]'
                      }`}
                    >
                      <Star className="w-3 h-3" />
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Quick add button */}
                  <button className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-yellow">
                    <ShoppingCart className="w-5 h-5 text-[#2d2d2d]" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-orange fill-orange" />
                    <span className="text-sm font-medium text-[#5e5e5e]">
                      {product.rating}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#2d2d2d] mb-2 group-hover:text-orange transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-sm text-[#5e5e5e] mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-[#2d2d2d]">
                        {product.price}
                      </span>
                      <span className="text-sm text-[#5e5e5e]">{product.unit}</span>
                    </div>
                    <button className="px-4 py-2 bg-yellow rounded-full text-sm font-semibold text-[#2d2d2d] hover:bg-orange hover:text-white transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#2d2d2d] text-white rounded-full font-semibold hover:bg-[#3d3d3d] transition-colors">
            View All Products
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products
