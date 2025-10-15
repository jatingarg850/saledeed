'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calculator as CalcIcon, MapPin, User, DollarSign } from 'lucide-react'

const Calculator = () => {
  const [formData, setFormData] = useState({
    propertyValue: '',
    location: '',
    gender: ''
  })

  const [result, setResult] = useState<{
    stampDuty: number;
    registrationFee: number;
    total: number;
  } | null>(null)

  const locations = [
    { value: 'delhi', label: 'Delhi (All Other Areas)' },
    { value: 'ndmc', label: 'New Delhi Municipal Corporation (NDMC)' },
    { value: 'cantt', label: 'Delhi Cantonment Board Areas' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const calculateStampDuty = () => {
    if (!formData.propertyValue || !formData.location || !formData.gender) {
      alert('Please fill all fields')
      return
    }

    const value = parseFloat(formData.propertyValue)
    let rate = 0.06 // Default 6%
    
    // Adjust rate based on location and gender
    if (formData.location === 'ndmc') rate = 0.08
    if (formData.gender === 'female') rate = rate * 0.5 // 50% discount for women
    if (formData.gender === 'joint') rate = rate * 0.75 // 25% discount for joint

    const stampDuty = value * rate
    const registrationFee = value * 0.01 // 1% registration fee
    const total = stampDuty + registrationFee

    setResult({
      stampDuty,
      registrationFee,
      total
    })
  }

  const services = [
    'Direct Liaison with MCD, DDA, L&DO, SRO',
    'Expert Team with 50+ Years Authority Experience',
    'Government-Registered Lawyers & Valuers',
    'Complete Authority Process Management',
    'Doorstep Consultation @ ₹999/-'
  ]

  const authorities = [
    {
      name: 'MCD',
      fullName: 'Municipal Corporation of Delhi',
      icon: 'building-2',
      description: 'Property tax & building approvals'
    },
    {
      name: 'DDA',
      fullName: 'Delhi Development Authority',
      icon: 'landmark',
      description: 'Land development & layout approvals'
    },
    {
      name: 'L&DO',
      fullName: 'Land & Development Office',
      icon: 'map',
      description: 'Leasehold conversions & land records'
    },
    {
      name: 'SRO',
      fullName: 'Sub-Registrar Office',
      icon: 'file-check',
      description: 'Document registration & validation'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Services Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Services List */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center font-display">
                <CalcIcon className="w-8 h-8 text-primary mr-3" />
                Our Authority Expertise
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Authorities Grid */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-yellow-200/50">
              <h4 className="text-lg font-bold text-gray-900 mb-4 font-display">Government Authorities We Work With</h4>
              <div className="grid grid-cols-2 gap-4">
                {authorities.map((authority, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-3 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-2">
                      <i className="text-white text-sm" data-lucide={authority.icon}></i>
                    </div>
                    <h5 className="font-bold text-gray-900 text-sm">{authority.name}</h5>
                    <p className="text-xs text-gray-600 mt-1">{authority.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 text-center">
              <h3 className="text-2xl font-bold">Stamp Duty Calculator</h3>
            </div>
            
            <div className="p-8">
              <div className="space-y-6">
                {/* Property Value */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Value (INR)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      name="propertyValue"
                      value={formData.propertyValue}
                      onChange={handleInputChange}
                      placeholder="Enter property value"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white"
                    >
                      <option value="">-- Select --</option>
                      {locations.map((location) => (
                        <option key={location.value} value={location.value}>
                          {location.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Gender / Ownership Type
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { value: 'male', label: 'Gents' },
                      { value: 'female', label: 'Ladies' },
                      { value: 'joint', label: 'Joint Ownership' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          value={option.value}
                          checked={formData.gender === option.value}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-gray-700 font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Calculate Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={calculateStampDuty}
                  disabled={!formData.propertyValue || !formData.location || !formData.gender}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
                >
                  Calculate
                </motion.button>

                {/* Results */}
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Calculation Results</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Stamp Duty:</span>
                        <span className="font-semibold text-blue-600">₹{result.stampDuty.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Registration Fee:</span>
                        <span className="font-semibold text-blue-600">₹{result.registrationFee.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-t pt-3">
                        <span className="font-bold text-gray-900">Total Amount:</span>
                        <span className="font-bold text-green-600 text-lg">₹{result.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Calculator