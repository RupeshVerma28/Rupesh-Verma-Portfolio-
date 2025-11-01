import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

console.log('Header component loaded')

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-neutral-800">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold gradient-text">
            Rupesh Verma
          </Link>
          {isHome ? (
            <>
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#about"
                  className="text-slate-300 hover:text-sky-400 transition-colors duration-300"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="text-slate-300 hover:text-sky-400 transition-colors duration-300"
                >
                  Skills
                </a>
                <a
                  href="#work"
                  className="text-slate-300 hover:text-sky-400 transition-colors duration-300"
                >
                  Work
                </a>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-sky-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-slate-300"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </>
          ) : (
            <Link
              to="/"
              className="text-slate-300 hover:text-sky-400 transition-colors duration-300 flex items-center gap-2"
            >
              <span>←</span> Back to Home
            </Link>
          )}
        </nav>
      </div>
      {isHome && mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <a
            href="#about"
            className="block py-2 text-slate-300 hover:text-sky-400"
          >
            About
          </a>
          <a
            href="#skills"
            className="block py-2 text-slate-300 hover:text-sky-400"
          >
            Skills
          </a>
          <a href="#work" className="block py-2 text-slate-300 hover:text-sky-400">
            Work
          </a>
          <a
            href="#contact"
            className="block py-2 text-slate-300 hover:text-sky-400"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  )
}

export default Header

