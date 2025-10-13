'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, FileCheck, Users, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const stats = [
    { number: '100K+', label: 'Successful Deals', icon: FileCheck },
    { number: '50+', label: 'Years Experience', icon: Clock },
    { number: '100%', label: 'Legal Compliance', icon: Shield },
    { number: '20L+', label: 'Trusted Users', icon: Users },
  ]

  const services = [
    'Sale Deed', 'Gift Deed', 'Relinquishment Deed', 'Valuation Report', 
    'NOC', 'Mutation', 'Freehold', 'Registration'
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional Property
              <br />
              <span className="text-blue-600">Documentation Services</span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl font-medium text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive legal support for all your property needs
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From sale deeds to gift deeds, relinquishment deeds to valuation reports, 
            we provide end-to-end property documentation services with complete legal compliance 
            and privacy protection at every step.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Schedule Consultation</span>
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-gray-700 px-10 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              View Services
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-white border border-gray-200 rounded-2xl p-8"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Our Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <div key={index} className="text-center py-3 px-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero