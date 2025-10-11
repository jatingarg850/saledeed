'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Anant Mehta',
      text: 'Perfect for NRIs like me. I was made aware about the building bye-laws and regulations. After the process they even got my property removed from the municipal corporation\'s online list of blacklisted properties. I am fully satisfied with the regularisation of my property. Thank you team saledeed.com!',
      rating: 5
    },
    {
      name: 'Mansi Mittal',
      text: 'Got my sale deed registered through saledeed.com! I had to travel and they informed me of a single slab available at the registrar office. Must appreciate, I wasn\'t asked for any extra money even though I declared in advance that I can pay if they can expedite the process.',
      rating: 5
    },
    {
      name: 'Poonam Rana',
      text: 'I got the capital gain valuation done by saledeed.com! I wasn\'t aware of the exemptions I was eligible for. I am happy to save around 2.40 lacs of tax on my property sale.',
      rating: 5
    },
    {
      name: 'Mahesh Goswami',
      text: 'I got my property mutated by saledeed.com! It was done in 4 days. I wasn\'t able to provide the property tax receipts for 2 years but they managed somehow.',
      rating: 5
    },
    {
      name: 'Keshav Gupta',
      text: 'I tried getting my property freehold back in 2004 through someone but due to some legality I failed. saledeed.com got it done in around 2 months and also got the previously paid official fee around 65k adjusted in the conversion charges. I felt wow.',
      rating: 5
    },
    {
      name: 'Jeet Bansal',
      text: 'I approached saledeed.com randomly to know my property price. I was offered a price around 18 lacs more than my dealer friend. I instantly agreed and they took care of everything from beginning till the end. Today I am sitting in the balcony of my new abode and typing this message. Thank you team saledeed.com.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What our <span className="gradient-text">clients say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from the people who've experienced our work firsthand.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-blue-200" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Trusted by 20 Lakh+ People
            </motion.h3>
            <p className="text-xl mb-8 opacity-90">
              Join millions who trust us for our reliable and no nonsense services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '100K+', label: 'Successful deals' },
                { number: '100%', label: 'Legal Compliance' },
                { number: '50+', label: 'Year of Experience' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials