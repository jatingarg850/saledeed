'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: 'My sale deed document is showing as not found. What do I do?',
      answer: 'If your sale deed document is not found in our system, please contact our support team with your reference number or order ID. We will help you locate your document and provide you with the correct access details.'
    },
    {
      question: 'My request is pending clarification. What should I do?',
      answer: 'When your request is pending clarification, it means we need additional information from you to proceed. Please check your email for our clarification request or contact our support team directly to understand what additional details are required.'
    },
    {
      question: 'I received the wrong sale deed document. How can I get the correct one?',
      answer: 'If you received an incorrect document, please contact us immediately with your order details. We will review your case, identify the issue, and provide you with the correct document at no additional cost. We also offer a revision guarantee for such cases.'
    },
    {
      question: 'I\'m getting errors while searching sale deeds. What should I do?',
      answer: 'Search errors can occur due to various reasons like network issues or system maintenance. Try refreshing the page, clearing your browser cache, or using a different browser. If the issue persists, contact our technical support team for assistance.'
    },
    {
      question: 'Can I get a refund if my document delivery is delayed?',
      answer: 'Yes, we offer compensation for delayed deliveries. If your document is delivered beyond our promised timeline due to our fault, you may be eligible for a partial refund or service credit. Contact our support team to discuss your specific case.'
    },
    {
      question: 'How can I talk to the saledeed.com team?',
      answer: 'You can reach our team through multiple channels: 1) Fill out the contact form on this page, 2) Call our customer support hotline, 3) Use the WhatsApp chat feature, 4) Email us directly, or 5) Schedule a consultation through our website. Our team is available Monday to Saturday, 9 AM to 7 PM.'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
  }

  const contactMethods = [
    {
      icon: 'phone',
      title: 'Call Us',
      description: 'Speak directly with our experts',
      contact: '+91 88005 05050',
      availability: 'Mon-Sat, 9 AM - 7 PM'
    },
    {
      icon: 'mail',
      title: 'Email Us',
      description: 'Send us your queries anytime',
      contact: 'support@saledeed.com',
      availability: '24/7 Response'
    },
    {
      icon: 'message-circle',
      title: 'WhatsApp',
      description: 'Quick chat support',
      contact: '+91 88005 05050',
      availability: 'Instant Response'
    },
    {
      icon: 'map-pin',
      title: 'Visit Us',
      description: 'Meet us at our office',
      contact: 'Delhi, India',
      availability: 'By Appointment'
    }
  ]

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navigation currentPage="contact" />

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-6 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-text-light dark:text-text-dark text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] font-display mb-4">
              Get Support
            </h1>
            <p className="text-subtext-light dark:text-subtext-dark text-lg font-normal leading-normal max-w-2xl mx-auto">
              Need help with your property documentation? Our expert team is here to assist you with any questions or concerns.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-md border border-yellow-200/50 dark:border-slate-700 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-xl" data-lucide={method.icon}></i>
                </div>
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-2 font-display">{method.title}</h3>
                <p className="text-sm text-subtext-light dark:text-subtext-dark mb-2">{method.description}</p>
                <p className="text-primary font-semibold text-sm">{method.contact}</p>
                <p className="text-xs text-subtext-light dark:text-subtext-dark mt-1">{method.availability}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-yellow-200/50 dark:border-slate-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <i className="text-primary text-2xl" data-lucide="send"></i>
                <h2 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">Send us a message</h2>
              </div>

              <p className="text-subtext-light dark:text-subtext-dark mb-6">
                Fill the form and we'll be happy to help you
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" data-lucide="user"></i>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name here"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-slate-600 rounded-lg focus:border-primary focus:outline-none transition-colors bg-white dark:bg-slate-700 text-text-light dark:text-text-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" data-lucide="mail"></i>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email ID"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-slate-600 rounded-lg focus:border-primary focus:outline-none transition-colors bg-white dark:bg-slate-700 text-text-light dark:text-text-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" data-lucide="phone"></i>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-slate-600 rounded-lg focus:border-primary focus:outline-none transition-colors bg-white dark:bg-slate-700 text-text-light dark:text-text-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-light dark:text-text-dark mb-2">
                    Type message here *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message here"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 rounded-lg focus:border-primary focus:outline-none transition-colors bg-white dark:bg-slate-700 text-text-light dark:text-text-dark resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center rounded-lg h-12 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold leading-normal tracking-[0.015em] hover:from-secondary hover:to-primary transition-all transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <span>Send Message</span>
                  <i className="ml-2" data-lucide="arrow-right"></i>
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-yellow-200/50 dark:border-slate-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <i className="text-primary text-2xl" data-lucide="help-circle"></i>
                <h2 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group cursor-pointer"
                    open={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <summary className="flex items-center justify-between p-4 rounded-lg bg-background-light/50 dark:bg-slate-700/50 hover:bg-secondary/10 dark:hover:bg-slate-700 transition-colors list-none">
                      <h4 className="font-medium text-text-light dark:text-text-dark pr-4">{faq.question}</h4>
                      <i className="transition-transform duration-300 group-open:rotate-180 text-primary flex-shrink-0" data-lucide="chevron-down"></i>
                    </summary>
                    <div className="mt-2 px-4 pb-4">
                      <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Support Section */}
          <div className="mt-16 bg-gradient-to-r from-primary to-yellow-800 dark:from-primary/80 dark:to-yellow-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 font-display">Need Immediate Assistance?</h2>
            <p className="text-yellow-100 text-lg mb-8 max-w-2xl mx-auto">
              Our expert consultants are available for immediate support. Get instant help with your property documentation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center rounded-full h-14 px-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg font-bold leading-normal tracking-wider transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-xl shadow-orange-500/40">
                <i className="mr-2" data-lucide="phone"></i>
                <span>Call Now</span>
              </button>
              <button className="flex items-center justify-center rounded-full h-14 px-8 bg-white/20 backdrop-blur-sm text-white text-lg font-bold leading-normal tracking-wider border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1">
                <i className="mr-2" data-lucide="message-circle"></i>
                <span>WhatsApp Chat</span>
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-yellow-50 dark:bg-gray-900 border-t border-yellow-200 dark:border-slate-800 mt-12">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Company</h4>
                <ul className="space-y-2">
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">About Us</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Careers</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Press</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Services</h4>
                <ul className="space-y-2">
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/sale-deed">Sale Deed</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/gift-deed">Gift Deed</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/services/relinquishment-deed">Relinquishment Deed</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Support</h4>
                <ul className="space-y-2">
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="/contact">Contact Us</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">FAQ</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Help Center</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-text-light dark:text-text-dark mb-3 font-display">Legal</h4>
                <ul className="space-y-2">
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Terms of Service</a></li>
                  <li><a className="text-sm text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-yellow-200 dark:border-slate-800 text-center text-sm text-subtext-light dark:text-subtext-dark">
              <p>© 2025 SaleDeed.com. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* WhatsApp Float Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/918800505050?text=Hello,%20I%20need%20assistance%20regarding%20my%20property%20documentation."
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-gradient-to-r from-primary to-secondary hover:from-amber-700 hover:to-amber-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <i className="text-white text-2xl" data-lucide="message-circle"></i>
          </a>
        </div>
      </div>
    </div>
  )
}