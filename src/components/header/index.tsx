'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuItem {
  label: string
  path: string
}

const SCROLL_OFFSET = 100

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  const menuItems: MenuItem[] = useMemo(
    () => [
      { label: 'Home', path: '/#hero' },
      { label: 'About', path: '/#about' },
      { label: 'Menu', path: '/#menu' },
      { label: 'Events', path: '/#events' },
      { label: 'Entertainment', path: '/#entertainment' },
      { label: 'Team', path: '/#team' },
      { label: 'Contact', path: '/#contact-footer' },
    ],
    []
  )

  const sections = useMemo(
    () =>
      menuItems.map((item) => item.path.replace('/#', '')).filter((section) => section !== 'hero'),
    [menuItems]
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId)
            return
          }
        }
      }
      // If at the top, set home as active
      if (window.scrollY < SCROLL_OFFSET) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScrollSpy)
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [sections])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const isActive = (path: string) => {
    const sectionId = path.replace('/#', '')
    if (sectionId === 'hero') return activeSection === ''
    return activeSection === sectionId
  }

  return (
    <header
      id="header"
      className={`w-full bg-[#5D4037] shadow-lg fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        isScrolled ? 'h-[55px]' : 'h-[80px]'
      }`}
    >
      <div className="w-full">
        <div className="mx-auto max-w-[1080px]">
          <div className="flex items-center px-2 transition-all duration-300">
            {/* Logo */}
            <div
              className={`transition-all duration-300 ${isScrolled ? 'w-[110px]' : 'w-[150px]'}`}
            >
              <Link
                href="/"
                onClick={handleLinkClick}
                className="block bg-[#FDF8F3] rounded-full px-2 py-1 shadow-md"
              >
                <img
                  src="/Images/legion-woods-logo.png"
                  alt="Legion in the Woods"
                  className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'}`}
                />
              </Link>
            </div>

            {/* Menu */}
            <div className="flex items-center justify-end sm:pl-[50px] md:pl-[70px] w-full">
              {/* Desktop Menu */}
              <nav className="hidden lg:block transition-all duration-300">
                <ul className="flex items-center space-x-[1px] font-navbar font-[600]">
                  {menuItems.map((item, index) => (
                    <li key={index} className="relative py-6">
                      <Link
                        href={item.path}
                        onClick={handleLinkClick}
                        className={`flex items-center px-3 py-2 text-[14px] transition-colors duration-200 ${
                          isActive(item.path) ? 'text-[#D4A574]' : 'text-white hover:text-[#D4A574]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Visit Us CTA */}
              <div className="hidden lg:flex items-center ml-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1950+Pine+Hall+Road+State+College+PA+16801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D4A574] hover:bg-[#C49464] text-[#2C1810] px-4 py-2 rounded-full text-[14px] font-[600] transition-colors"
                >
                  Visit Us
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#D4A574]"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <RxCross2 className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`lg:hidden absolute left-0 w-full overflow-hidden z-40 ${
              isScrolled ? 'top-[53px]' : 'top-[77px]'
            }`}
          >
            <div
              className={`max-w-[700px] mx-auto px-6 py-4 bg-[#5D4037] border-t-[3px] border-[#D4A574] shadow-[0_2px_5px_rgba(0,0,0,0.3)] max-h-[80vh] overflow-auto`}
            >
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      onClick={handleLinkClick}
                      className={`block px-4 py-2 rounded-lg text-sm font-[600] ${
                        isActive(item.path)
                          ? 'bg-[#3D2317] text-[#D4A574]'
                          : 'text-white hover:bg-[#3D2317]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1950+Pine+Hall+Road+State+College+PA+16801"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 rounded-lg text-sm font-[600] bg-[#D4A574] text-[#2C1810] text-center mt-4"
                  >
                    Visit Us
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
