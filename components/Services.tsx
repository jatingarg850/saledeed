'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  Home, 
  Key, 
  Building, 
  Users, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'I Am a Buyer',
      description: 'Complete support from property selection to purchase. Pricing guidance.',
      icon: Home,
      color: 'from-blue-500 to-blue-600',
      features: ['Property Verification', 'Legal Documentation', 'Price Guidance', 'End-to-end Support']
    },
    {
      title: 'I Am a Seller',
      description: 'Step-by-step help from property search to sale deed registration. Legal checks.',
      icon: FileText,
      color: 'from-green-500 to-green-600',
      features: ['Market Valuation', 'Legal Clearance', 'Documentation', 'Registration Support']
    },
    {
      title: 'I Am a Landlord',
      description: 'Find verified tenants quickly. Hassle-free rent agreements and property support.',
      icon: Building,
      color: 'from-purple-500 to-purple-600',
      features: ['Tenant Verification', 'Rent Agreements', 'Property Management', 'Legal Support']
    },
    {
      title: 'I Am a Tenant',
      description: 'Minimum commission services to find your perfect space. Tenant-friendly agreements.',
      icon: Key,
      color: 'from-orange-500 to-orange-600',
      features: ['Property Search', 'Agreement Review', 'Legal Protection', 'Move-in Support']
    },
    {
      title: 'I Am a Builder/Developer',
      description: 'Complete solutions for property dealings, deeds, NOC, freehold, approvals.',
      icon: Users,
      color: 'from-red-500 to-red-600',
      features: ['Project Approvals', 'NOC Processing', 'Bulk Documentation', 'Compliance Support']
    }
  ]

  const whyChooseUs = [
    {
      title: 'Affordable & Convenient',
      description: 'We provide affordable sale deed drafting and registration services with a dedicated agent guiding you at every step.',
      icon: Shield
    },
    {
      title: 'No Compromise Privacy',
      description: 'All your sale deed details, documents, and personal information remain completely confidential with us.',
      icon: Shield
    },
    {
      title: 'Money Back Guarantee',
      description: 'We ensure top-quality sale deed services. If any part of the process is not satisfactory, we provide a full money-back guarantee.',
      icon: CheckCircle
    },
    {
      title: 'Free Doorstep Advice',
      description: 'Our experts provide doorstep consultation for sale deed procedures, clarifying all legal formalities and guiding you through registration.',
      icon: Home
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore tailored solutions for{' '}
            <span className="gradient-text">everyone</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <span>Learn More</span>
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="gradient-text">saledeed.com</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services