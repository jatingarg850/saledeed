'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    { name: 'WhatsApp', icon: MessageCircle, color: 'from-green-500 to-green-600', href: 'https://wa.me/918800505050' },
    { name: 'Facebook', icon: Phone, color: 'from-blue-500 to-blue-600', href: '#' },
    { name: 'Instagram', icon: Mail, color: 'from-pink-500 to-pink-600', href: '#' },
    { name: 'LinkedIn', icon: MapPin, color: 'from-blue-600 to-blue-700', href: '#' },
    { name: 'YouTube', icon: Phone, color: 'from-red-500 to-red-600', href: '#' },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free Expert <span className="gradient-text">Assistance</span>
          </h2>
          <p className="text-xl text-gray-600">
            Connect with our professionals instantly
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* WhatsApp Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 mb-16 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center"
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Reach us through WhatsApp
                </h3>
                <p className="text-gray-600">
                  Get instant support from our experts
                </p>
              </div>
            </div>
            
            <motion.a
              href="https://wa.me/918800505050?text=Hello%20saledeed.com!%20I%20need%20assistance%20regarding%20my%20property."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
            >
              <span>Start Chat</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Connect with us on social media
          </h3>
          <p className="text-gray-600 mb-8">
            Follow us for updates and property tips
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <social.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {social.name}
              </h4>
            </motion.a>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Other ways to reach us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">support@saledeed.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 88005 05050</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact