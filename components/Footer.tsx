'use client'

import { motion } from 'framer-motion'
import { Shield, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const Footer = () => {
  const productLinks = [
    { name: 'I am a Buyer', href: '/buyer' },
    { name: 'I am a Seller', href: '/seller' },
    { name: 'I am a Landlord', href: '/landlord' },
    { name: 'I am a Tenant', href: '/tenant' },
    { name: 'I am a Builder', href: '/builder' },
  ]

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Service', href: '/service' },
    { name: 'Blog', href: '/blog' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
    { name: 'Refund & Cancellation', href: '/refund-cancellation-policy' },
    { name: 'Payment & Billing', href: '/payment-billing-policy' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ]

  const supportLinks = [
    { name: 'Report a bug', href: '/support', icon: '🐛' },
    { name: 'Chat support', href: 'https://wa.me/918800505050', icon: '💬' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">SaleDeed</h3>
                <p className="text-sm text-gray-400">Professional Property Services</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Comprehensive property documentation services with complete legal compliance and privacy protection.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">support@saledeed.com</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">+91 88005 05050</span>
                </div>
                <p className="text-sm text-gray-500 ml-8">
                  Get in touch with our expert team
                </p>
                <p className="text-sm text-gray-500 ml-8">
                  Available Mon-Sat, 9 AM - 7 PM IST
                </p>
                <p className="text-sm text-gray-500 ml-8">
                  Instant support for all property documentation needs
                </p>
              </div>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 relative">
              Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-600"></span>
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 relative">
              Company
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-600"></span>
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 relative">
              Legal
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-600"></span>
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 relative">
              Support
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-600"></span>
            </h4>
            <ul className="space-y-4">
              {supportLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-3 group"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                    {link.href.startsWith('http') && (
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025{' '}
              <a href="https://saledeed.com" className="hover:text-white transition-colors duration-300">
                SaleDeed
              </a>{' '}
              Professional Property Documentation Services. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>All Rights Reserved</span>
              <span>•</span>
              <a href="/privacy-policy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Professional accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"></div>
    </footer>
  )
}

export default Footer