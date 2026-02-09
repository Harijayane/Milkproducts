import { Milk, Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    products: [
      { name: 'Fresh Milk', href: '#products' },
      { name: 'Pure Ghee', href: '#products' },
      { name: 'Farm Paneer', href: '#products' },
      { name: 'Curd & Yogurt', href: '#products' },
      { name: 'Butter', href: '#products' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQs', href: '#' },
      { name: 'Delivery Info', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Track Order', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ]

  return (
    <footer className="relative bg-[#2d2d2d] text-white overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[20rem] font-bold whitespace-nowrap">Pure Dairy</span>
      </div>

      {/* Main footer content */}
      <div className="relative z-10">
        {/* CTA Section */}
        <div className="border-b border-white/10">
          <div className="section-padding py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  Ready to taste the difference?
                </h3>
                <p className="text-white/70">
                  Order now and get fresh dairy delivered to your doorstep.
                </p>
              </div>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-yellow text-[#2d2d2d] rounded-full font-semibold hover:bg-orange transition-colors whitespace-nowrap"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="section-padding py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <a href="#home" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center">
                  <Milk className="w-5 h-5 text-[#2d2d2d]" />
                </div>
                <span className="text-xl font-bold">
                  Pure<span className="text-orange">Dairy</span>
                </span>
              </a>
              <p className="text-white/70 text-sm mb-6 max-w-xs">
                Bringing pure, natural dairy products from our farm to your table.
                Freshness guaranteed, every single day.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow hover:text-[#2d2d2d] transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-white/70 hover:text-yellow transition-colors text-sm relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-yellow transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-white/70 hover:text-yellow transition-colors text-sm relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-yellow transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-white/70 hover:text-yellow transition-colors text-sm relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-yellow transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-span-2 md:col-span-2 lg:col-span-1">
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-white/70 text-sm mb-4">
                Subscribe for updates and exclusive offers.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm placeholder:text-white/50 focus:outline-none focus:border-yellow"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow text-[#2d2d2d] rounded-full text-sm font-semibold hover:bg-orange transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="section-padding py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Pure Dairy. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-white/50 hover:text-yellow text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/50 hover:text-yellow text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-yellow text-[#2d2d2d] rounded-full shadow-lg flex items-center justify-center hover:bg-orange transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}

export default Footer
