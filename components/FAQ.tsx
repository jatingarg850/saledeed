'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus, Copy, Mail } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  const faqs = [
    {
      question: 'What is saledeed.com all about?',
      answer: 'saledeed.com is a one stop platform which offers comprehensive services in the real estate industry. From property verification to deed drafting, from registration to real estate liaisoning. In brief every from - sale to deed.'
    },
    {
      question: 'Is a sale deed really required?',
      answer: 'Yes sale deed is the final and foremost ownership document that when registered with the sub registrar office is considered as the document that proves the absolute ownership of a particular property.'
    },
    {
      question: 'Can I get my sale deed registered sitting at home?',
      answer: 'Yes, saledeed.com offers packages that include everything required in a sale process. But for physical (bio metric) verification you may have to be present at the sub-registrar office. We always try to make your visit as comfortable as possible. It takes approximately 20-40 minutes in most of the cases through us in case of technical delay & error we\'ll keep you informed.'
    },
    {
      question: 'List of services that you provide?',
      answer: 'sale/purchase/renting at minimum commission, all deeds drafting & registration, noc, bank loan, valuation report, Mutation, freehold, Regularisation, real estate liaisoning, renovation, relocation, and everything related to property.'
    },
    {
      question: 'How does it work?',
      answer: 'You buy a service (book now/from our website that comes with a complementary home visit), our team connects with you over a call, discuss your case, starts the process, visit you in person, follow all legalities and you witness a hassle free work experience exclusively by saledeed.com'
    },
    {
      question: 'Is my payment secured?',
      answer: 'You buy a service (book now/from our website that comes with a complementary home visit), our team connects with you over a call, discuss your case, starts the process, visit you in person, follow all legalities and you witness a hassle free work experience exclusively by saledeed.com'
    },
    {
      question: 'What is the refund policy?',
      answer: 'You can expect 100% refund if you wish to cancel your order. The refund has to be requested before the process starts. In case you fail to request a refund on time, saledeed.com will have the exclusive right to decide the amount of partial refund.'
    },
    {
      question: 'Will my data remain confidential?',
      answer: 'Yes, undoubtedly. We give 100% guarantee and assure you of our no compromise privacy policy. All your property data and your personal information remains fully secured with only and only us. We don\'t use your property documents as sample documents or your particular case as a reference medium. We meet you, satisfy you through our work ethics, forget you. Our brand promise – privacy kept at every step.'
    },
    {
      question: 'Can I partner with saledeed.com?',
      answer: 'Yes saledeed.com welcomes every one who are willing to partner us. Whether you are a deed writer, a property dealer/lawyer, or just a reference giver. We assure you a professional and profitable association saledeed.com.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('support@saledeed.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Find quick answers to common questions and doubts.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 mb-16"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 rounded-2xl transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-8">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center bg-gray-50 rounded-2xl p-4 border border-gray-200 hover:border-blue-300 transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">support@saledeed.com</p>
                <p className="text-sm text-gray-600">We'll get back to you in 24 hours</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={copyEmail}
                className={`ml-4 p-2 rounded-lg transition-all duration-200 ${
                  copied 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                <Copy className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
          
          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-green-600 text-sm mt-2"
            >
              Email copied to clipboard!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ