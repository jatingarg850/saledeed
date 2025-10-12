'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'

// Define the structure for a navigation link
interface NavLink {
  name: string;
  href: string;
  id: string; // Used for scrollspy
  sublinks?: NavLink[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home'); // State to track the active link

  // Updated navLinks with IDs for scroll tracking
  const navLinks: NavLink[] = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Deeds and Documents', href: '#services', id: 'services' },
    { name: 'Solution', href: '#calculator', id: 'calculator' },
    { name: 'Services', href: '#services', id: 'services' }, // Note: Points to the same section
    {
      name: 'Company',
      href: '#',
      id: 'company', // Dummy ID for the parent item
      sublinks: [
        { name: 'About Us', href: '#about', id: 'about' },
        { name: 'Blog', href: '#blog', id: 'blog' },
        { name: 'Careers', href: '#careers', id: 'careers' },
      ],
    },
    { name: 'Contact us', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Logic for changing header background
      setIsScrolled(window.scrollY > 10);

      // Scrollspy logic to set the active link
      let currentSectionId = '';
      navLinks.forEach((link) => {
        if (link.href.startsWith('#') && link.href.length > 1) {
          const section = document.getElementById(link.id);
          if (section) {
            // 80px offset for the header height + a little buffer
            if (window.scrollY >= section.offsetTop - 85) {
              currentSectionId = link.id;
            }
          }
        }
      });
      
      const activeNav = navLinks.find(link => link.id === currentSectionId);
      if (activeNav) {
        setActiveLink(activeNav.name);
      } else if (window.scrollY < 200) {
        // Default to 'Home' when at the very top
        setActiveLink('Home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg = 'bg-white/95 shadow-md backdrop-blur-sm';
  const textColor = 'text-gray-800';
  const hoverColor = 'hover:text-blue-600';
  const ringColor = isScrolled ? 'ring-gray-300' : 'ring-white/50';
  const underlineColor = 'bg-blue-600';

  const handleClick = (linkName: string) => {
    setActiveLink(linkName);
    if(isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins ${headerBg}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" onClick={() => handleClick('Home')}>
            <Image 
              src="/logo.png" 
              alt="saledeed logo" 
              width={250} 
              height={250} 
              priority
            />
          </Link>

          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                {link.sublinks ? (
                  <div onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                    <button className={`flex items-center space-x-1 font-medium transition-colors ${textColor} ${hoverColor}`}>
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full mt-4 w-48 bg-white rounded-lg shadow-xl py-2 ring-1 ring-black ring-opacity-5"
                        >
                          {link.sublinks.map((sublink) => (
                            <li key={sublink.name}>
                              <Link href={sublink.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                {sublink.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href={link.href} onClick={() => handleClick(link.name)} className={`font-medium transition-colors pb-1 relative ${textColor} ${hoverColor}`}>
                    {link.name}
 
                    {activeLink === link.name && (
                      <motion.span
                        layoutId="underline" // Framer Motion animates the underline between tabs
                        className={`absolute bottom-0 left-0 w-full h-0.5 ${underlineColor}`}
                      />
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(true)} className={`p-2 rounded-md ring-1 ${ringColor}`}>
              <Menu className={`w-6 h-6 transition-colors ${textColor}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl lg:hidden"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8 text-gray-800" />
              </button>
            </div>
            <ul className="flex flex-col items-center space-y-8 mt-10">
              {navLinks.map((link) => (
                !link.sublinks && ( // Render only main links in mobile menu
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => handleClick(link.name)}
                      className="text-2xl font-semibold text-gray-800 hover:text-blue-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;