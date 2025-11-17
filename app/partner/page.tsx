'use client'

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import ScrollToTop from '../../components/ScrollToTop';

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with all form data
    const whatsappMessage = `Hello saledeed.com, New Partnership Inquiry:

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;
    
    // Open WhatsApp with the message
    const whatsappUrl = `https://api.whatsapp.com/send?phone=918800505050&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="w-full">
          <Navigation currentPage="partner" />

          {/* Main Content */}
          <main className="px-6 md:px-10 lg:px-20 py-10">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-black dark:text-text-dark text-4xl md:text-6xl font-extrabold tracking-tighter font-display mb-6">
                Partner With Us
              </h1>
              <p className="text-black dark:text-subtext-dark text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                We welcome everyone who is willing to partner with us. Whether you are a deed writer, a property dealer, a lawyer, ex-government employee, real estate liaison agent, or just a reference giver, we assure you of a professional and profitable association with saledeed.com.
              </p>
            </div>

            {/* Partnership Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="users"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Reference Givers</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Earn referral commission by referring clients to our professional services.</p>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="home"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Property Dealers</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Get share in commission by partnering with us for comprehensive property services.</p>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="scale"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Lawyers</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Earn by sharing your expertise with our legal team.</p>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="edit"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Deed Writers</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Grow your business upto 10x by joining our network of professional deed writers.</p>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="ruler"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Architects/Structural Engineers/Interior Designers</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Elevate your income by joining us and expanding your client base.</p>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="briefcase"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Real Estate Liaison Agent</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Partner with us to provide comprehensive liaison services.</p>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="text-white text-2xl" data-lucide="shield-check"></i>
                </div>
                <h3 className="text-black dark:text-text-dark text-xl font-bold font-display mb-2">Ex-Government Employees</h3>
                <p className="text-black dark:text-subtext-dark text-sm">Encash your knowledge and experience by partnering with us.</p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div id="contact-form" className="max-w-2xl mx-auto">
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-lg border border-yellow-200/50">
                <div className="text-center mb-8">
                  <h2 className="text-black dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-black dark:text-subtext-dark text-lg">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-black dark:text-text-dark text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 border border-yellow-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-black dark:text-text-dark text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 border border-yellow-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-black dark:text-text-dark text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                      className="w-full px-4 py-3 border border-yellow-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-black dark:text-text-dark text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us a bit about your Profile. How can you Contribute to saledeed.com"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-yellow-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all resize-vertical"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white text-lg font-bold rounded-lg hover:from-secondary hover:to-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-primary/30"
                  >
                    <i data-lucide="send"></i>
                    Send Message
                  </button>

                  {/* WhatsApp Notice */}
                  <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 text-sm">
                    <i data-lucide="message-circle"></i>
                    <span>Your message will be sent directly to our WhatsApp for faster response</span>
                  </div>
                </form>
              </div>
            </div>
             <div className="my-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-primary/20">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <i data-lucide="user-plus" className="w-8 h-8 text-white"></i>
                  </div>
                  <h2 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-bold tracking-tight font-display mb-4">
                    Join Our Team
                  </h2>
                  <p className="text-subtext-light dark:text-subtext-dark text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Share your profile with us and tell us how you can contribute to saledeed.com
                  </p>
                  <button
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <i data-lucide="send" className="w-5 h-5"></i>
                    Share Your Profile
                  </button>
                </div>
              </div>

            {/* Why Partner With Us */}
            <div className="mt-16 bg-gradient-to-r from-primary to-yellow-800 dark:from-primary/80 dark:to-yellow-900 p-8 md:p-12 rounded-xl shadow-2xl text-center">
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight font-display mb-6">
                Why SaleDeed.com?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="text-white text-2xl" data-lucide="trending-up"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display text-white">Growing Network</h3>
                  <p className="text-yellow-100 leading-relaxed">
                    Join our expanding network of professionals and grow your business with us.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="text-white text-2xl" data-lucide="dollar-sign"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display text-white">Profitable Association</h3>
                  <p className="text-yellow-100 leading-relaxed">
                    Earn competitive commissions and build a sustainable income stream.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="text-white text-2xl" data-lucide="handshake"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display text-white">Professional Support</h3>
                  <p className="text-yellow-100 leading-relaxed">
                    Get full support from our experienced team and established processes.
                  </p>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-yellow-50 dark:bg-gray-900 text-subtext-light dark:text-subtext-dark mt-16 font-body">
            <div className="px-6 md:px-10 lg:px-20 py-16">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                <div className="col-span-2 lg:col-span-2">
                  <div className="flex items-center gap-3">
                    <i className="text-primary" data-lucide="home"></i>
                    <h2 className="text-text-light dark:text-text-dark text-2xl font-bold font-display">SaleDeed.com</h2>
                  </div>
                  <p className="mt-4 text-base">A one-stop shop for every property need - indeed !</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Services</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Deed Drafting</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Document Verification</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Registration Assistance</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Stamp Duty Calculation</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Company</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/about">About Us</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/contact">Contact Us</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Careers</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Press</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Legal</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">Terms of Service</a></li>
                    <li><a className="hover:text-primary dark:hover:text-secondary transition-colors" href="/privacy-policy">Privacy Policy</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-text-light dark:text-text-dark text-lg font-display">Contact</h3>
                  <div className="mt-4 flex items-center gap-2">
                    <i className="text-primary" data-lucide="mail"></i>
                    <a href="mailto:support@saledeed.com" className="text-base hover:text-primary dark:hover:text-secondary transition-colors">
                      support@saledeed.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 border-t border-yellow-200 dark:border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-base">© 2025 SaleDeed.com. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 sm:mt-0">
                  <a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">
                    <i data-lucide="facebook"></i>
                  </a>
                  <a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">
                    <i data-lucide="twitter"></i>
                  </a>
                  <a className="hover:text-primary dark:hover:text-secondary transition-colors" href="#">
                    <i data-lucide="linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </div>
  );
}